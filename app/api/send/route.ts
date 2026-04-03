import { NextResponse } from "next/server";
import { Resend } from "resend";

type BookingPayload = {
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  preferredDate: string;
  message: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getStringValue(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function parsePayload(body: unknown): BookingPayload {
  const source =
    typeof body === "object" && body !== null
      ? (body as Record<string, unknown>)
      : {};

  return {
    fullName: getStringValue(source.fullName),
    phone: getStringValue(source.phone),
    email: getStringValue(source.email),
    serviceType: getStringValue(source.serviceType),
    preferredDate: getStringValue(source.preferredDate),
    message: getStringValue(source.message),
  };
}

function validatePayload(payload: BookingPayload): string | null {
  if (!payload.fullName) return "Full name is required.";
  if (!payload.phone) return "Phone number is required.";
  if (!payload.email) return "Email is required.";
  if (!EMAIL_REGEX.test(payload.email)) return "Email is invalid.";
  if (!payload.serviceType) return "Service type is required.";
  if (!payload.preferredDate) return "Preferred date is required.";
  return null;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = parsePayload(body);
    const validationError = validatePayload(payload);

    if (validationError) {
      return NextResponse.json({ ok: false, error: validationError }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const leadsToEmail = process.env.LEADS_TO_EMAIL;

    if (!resendApiKey || !leadsToEmail) {
      return NextResponse.json(
        { ok: false, error: "Email configuration is missing." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);
    const subject = `New booking request — ${payload.serviceType}`;
    const messageText = payload.message || "No message provided.";
    const fromEmail =
      process.env.RESEND_FROM_EMAIL?.trim() || "CleanX Website <onboarding@resend.dev>";

    await resend.emails.send({
      from: fromEmail,
      to: [leadsToEmail],
      replyTo: payload.email,
      subject,
      text: [
        "New booking request received:",
        "",
        `Full name: ${payload.fullName}`,
        `Phone: ${payload.phone}`,
        `Email: ${payload.email}`,
        `Service type: ${payload.serviceType}`,
        `Preferred date: ${payload.preferredDate}`,
        `Message: ${messageText}`,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to process booking request", error);
    return NextResponse.json(
      { ok: false, error: "Failed to send booking request." },
      { status: 500 }
    );
  }
}

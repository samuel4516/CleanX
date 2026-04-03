import { NextResponse } from "next/server";
import { Resend } from "resend";
import { Buffer } from "node:buffer";

type BookingPayload = {
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  preferredDate: string;
  message: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_PHOTO_FILES = 8;
const MAX_PHOTO_FILE_SIZE_BYTES = 5 * 1024 * 1024;

function getStringValue(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function parsePayload(source: Record<string, unknown>): BookingPayload {
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

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const payload = parsePayload({
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      serviceType: formData.get("serviceType"),
      preferredDate: formData.get("preferredDate"),
      message: formData.get("message"),
    });
    const validationError = validatePayload(payload);

    if (validationError) {
      return NextResponse.json({ ok: false, error: validationError }, { status: 400 });
    }

    const photoFiles = formData
      .getAll("photos")
      .filter((item): item is File => item instanceof File)
      .filter((file) => file.size > 0 && file.name.trim().length > 0);

    if (photoFiles.length > MAX_PHOTO_FILES) {
      return NextResponse.json(
        { ok: false, error: `Too many files. Maximum is ${MAX_PHOTO_FILES}.` },
        { status: 400 }
      );
    }

    for (const file of photoFiles) {
      if (!file.type.startsWith("image/")) {
        return NextResponse.json(
          { ok: false, error: "Only image files are allowed." },
          { status: 400 }
        );
      }

      if (file.size > MAX_PHOTO_FILE_SIZE_BYTES) {
        return NextResponse.json(
          { ok: false, error: "One or more files are too large." },
          { status: 400 }
        );
      }
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
    const attachments = await Promise.all(
      photoFiles.map(async (file) => {
        const bytes = await file.arrayBuffer();
        const base64Content = Buffer.from(bytes).toString("base64");
        return {
          filename: file.name,
          content: base64Content,
        };
      })
    );
    const safePayload = {
      fullName: escapeHtml(payload.fullName),
      phone: escapeHtml(payload.phone),
      email: escapeHtml(payload.email),
      serviceType: escapeHtml(payload.serviceType),
      preferredDate: escapeHtml(payload.preferredDate),
      message: escapeHtml(messageText),
    };
    const photoSummary =
      photoFiles.length > 0
        ? `${photoFiles.length} photo(s) attached`
        : "No photos attached";
    const safePhotoSummary = escapeHtml(photoSummary);

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
        `Photos: ${photoSummary}`,
      ].join("\n"),
      html: `
        <p><strong>New booking request received:</strong></p>
        <p><strong>Full name:</strong> ${safePayload.fullName}</p>
        <p><strong>Phone:</strong> ${safePayload.phone}</p>
        <p><strong>Email:</strong> ${safePayload.email}</p>
        <p><strong>Service type:</strong> ${safePayload.serviceType}</p>
        <p><strong>Preferred date:</strong> ${safePayload.preferredDate}</p>
        <p><strong>Message:</strong> ${safePayload.message}</p>
        <p><strong>Photos:</strong> ${safePhotoSummary}</p>
      `,
      attachments,
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

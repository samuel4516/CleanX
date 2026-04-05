import { NextResponse } from "next/server";
import { Resend } from "resend";
import { Buffer } from "node:buffer";
import { google } from "googleapis";

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

async function sendTelegramNotification(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  console.log("Telegram token exists:", Boolean(token));
  console.log("Telegram chat id exists:", Boolean(chatId));
  console.log("Telegram chat id value:", chatId);

  if (!token) {
    throw new Error("Missing TELEGRAM_BOT_TOKEN");
  }

  if (!chatId) {
    throw new Error("Missing TELEGRAM_CHAT_ID");
  }

  const response = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    }
  );

  console.log("Telegram HTTP status:", response.status);

  const data = await response.json();
  console.log("Telegram API response:", JSON.stringify(data, null, 2));

  if (
    !response.ok ||
    !(
      typeof data === "object" &&
      data !== null &&
      "ok" in data &&
      Boolean((data as { ok?: boolean }).ok)
    )
  ) {
    const description =
      typeof data === "object" &&
      data !== null &&
      "description" in data &&
      typeof (data as { description?: unknown }).description === "string"
        ? (data as { description: string }).description
        : "Telegram sendMessage failed";

    throw new Error(description);
  }

  return data;
}

async function appendLeadToSheet(params: {
  payload: BookingPayload;
  attachmentCount: number;
}) {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  console.log("[Sheets] spreadsheet id exists:", Boolean(spreadsheetId));
  console.log("[Sheets] service account email exists:", Boolean(serviceAccountEmail));
  console.log("[Sheets] private key exists:", Boolean(privateKey));
  console.log(
    "[Sheets] private key has BEGIN marker:",
    Boolean(privateKey?.includes("-----BEGIN PRIVATE KEY-----"))
  );
  console.log(
    "[Sheets] private key has END marker:",
    Boolean(privateKey?.includes("-----END PRIVATE KEY-----"))
  );

  if (!spreadsheetId) {
    throw new Error("Missing GOOGLE_SHEETS_SPREADSHEET_ID");
  }

  if (!serviceAccountEmail) {
    throw new Error("Missing GOOGLE_SERVICE_ACCOUNT_EMAIL");
  }

  if (!privateKey) {
    throw new Error("Missing GOOGLE_PRIVATE_KEY");
  }

  const auth = new google.auth.JWT({
    email: serviceAccountEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Sheet1!A:J",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          new Date().toISOString(),
          params.payload.fullName,
          params.payload.phone,
          params.payload.email,
          params.payload.serviceType,
          params.payload.preferredDate,
          params.payload.message || "",
          params.attachmentCount,
          "New",
          "Website",
        ],
      ],
    },
  });
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

    try {
      await appendLeadToSheet({
        payload,
        attachmentCount: attachments.length,
      });
    } catch (sheetsError) {
      console.error("Google Sheets lead logging failed:", sheetsError);
    }

    const customerSubject = "We received your request — CleanX Reinigung";
    const photosReviewNote =
      attachments.length > 0
        ? "We received your uploaded photos and will review them before preparing an estimate."
        : "If you uploaded photos, we will review them before preparing an estimate.";
    const customerEmail = payload.email.trim();

    if (!customerEmail || !EMAIL_REGEX.test(customerEmail)) {
      console.error("Customer confirmation email skipped due to invalid recipient:", {
        customerEmail,
      });
    } else {
      const autoReplyRecipients = Array.from(new Set([customerEmail, leadsToEmail]));
      console.log("Auto-reply email recipient (customer):", customerEmail);
      console.log("Auto-reply email recipients (debug):", autoReplyRecipients);

      try {
        const autoReplyResult = await resend.emails.send({
          from: fromEmail,
          to: autoReplyRecipients,
          subject: customerSubject,
          html: `
            <h2>Thank you for your request!</h2>
            <p>Hello ${safePayload.fullName},</p>
            <p>We have received your booking request for <strong>${safePayload.serviceType}</strong>.</p>
            <p>Our team will review your details and get back to you as soon as possible.</p>
            <p><strong>Preferred date:</strong> ${safePayload.preferredDate}</p>
            <p>${escapeHtml(photosReviewNote)}</p>
            <p>Best regards,<br/>CleanX Reinigung</p>
          `,
          text: [
            "Thank you for your request!",
            "",
            `Hello ${payload.fullName},`,
            `We have received your booking request for ${payload.serviceType}.`,
            "Our team will review your details and get back to you as soon as possible.",
            `Preferred date: ${payload.preferredDate}`,
            photosReviewNote,
            "",
            "Best regards,",
            "CleanX Reinigung",
          ].join("\n"),
        });

        console.log("Auto-reply result:", autoReplyResult);
      } catch (customerEmailError) {
        console.error("Customer confirmation email failed:", customerEmailError);
      }
    }

    const telegramText =
      `🆕 New Booking Request\n\n` +
      `👤 Name: ${payload.fullName}\n` +
      `📞 Phone: ${payload.phone}\n` +
      `📧 Email: ${payload.email}\n` +
      `🧽 Service: ${payload.serviceType}\n` +
      `📅 Date: ${payload.preferredDate}\n` +
      `🖼 Photos: ${attachments.length}\n\n` +
      `💬 Message:\n` +
      `${payload.message || "-"}`;

    try {
      await sendTelegramNotification(telegramText);
    } catch (telegramError) {
      console.error("Telegram failed:", telegramError);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to process booking request", error);
    return NextResponse.json(
      { ok: false, error: "Failed to send booking request." },
      { status: 500 }
    );
  }
}

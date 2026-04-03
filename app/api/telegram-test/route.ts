import { NextResponse } from "next/server";

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

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text,
    }),
  });

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

export async function GET() {
  try {
    const result = await sendTelegramNotification("Telegram test from CleanX");
    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Telegram failed:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Telegram failed",
        telegramError: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}

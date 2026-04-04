import { NextResponse } from "next/server";
import { google } from "googleapis";

const TARGET_RANGE = "Sheet1!A:J";

export async function GET() {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  console.log("[Sheets Test] spreadsheet id exists:", Boolean(spreadsheetId));
  console.log("[Sheets Test] service account email exists:", Boolean(serviceAccountEmail));
  console.log("[Sheets Test] private key exists:", Boolean(privateKey));
  console.log("[Sheets Test] spreadsheet id value:", spreadsheetId);
  console.log("[Sheets Test] target range:", TARGET_RANGE);

  try {
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
      range: TARGET_RANGE,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            "TEST NAME",
            "123456789",
            "test@example.com",
            "Test Service",
            "2026-04-04",
            "Google Sheets test row",
            0,
            "New",
            "Sheets Test",
          ],
        ],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Sheets Test] append failed:", error);

    const message = error instanceof Error ? error.message : String(error);
    const stack = error instanceof Error ? error.stack : undefined;

    return NextResponse.json(
      {
        success: false,
        error: message,
        stack,
      },
      { status: 500 }
    );
  }
}

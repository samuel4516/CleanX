import { NextResponse } from "next/server";
import { google } from "googleapis";

const TARGET_RANGE = "Sheet1!A:J";

export async function GET() {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;

  console.log("[Sheets Test] spreadsheet id exists:", Boolean(spreadsheetId));
  console.log("[Sheets Test] service account json exists:", Boolean(serviceAccountJson));
  console.log("[Sheets Test] spreadsheet id value:", spreadsheetId);
  console.log("[Sheets Test] target range:", TARGET_RANGE);

  try {
    if (!spreadsheetId) {
      throw new Error("Missing GOOGLE_SHEETS_SPREADSHEET_ID");
    }

    if (!serviceAccountJson) {
      throw new Error("Missing GOOGLE_SERVICE_ACCOUNT_JSON");
    }

    let credentials: { client_email?: unknown; private_key?: unknown };

    try {
      credentials = JSON.parse(serviceAccountJson) as {
        client_email?: unknown;
        private_key?: unknown;
      };
    } catch {
      throw new Error("Invalid GOOGLE_SERVICE_ACCOUNT_JSON");
    }

    const clientEmail =
      typeof credentials.client_email === "string" ? credentials.client_email : "";
    const privateKeyRaw =
      typeof credentials.private_key === "string" ? credentials.private_key : "";

    console.log("[Sheets Test] service account client_email exists:", Boolean(clientEmail));
    console.log("[Sheets Test] service account private_key exists:", Boolean(privateKeyRaw));

    if (!clientEmail) {
      throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON missing client_email");
    }

    if (!privateKeyRaw) {
      throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON missing private_key");
    }

    const privateKey = privateKeyRaw.replace(/\\n/g, "\n");

    const auth = new google.auth.JWT({
      email: clientEmail,
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

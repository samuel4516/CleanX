import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const fullName = body.fullName?.trim();
    const phone = body.phone?.trim();
    const email = body.email?.trim();
    const serviceType = body.serviceType?.trim();
    const preferredDate = body.preferredDate?.trim();
    const message = body.message?.trim() || "";

    if (!fullName || !phone || !email || !serviceType || !preferredDate) {
      return Response.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const to = process.env.LEADS_TO_EMAIL;
    if (!to) {
      return Response.json(
        { success: false, error: "Recipient email is not configured" },
        { status: 500 }
      );
    }

    const { error } = await resend.emails.send({
      from: "CleanX <onboarding@resend.dev>",
      to: [to],
      subject: `New booking request — ${serviceType}`,
      replyTo: email,
      html: `
        <h2>New booking request</h2>
        <p><strong>Full name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service type:</strong> ${serviceType}</p>
        <p><strong>Preferred date:</strong> ${preferredDate}</p>
        <p><strong>Message:</strong><br/>${message || "—"}</p>
      `,
    });

    if (error) {
      return Response.json(
        { success: false, error: error.message || "Email send failed" },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
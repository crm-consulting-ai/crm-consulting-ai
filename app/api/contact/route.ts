import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string;
    const message = formData.get("message") as string;

    const { data, error } = await resend.emails.send({
      from: "CRM Convert <onboarding@resend.dev>",
      to: ["silvanaebernal@gmail.com"],
      replyTo: email,
      subject: `New CRM enquiry from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Company: ${company}

Message:
${message}
      `,
    });

    if (error) {
      console.error("RESEND ERROR:", error);

      return Response.json(
        { error: error.message },
        { status: 500 }
      );
    }

    console.log("EMAIL SENT:", data);

    return Response.json({ success: true });
  } catch (error) {
    console.error("SERVER ERROR:", error);

    return Response.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
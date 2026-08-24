"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const message = formData.get("message") as string;

  await resend.emails.send({
    from: "CRM Convert <onboarding@resend.dev>",
    to: "silvanaebernal@gmail.com",
    subject: `New CRM enquiry from ${name}`,
    replyTo: email,
    text: `
Name: ${name}
Email: ${email}
Company: ${company}

Message:
${message}
    `,
  });
}
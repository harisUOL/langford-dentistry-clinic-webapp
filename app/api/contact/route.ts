import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const formData = await req.formData();

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  try {
    await resend.emails.send({
      from: "Langford Dentistry <onboarding@resend.dev>",
      to: "info@langforddental.co.uk", // Change to your email
      subject: "New Contact Form Message",
      html: `
        <h2>New Inquiry from Langford Dentistry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log("EMAIL ERROR:", error);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}

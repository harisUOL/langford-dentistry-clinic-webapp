import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const formData = await req.formData();

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const treatment = formData.get("treatment") as string;
  const date = formData.get("date") as string;
  const time = formData.get("time") as string;
  const notes = (formData.get("notes") as string) || "No notes provided";

  try {
    await resend.emails.send({
      from: "Langford Dentistry <onboarding@resend.dev>",
      to: process.env.BOOKING_NOTIFICATION_EMAIL!,
      subject: "New Booking Request",
      html: `
        <h2>New Booking Request from Langford Dentistry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Treatment:</strong> ${treatment}</p>
        <p><strong>Preferred Date:</strong> ${date}</p>
        <p><strong>Preferred Time:</strong> ${time}</p>
        <p><strong>Notes:</strong><br/> ${notes}</p>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("BOOKING EMAIL ERROR:", error);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}

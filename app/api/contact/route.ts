import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const smtpHost = process.env.ZOHO_SMTP_HOST;
const smtpPort = Number(process.env.ZOHO_SMTP_PORT ?? "465");
const smtpUser = process.env.ZOHO_SMTP_USER;
const smtpPass = process.env.ZOHO_SMTP_PASS;
const contactToEmail = process.env.CONTACT_TO_EMAIL;

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpPort === 465,
  auth: smtpUser && smtpPass ? { user: smtpUser, pass: smtpPass } : undefined,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const subject = typeof body.subject === "string" ? body.subject.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const inquiryType =
      typeof body.inquiryType === "string" && body.inquiryType.trim()
        ? body.inquiryType.trim()
        : typeof body.topic === "string" && body.topic.trim()
          ? body.topic.trim()
          : "General Inquiry";
    const submittedAt = new Date();
    const submittedAtLabel = new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "America/Chicago",
    }).format(submittedAt);

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!smtpHost || !smtpUser || !smtpPass || !contactToEmail) {
      return NextResponse.json(
        { success: false, error: "Email delivery is not configured yet." },
        { status: 500 }
      );
    }

    await transporter.sendMail({
      from: `"Restyle Contact Form" <${smtpUser}>`,
      to: contactToEmail,
      replyTo: email,
      subject: `[Restyle Website Inquiry] ${inquiryType} | ${subject}`,
      text: [
        "New website inquiry from getrestyle.com",
        "",
        `Inquiry Type: ${inquiryType}`,
        `Submitted: ${submittedAtLabel}`,
        "Page: /contact",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
        "",
        "Reply directly to respond to this sender.",
      ].join("\n"),
      html: `
        <div style="margin:0; padding:24px; background:#f5f5f5; font-family:Arial,sans-serif; color:#111111;">
          <div style="max-width:640px; margin:0 auto; background:#ffffff; border:1px solid #e5e5e5; border-radius:20px; overflow:hidden;">
            <div style="padding:24px 28px; background:#111111; color:#ffffff;">
              <p style="margin:0 0 8px; font-size:12px; letter-spacing:0.12em; text-transform:uppercase; opacity:0.72;">Restyle Website</p>
              <h1 style="margin:0; font-size:24px; line-height:1.2;">New Contact Inquiry</h1>
            </div>
            <div style="padding:28px;">
              <div style="margin-bottom:24px; padding:18px 20px; background:#fafafa; border:1px solid #ededed; border-radius:16px;">
                <p style="margin:0 0 8px;"><strong>Inquiry Type:</strong> ${escapeHtml(inquiryType)}</p>
                <p style="margin:0 0 8px;"><strong>Subject:</strong> ${escapeHtml(subject)}</p>
                <p style="margin:0 0 8px;"><strong>Submitted:</strong> ${escapeHtml(submittedAtLabel)}</p>
                <p style="margin:0;"><strong>Page:</strong> /contact</p>
              </div>
              <div style="margin-bottom:24px;">
                <h2 style="margin:0 0 12px; font-size:18px;">Sender</h2>
                <p style="margin:0 0 8px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
                <p style="margin:0;"><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}" style="color:#111111;">${escapeHtml(email)}</a></p>
              </div>
              <div style="margin-bottom:24px;">
                <h2 style="margin:0 0 12px; font-size:18px;">Message</h2>
                <div style="padding:18px 20px; background:#ffffff; border:1px solid #ededed; border-radius:16px; white-space:pre-wrap;">${escapeHtml(message)}</div>
              </div>
              <p style="margin:0; font-size:14px; color:#666666;">Reply directly to respond to this sender.</p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "We couldn't send your message right now. Please try again.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

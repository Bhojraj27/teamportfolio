import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  country?: unknown;
  projectType?: unknown;
  budget?: unknown;
  timeline?: unknown;
  message?: unknown;
};

function asText(value: unknown, max = 500) {
  return String(value ?? "")
    .trim()
    .slice(0, max);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = asText(body.name, 120);
    const email = asText(body.email, 200).toLowerCase();
    const company = asText(body.company, 160);
    const country = asText(body.country, 120);
    const projectType = asText(body.projectType, 120);
    const budget = asText(body.budget, 120);
    const timeline = asText(body.timeline, 120);
    const message = asText(body.message, 5000);

    if (!name || !emailPattern.test(email) || message.length < 12) {
      return NextResponse.json(
        {
          ok: false,
          error: "Please complete name, email, and project details.",
        },
        { status: 400 },
      );
    }

    const smtpUser = process.env.EMAIL?.trim();
    const smtpPass = process.env.PASSWORD?.replace(/\s+/g, "").trim();
    const mailbox = process.env.CONTACT_TO?.trim() || smtpUser;

    if (!smtpUser || !smtpPass || !mailbox) {
      console.error("Contact API misconfigured: missing EMAIL/PASSWORD.");
      return NextResponse.json(
        { ok: false, error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST?.trim() || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE
        ? process.env.SMTP_SECURE === "true"
        : true,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const submittedAt = new Date().toISOString();
    const subject = `New project inquiry from ${name}`;

    const textLines = [
      "New project inquiry from the Kestryn website",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "—"}`,
      `Country: ${country || "—"}`,
      `Project type: ${projectType || "—"}`,
      `Budget: ${budget || "—"}`,
      `Timeline: ${timeline || "—"}`,
      "",
      "Message:",
      message,
      "",
      `Submitted at: ${submittedAt}`,
    ];

    const html = `
      <div style="font-family:Segoe UI,Arial,sans-serif;line-height:1.6;color:#10141a">
        <h2 style="margin:0 0 12px">New project inquiry</h2>
        <p style="margin:0 0 16px;color:#526074">Submitted via the Kestryn contact form.</p>
        <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse">
          <tr><td style="padding:6px 0;color:#738094;width:140px">Name</td><td style="padding:6px 0">${escapeHtml(name)}</td></tr>
          <tr><td style="padding:6px 0;color:#738094">Email</td><td style="padding:6px 0"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding:6px 0;color:#738094">Company</td><td style="padding:6px 0">${escapeHtml(company || "—")}</td></tr>
          <tr><td style="padding:6px 0;color:#738094">Country</td><td style="padding:6px 0">${escapeHtml(country || "—")}</td></tr>
          <tr><td style="padding:6px 0;color:#738094">Project type</td><td style="padding:6px 0">${escapeHtml(projectType || "—")}</td></tr>
          <tr><td style="padding:6px 0;color:#738094">Budget</td><td style="padding:6px 0">${escapeHtml(budget || "—")}</td></tr>
          <tr><td style="padding:6px 0;color:#738094">Timeline</td><td style="padding:6px 0">${escapeHtml(timeline || "—")}</td></tr>
        </table>
        <div style="margin-top:18px;padding:14px 16px;border-radius:12px;background:#eef2f6">
          <p style="margin:0 0 8px;color:#738094;font-size:12px;text-transform:uppercase;letter-spacing:0.08em">Message</p>
          <p style="margin:0;white-space:pre-wrap">${escapeHtml(message)}</p>
        </div>
        <p style="margin:16px 0 0;color:#738094;font-size:12px">Submitted at ${escapeHtml(submittedAt)}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Kestryn Website" <${smtpUser}>`,
      to: mailbox,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject,
      text: textLines.join("\n"),
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form send failed:", error);
    return NextResponse.json(
      { ok: false, error: "Unable to send your message right now." },
      { status: 500 },
    );
  }
}

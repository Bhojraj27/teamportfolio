import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !emailPattern.test(email) || message.length < 12) {
      return NextResponse.json(
        { ok: false, error: "Please complete name, email, and project details." },
        { status: 400 },
      );
    }

    /**
     * Connect an email provider here (Resend, SES, etc.).
     * Until then, inquiries are accepted so the form can be tested locally.
     */
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}

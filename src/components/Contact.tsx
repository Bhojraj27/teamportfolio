"use client";

import { useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Container } from "@/components/ui/Section";
import { useToast } from "@/components/ui/Toast";
import { budgetRanges, projectTypes, timelines } from "@/data/contact";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-2xl border border-[color:var(--glass-border)] bg-[color:var(--glass)] px-4 py-3 text-sm text-foreground outline-none backdrop-blur-md transition placeholder:text-faint focus:border-[color:var(--glass-border-hover)] focus:bg-[color:var(--glass-hover)] focus:shadow-[var(--glass-glow)]";

export function Contact() {
  const { toast } = useToast();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("company_website")) return;

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          country: data.get("country"),
          projectType: data.get("projectType"),
          budget: data.get("budget"),
          timeline: data.get("timeline"),
          message: data.get("message"),
        }),
      });

      const payload = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!response.ok || !payload?.ok) {
        throw new Error(payload?.error || "Request failed");
      }

      setStatus("sent");
      form.reset();
      toast({
        tone: "success",
        title: "Message sent",
        description:
          "Thanks for reaching out. We received your inquiry and will follow up soon.",
      });
    } catch (error) {
      setStatus("error");
      toast({
        tone: "error",
        title: "Could not send message",
        description:
          error instanceof Error && error.message
            ? `${error.message} You can also email us at ${siteConfig.email}.`
            : `Something went wrong. Email us directly at ${siteConfig.email}.`,
      });
    }
  }

  return (
    <section id="contact" className="section-shell section-alt section-pad relative">
      <Container>
        <div className="glass-strong overflow-hidden rounded-[2rem]">
          <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="border-b border-[color:var(--glass-border)] p-7 sm:p-10 lg:border-b-0 lg:border-r">
              <p className="text-[11px] uppercase tracking-[0.24em] text-accent">
                Contact
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Let&apos;s Build Something Worth Shipping.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-muted">
                Tell us what you&apos;re building, what problem you&apos;re
                solving, and where you need engineering support. We&apos;ll get
                back to you with the next steps.
              </p>

              <div className="mt-10 space-y-3">
                <ContactLink
                  href={`mailto:${siteConfig.email}`}
                  icon={<Mail className="size-4" />}
                  label="Email Us"
                  value={siteConfig.email}
                />
                <ContactLink
                  href={siteConfig.linkedin}
                  icon={<LinkedInIcon className="size-4" />}
                  label="LinkedIn"
                  value="team-kestryn"
                />
                <ContactLink
                  href={siteConfig.github}
                  icon={<GitHubIcon className="size-4" />}
                  label="GitHub"
                  value="Bhojraj27"
                />
                <ContactLink
                  href={siteConfig.whatsapp}
                  icon={<MessageCircle className="size-4" />}
                  label="WhatsApp"
                  value="Message the team"
                />
              </div>
            </div>

            <form onSubmit={onSubmit} className="grid gap-4 p-7 sm:p-10">
              <input
                type="text"
                name="company_website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" name="name" required />
                <Field
                  label="Work Email"
                  name="email"
                  type="email"
                  required
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Company" name="company" />
                <Field label="Country" name="country" />
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <Select
                  label="Project Type"
                  name="projectType"
                  options={projectTypes}
                />
                <Select
                  label="Budget Range"
                  name="budget"
                  options={budgetRanges}
                />
                <Select label="Timeline" name="timeline" options={timelines} />
              </div>
              <label className="block text-xs text-faint">
                Tell us about your project
                <textarea
                  name="message"
                  required
                  rows={5}
                  className={cn(fieldClass, "mt-2 resize-y")}
                  placeholder="Product, goals, current stack, and what you need from us."
                />
              </label>
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-glass mt-2 inline-flex items-center justify-center rounded-full px-5 py-3.5 text-sm font-medium disabled:opacity-60"
              >
                {status === "sending"
                  ? "Sending…"
                  : "Send Project Inquiry →"}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-xs text-faint">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className={cn(fieldClass, "mt-2")}
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: readonly string[];
}) {
  return (
    <label className="block text-xs text-faint">
      {label}
      <select name={name} className={cn(fieldClass, "mt-2")} defaultValue="">
        <option value="" disabled>
          Select
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-surface text-foreground">
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function ContactLink({
  href,
  icon,
  label,
  value,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 rounded-2xl border border-[color:var(--glass-border)] bg-[color:var(--glass)] px-4 py-3 backdrop-blur-md transition hover:border-[color:var(--glass-border-hover)] hover:bg-[color:var(--glass-hover)]"
    >
      <span className="grid size-9 place-items-center rounded-full bg-[color:var(--glass-strong)] text-accent">
        {icon}
      </span>
      <span>
        <span className="block text-sm text-foreground">{label}</span>
        <span className="block text-xs text-faint">{value}</span>
      </span>
    </a>
  );
}

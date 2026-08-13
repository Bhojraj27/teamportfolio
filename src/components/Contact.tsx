"use client";

import { useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Container } from "@/components/ui/Section";
import { budgetRanges, projectTypes, timelines } from "@/data/contact";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-faint focus:border-accent/50";

export function Contact() {
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
      if (!response.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-white/8 bg-surface">
          <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="border-b border-white/8 p-7 sm:p-10 lg:border-b-0 lg:border-r">
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
                className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent via-indigo to-violet px-5 py-3.5 text-sm font-medium text-white transition hover:brightness-110 disabled:opacity-60"
              >
                {status === "sending"
                  ? "Sending…"
                  : "Send Project Inquiry →"}
              </button>
              {status === "sent" ? (
                <p className="text-sm text-cyan">
                  Thanks — we received your inquiry and will follow up with next
                  steps.
                </p>
              ) : null}
              {status === "error" ? (
                <p className="text-sm text-red-400">
                  Something went wrong. Email us directly at {siteConfig.email}.
                </p>
              ) : null}
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
          <option key={option} value={option} className="bg-[#0c0e16]">
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
      className="flex items-center gap-3 rounded-2xl border border-white/8 px-4 py-3 transition hover:border-white/16"
    >
      <span className="grid size-9 place-items-center rounded-full bg-white/4 text-accent">
        {icon}
      </span>
      <span>
        <span className="block text-sm text-foreground">{label}</span>
        <span className="block text-xs text-faint">{value}</span>
      </span>
    </a>
  );
}

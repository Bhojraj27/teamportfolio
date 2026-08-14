"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition duration-300",
        scrolled || open
          ? "border-b border-white/8 bg-[#05060a]"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-17 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/#home" className="relative z-10" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] text-muted transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          className="group hidden items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-[13px] font-medium text-foreground transition hover:border-accent/40 hover:bg-accent/10 lg:inline-flex"
        >
          Start a Project
          <span aria-hidden="true" className="transition group-hover:translate-x-0.5">
            →
          </span>
        </Link>

        <button
          type="button"
          className="relative z-10 grid size-10 place-items-center rounded-full border border-white/10 bg-white/4 text-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="fixed inset-0 top-17 bg-[#05060a] transition">
          <nav className="flex h-full flex-col px-6 py-8" aria-label="Mobile">
            {siteConfig.nav.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/6 py-4 font-display text-3xl tracking-tight text-foreground"
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-linear-to-r from-accent via-indigo to-violet px-5 py-3.5 text-sm font-medium text-white"
            >
              Start a Project →
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

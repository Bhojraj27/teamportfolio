"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash || "#home");
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
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
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300",
        scrolled || open ? "glass-nav" : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-17 max-w-7xl items-center justify-between gap-3 px-5 sm:px-8 lg:px-10">
        <Link href="/#home" className="relative z-10" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-active={hash === item.href.replace("/", "") ? "true" : "false"}
              className="nav-link text-[13px]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="relative z-10 flex items-center gap-2">
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>
          <Link
            href="/#contact"
            className="btn-glass group hidden items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium lg:inline-flex"
          >
            Start a Project
            <span aria-hidden="true" className="transition group-hover:translate-x-0.5">
              →
            </span>
          </Link>

          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-[color:var(--glass-border)] bg-[color:var(--glass-cool)] text-foreground backdrop-blur-md transition hover:border-[color:var(--glass-border-hover)] hover:text-accent lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="fixed inset-0 top-17 bg-[color:color-mix(in_srgb,var(--background)_92%,transparent)] backdrop-blur-2xl transition">
          <nav className="flex h-full flex-col px-6 py-8" aria-label="Mobile">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Menu</p>
              <ThemeToggle />
            </div>
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-[color:var(--glass-border)] py-4 font-display text-3xl tracking-tight text-foreground transition hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="btn-glass mt-8 inline-flex items-center justify-center rounded-full px-5 py-3.5 text-sm font-medium"
            >
              Start a Project →
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

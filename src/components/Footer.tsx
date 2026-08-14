import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Section";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="section-shell border-t border-[color:var(--glass-border)] pb-8 pt-12 sm:pb-10 sm:pt-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo size="footer" />
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
              {siteConfig.tagline}
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-faint">
              Navigation
            </p>
            <ul className="mt-4 space-y-2">
              {siteConfig.footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-faint">
              Social
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <a href={siteConfig.linkedin} className="hover:text-foreground">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={siteConfig.github} className="hover:text-foreground">
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-foreground"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {siteConfig.footerTech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[color:var(--glass-border)] px-2.5 py-1 text-[11px] text-faint"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[color:var(--glass-border)] pt-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {siteConfig.name}. All rights reserved.
          </p>
          <p>Remote software development for international teams.</p>
        </div>
      </Container>
    </footer>
  );
}

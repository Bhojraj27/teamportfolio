import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative grid size-8 place-items-center" aria-hidden="true">
        <svg viewBox="0 0 32 32" className="size-8">
          <circle cx="10" cy="10" r="2.1" fill="var(--accent)" />
          <circle cx="22" cy="10" r="2.1" fill="var(--brand)" />
          <circle cx="10" cy="22" r="2.1" fill="var(--accent-2)" />
          <circle cx="22" cy="22" r="2.1" fill="var(--accent)" />
          <path
            d="M10 10 L22 10 L22 22 L10 22 Z"
            fill="none"
            stroke="color-mix(in srgb, var(--accent) 45%, transparent)"
            strokeWidth="1"
          />
        </svg>
      </span>
      <span className="font-display text-[15px] font-semibold tracking-[0.18em] text-foreground">
        {siteConfig.name}
      </span>
    </span>
  );
}

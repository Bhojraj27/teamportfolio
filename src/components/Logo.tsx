import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative grid size-8 place-items-center" aria-hidden="true">
        <svg viewBox="0 0 32 32" className="size-8">
          <circle cx="16" cy="6.5" r="2" fill="#4f8cff" />
          <circle cx="7.5" cy="13.5" r="2" fill="#6d7bff" />
          <circle cx="24.5" cy="13.5" r="2" fill="#4fd1c5" />
          <circle cx="10.5" cy="24.5" r="2" fill="#8b7dff" />
          <circle cx="21.5" cy="24.5" r="2" fill="#4f8cff" />
          <path
            d="M16 6.5 L24.5 13.5 L21.5 24.5 L10.5 24.5 L7.5 13.5 Z"
            fill="none"
            stroke="rgba(255,255,255,0.28)"
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

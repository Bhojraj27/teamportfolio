import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-accent via-indigo to-violet text-white shadow-[0_0_28px_rgba(79,140,255,0.22)] hover:shadow-[0_0_36px_rgba(79,140,255,0.38)] hover:brightness-[1.05]",
  secondary:
    "border border-white/12 bg-white/[0.03] text-foreground hover:border-white/20 hover:bg-white/[0.06]",
  ghost: "text-muted hover:text-foreground",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  arrow = false,
  className,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  external?: boolean;
}) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight transition duration-300",
    variants[variant],
    className,
  );

  const content = (
    <>
      {children}
      {arrow ? (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      ) : null}
    </>
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary: "btn-glass",
  secondary: "btn-glass-secondary",
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
    "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight",
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

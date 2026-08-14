import Image from "next/image";
import { brandAssets } from "@/data/brand";
import { cn } from "@/lib/utils";

/** Shared wordmark canvas — both PNGs are 2172×724 */
const WORDMARK = { width: 2172, height: 724 } as const;

const sizeClasses = {
  nav: "h-9 w-auto sm:h-10",
  footer: "h-10 w-auto sm:h-11",
} as const;

export function Logo({
  className,
  size = "nav",
}: {
  className?: string;
  size?: keyof typeof sizeClasses;
}) {
  const imageClass = cn("logo-wordmark shrink-0 object-contain object-left", sizeClasses[size]);

  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src={brandAssets.wordmarkLight}
        alt="Kestryn"
        width={WORDMARK.width}
        height={WORDMARK.height}
        priority={size === "nav"}
        className={cn(imageClass, "logo-on-dark-theme")}
      />
      <Image
        src={brandAssets.wordmarkDark}
        alt="Kestryn"
        width={WORDMARK.width}
        height={WORDMARK.height}
        priority={size === "nav"}
        className={cn(imageClass, "logo-on-light-theme")}
      />
    </span>
  );
}

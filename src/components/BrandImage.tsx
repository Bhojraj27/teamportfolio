import Image from "next/image";
import { brandAssets } from "@/data/brand";
import { cn } from "@/lib/utils";

type BrandVariant = "icon" | "wordmarkLight" | "wordmarkDark" | "lockup";

const variantConfig: Record<
  BrandVariant,
  { src: string; width: number; height: number; alt: string }
> = {
  icon: {
    src: brandAssets.icon,
    width: 120,
    height: 120,
    alt: "Kestryn icon",
  },
  wordmarkLight: {
    src: brandAssets.wordmarkLight,
    width: 420,
    height: 96,
    alt: "Kestryn",
  },
  wordmarkDark: {
    src: brandAssets.wordmarkDark,
    width: 420,
    height: 96,
    alt: "Kestryn",
  },
  lockup: {
    src: brandAssets.lockup,
    width: 480,
    height: 112,
    alt: "Kestryn",
  },
};

export function BrandImage({
  variant,
  className,
  imageClassName,
  priority = false,
  panel = false,
  bare = false,
}: {
  variant: BrandVariant;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  /** Dark inset panel for wordmarks on light section backgrounds */
  panel?: boolean;
  /** Skip outer wrapper styling — for use inside Logo */
  bare?: boolean;
}) {
  const config = variantConfig[variant];
  const usePanel =
    panel || (variant !== "icon" && !bare && variant !== "wordmarkDark");

  const image = (
    <Image
      src={config.src}
      alt={config.alt}
      width={config.width}
      height={config.height}
      priority={priority}
      className={cn(
        "h-auto w-auto max-w-full object-contain",
        variant === "icon" && "size-8 sm:size-9",
        variant === "wordmarkLight" && "h-7 w-auto sm:h-8",
        variant === "wordmarkDark" && "h-7 w-auto sm:h-8",
        variant === "lockup" && "h-9 w-auto sm:h-11",
        imageClassName,
      )}
    />
  );

  if (bare) {
    return <span className={cn("inline-flex shrink-0", className)}>{image}</span>;
  }

  return (
    <span
      className={cn(
        "relative inline-flex max-w-full items-center justify-center",
        usePanel &&
          "rounded-2xl border border-[color:var(--glass-border)] bg-[#0a0f18] px-4 py-3 shadow-[var(--glass-shadow)]",
        variant === "wordmarkDark" &&
          panel &&
          "bg-[color:var(--background-alt)] px-4 py-3",
        className,
      )}
    >
      {image}
    </span>
  );
}

"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="grid size-10 place-items-center rounded-full border border-[color:var(--glass-border)] bg-[color:var(--glass-cool)] text-muted backdrop-blur-md transition-[background-color,border-color,color,box-shadow,transform] duration-300 ease-out hover:border-[color:var(--glass-border-hover)] hover:bg-[color:var(--accent-soft)] hover:text-accent"
    >
      <span className="relative grid size-4 place-items-center">
        <Sun
          className={`absolute size-4 transition-[opacity,transform] duration-300 ease-out ${
            isDark
              ? "scale-100 rotate-0 opacity-100"
              : "scale-50 -rotate-90 opacity-0"
          }`}
        />
        <Moon
          className={`absolute size-4 transition-[opacity,transform] duration-300 ease-out ${
            isDark
              ? "scale-50 rotate-90 opacity-0"
              : "scale-100 rotate-0 opacity-100"
          }`}
        />
      </span>
    </button>
  );
}

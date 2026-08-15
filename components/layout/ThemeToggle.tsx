"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Simple two-state light/dark switch.
 *
 * The site defaults to light; dark is opt-in. Renders a same-size placeholder
 * until mounted, because the server cannot know the stored theme and rendering
 * the real state immediately would cause a hydration mismatch.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div
        className={cn(
          "h-10 w-10 rounded-full border border-border bg-surface",
          className,
        )}
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary",
        className,
      )}
    >
      {isDark ? (
        <Sun className="h-[1.15rem] w-[1.15rem]" strokeWidth={2} />
      ) : (
        <Moon className="h-[1.15rem] w-[1.15rem]" strokeWidth={2} />
      )}
    </button>
  );
}

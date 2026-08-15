import Link from "next/link";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Placeholder brand mark: a leaf sitting inside a snowflake — the "fresh
 * produce, frozen" idea in one shape. Drawn inline as SVG so it stays crisp at
 * any size and picks up the theme colours automatically.
 *
 * TO REPLACE WITH A REAL LOGO: swap the <svg> below for an <Image> pointing at
 * your logo file in /public/. Nothing else needs to change.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={cn("h-9 w-9", className)}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="23" className="fill-primary" />

      {/* Snowflake arms */}
      <g
        className="stroke-primary-foreground"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.85"
      >
        <path d="M24 6.5v9M24 32.5v9M8.5 24h9M30.5 24h9" />
        <path d="M13.4 13.4l5.6 5.6M29 29l5.6 5.6M34.6 13.4L29 19M19 29l-5.6 5.6" />
        <path d="M21 9.5l3 3 3-3M21 38.5l3-3 3 3M9.5 21l3 3-3 3M38.5 21l-3 3 3 3" />
      </g>

      {/* Leaf */}
      <path
        d="M24 32c-4.4 0-8-3.6-8-8 0-5.4 5-9.4 8-11.5 3 2.1 8 6.1 8 11.5 0 4.4-3.6 8-8 8Z"
        className="fill-primary-foreground"
      />
      <path
        d="M24 14.5V31"
        className="stroke-primary"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M24 21.5l3.4-3.2M24 26l-3.4-3.2"
        className="stroke-primary"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  );
}

export function Logo({
  className,
  showTagline = false,
  inverted = false,
}: {
  className?: string;
  showTagline?: boolean;
  inverted?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-2.5", className)}
      aria-label={`${site.name} — home`}
    >
      <LogoMark className="h-9 w-9 shrink-0 transition-transform duration-300 group-hover:rotate-12" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-bold tracking-tight",
            inverted ? "text-white" : "text-foreground",
          )}
        >
          Nature<span className="text-primary">Frost</span>
        </span>
        {showTagline && (
          <span
            className={cn(
              "mt-1 text-[0.65rem] font-medium uppercase tracking-[0.14em]",
              inverted ? "text-white/65" : "text-faint-foreground",
            )}
          >
            Preserving Nature
          </span>
        )}
      </span>
    </Link>
  );
}

import Link from "next/link";
import { asset, cn } from "@/lib/utils";

/**
 * The Nature Frost brand mark — leaf and snowflake — cropped from the company
 * logo artwork. Sits on a white tile in dark contexts, where the deep blue
 * snowflake would otherwise disappear into the background.
 */
export function LogoMark({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <span
      className={cn(
        "flex h-10 w-10 items-center justify-center",
        onDark
          ? "rounded-xl bg-white p-1"
          : "dark:rounded-xl dark:bg-white dark:p-1",
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset("/images/brand/nature-frost-mark.webp")}
        alt=""
        width={120}
        height={120}
        className="h-full w-full object-contain"
      />
    </span>
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
    <Link href="/" className={cn("group flex items-center gap-2.5", className)}>
      <LogoMark
        onDark={inverted}
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-bold tracking-tight",
            inverted ? "text-white" : "text-foreground",
          )}
        >
          Nature<span className="text-primary">Frost</span>
          {/* The link's name starts with the visible wordmark, so voice
              control ("click NatureFrost") works; this adds where it goes. */}
          <span className="sr-only"> (home)</span>
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

import { cn } from "@/lib/utils";
import { Icon } from "./Icon";

/**
 * A flat tinted panel with an icon and caption, used where a photograph will
 * eventually go. Replaces the earlier photo-placeholder frame — this reads as
 * a deliberate graphic rather than a missing image.
 *
 * To use a real photo later, swap this for an <img src="/images/...jpg" />.
 */
export function IconPanel({
  icon,
  label,
  sublabel,
  tone = "green",
  aspect = "4/3",
  className,
}: {
  icon: string;
  label: string;
  sublabel?: string;
  tone?: "green" | "ice";
  aspect?: "4/3" | "16/9" | "1/1" | "3/2";
  className?: string;
}) {
  const aspectClass = {
    "4/3": "aspect-[4/3]",
    "16/9": "aspect-video",
    "1/1": "aspect-square",
    "3/2": "aspect-[3/2]",
  }[aspect];

  return (
    <div
      className={cn(
        // `min-w-0` is load-bearing. With an aspect-ratio set, the browser
        // turns this panel's content height back into a minimum *width* — on a
        // narrow screen that made it demand ~371px inside a 320px column and
        // pushed the whole page sideways. min-w-0 lets it shrink to its column.
        "flex min-w-0 flex-col items-center justify-center gap-3 rounded-2xl border border-border p-6 text-center",
        tone === "green" ? "bg-primary-soft" : "bg-accent-soft",
        aspectClass,
        className,
      )}
    >
      <span
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-2xl bg-card",
          tone === "green" ? "text-primary" : "text-accent",
        )}
      >
        <Icon name={icon} className="h-7 w-7" />
      </span>
      <p className="text-sm font-semibold text-foreground">{label}</p>
      {sublabel && (
        <p className="max-w-[24ch] text-xs leading-relaxed text-muted-foreground">
          {sublabel}
        </p>
      )}
    </div>
  );
}

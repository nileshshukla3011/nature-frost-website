import { cn } from "@/lib/utils";
import { Icon } from "./Icon";

/** Generic surface panel used for most content blocks. */
export function Card({
  children,
  className,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300",
        hover && "hover:border-primary/40",
        className,
      )}
    >
      {children}
    </div>
  );
}

/**
 * Icon + title + description card. This is the single most repeated block on
 * the site (why-us, markets, quality pillars, facility systems, sustainability),
 * so it lives here rather than being re-written per page.
 */
export function FeatureCard({
  icon,
  title,
  description,
  children,
  accent = "primary",
  className,
}: {
  icon: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  accent?: "primary" | "accent";
  className?: string;
}) {
  return (
    <Card className={cn("flex h-full flex-col", className)}>
      <div
        className={cn(
          "mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
          accent === "primary"
            ? "bg-primary-soft text-primary"
            : "bg-accent-soft text-accent",
        )}
      >
        <Icon name={icon} className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      {children}
    </Card>
  );
}

/** Small pill label. */
export function Badge({
  children,
  tone = "primary",
  className,
}: {
  children: React.ReactNode;
  tone?: "primary" | "accent" | "neutral" | "outline";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
        tone === "primary" && "bg-primary-soft text-primary",
        tone === "accent" && "bg-accent-soft text-accent",
        tone === "neutral" && "bg-surface-alt text-muted-foreground",
        tone === "outline" && "border border-border text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Block } from "./Block";

/**
 * A full-width page section with consistent vertical rhythm and an optional
 * tinted background. Keeps spacing uniform across all nine pages.
 */
export function Section({
  children,
  className,
  containerClassName,
  id,
  tone = "default",
  size = "default",
  containerSize = "default",
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  tone?: "default" | "surface" | "brand" | "transparent";
  size?: "default" | "compact" | "large";
  containerSize?: "default" | "narrow" | "wide";
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full",
        size === "compact" && "py-12 sm:py-16",
        size === "default" && "py-16 sm:py-20 lg:py-24",
        size === "large" && "py-20 sm:py-28 lg:py-32",
        tone === "default" && "bg-background",
        tone === "surface" && "bg-surface",
        tone === "brand" && "bg-brand-band text-white",
        className,
      )}
    >
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}

/**
 * Standard section header: eyebrow label, headline and supporting paragraph.
 * Reused on every page so headings look identical throughout the site.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  inverted = false,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  /** Use on dark/brand backgrounds where the default text colours vanish. */
  inverted?: boolean;
  className?: string;
}) {
  return (
    <Block
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.18em]",
            inverted ? "text-white/75" : "text-primary",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]",
          inverted ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            inverted ? "text-white/85" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </Block>
  );
}

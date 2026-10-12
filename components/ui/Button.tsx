import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant =
  "primary" | "secondary" | "outline" | "ghost" | "white" | "glow" | "glass";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 " +
  "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ring " +
  "disabled:cursor-not-allowed disabled:opacity-55  whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover ",
  secondary: "bg-accent text-accent-foreground hover:bg-accent-hover ",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
  ghost: "text-foreground hover:bg-surface-alt",
  // For use on the dark brand gradient.
  white: "bg-white text-[#0b5d3b] hover:bg-white/90 ",
  // For use on the dark photo hero, in both themes.
  glow: "bg-emerald-400 text-emerald-950 shadow-lg shadow-emerald-500/25 hover:bg-emerald-300",
  glass:
    "border border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm sm:text-base",
  lg: "px-8 py-4 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

/**
 * Renders an internal Next.js <Link>, an external <a> (with the right
 * rel/target), or a <button> depending on which props are supplied.
 */
export function Button({
  href,
  external,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: string;
    external?: boolean;
  }) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    // Treat anything non-relative (tel:, mailto:, https://) as external.
    const isExternal = external ?? !href.startsWith("/");

    if (isExternal) {
      const opensNewTab = href.startsWith("http");
      return (
        <a
          href={href}
          className={classes}
          target={opensNewTab ? "_blank" : undefined}
          rel={opensNewTab ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

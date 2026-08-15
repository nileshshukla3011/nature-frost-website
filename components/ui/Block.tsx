import { cn } from "@/lib/utils";

/**
 * A plain layout wrapper.
 *
 * This replaced an animated scroll-reveal component. The site now shows all
 * content immediately on load rather than fading sections in as you scroll,
 * which keeps it calm and makes everything readable without JavaScript.
 */
export function Block({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn(className)}>{children}</div>;
}

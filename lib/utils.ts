/**
 * Joins class names, dropping falsy values.
 * A tiny local helper so the project avoids a `clsx` dependency.
 */
export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

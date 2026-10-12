/**
 * Joins class names, dropping falsy values.
 * A tiny local helper so the project avoids a `clsx` dependency.
 */
export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Prefixes a /public file path with the deploy sub-path, if there is one.
 *
 * Next adds basePath to <Link> routes automatically but NOT to plain <img src>
 * or file downloads, so those go through here. On the custom domain the prefix
 * is empty and this returns the path unchanged.
 */
export function asset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}

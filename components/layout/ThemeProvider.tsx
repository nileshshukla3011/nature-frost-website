"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Wraps the app in next-themes.
 *
 * `attribute="class"` toggles a `.dark` class on <html>, which is what the
 * `@custom-variant dark` rule in globals.css keys off. next-themes also injects
 * a blocking inline script that applies the stored theme before first paint,
 * which is what prevents the white flash when a dark-mode visitor loads a page.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      // Light is the default every first-time visitor sees. The OS setting is
      // deliberately NOT followed — dark mode is opt-in via the header toggle.
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
      storageKey="nature-frost-theme"
    >
      {children}
    </NextThemesProvider>
  );
}

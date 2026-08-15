import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { site } from "@/lib/site";
import { organizationJsonLd } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Premium IQF Frozen Fruits & Vegetables from India`,
    template: `%s | ${site.name}`,
  },
  description: site.shortDescription,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/favicon.svg",
  },
  /*
   * Auto-detection OFF. Left on, iOS Safari turns number-like body text
   * ("−35 to −40°C", "12–24 months", "3 MT") into blue underlined phone links.
   * Every real phone number on the site is already an explicit tel: link,
   * which this setting does not affect.
   */
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Matches the light/dark page background so the mobile browser chrome
  // blends with the site instead of flashing white.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1220" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${jakarta.variable}`}
      // next-themes writes the theme class here before paint; without this the
      // server/client class mismatch triggers a hydration warning.
      suppressHydrationWarning
    >
      <head>
        {/* Organization + LocalBusiness data for search engines. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />

        {/*
          Scroll-reveal starts elements at opacity 0 and a script reveals them.
          With JavaScript unavailable that script never runs, which would leave
          the entire site blank. This makes every section visible instead.
        */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider>
          <Header />
          {/*
            Offsets the fixed header so content is never hidden beneath it.
            4.5rem = the header's unscrolled height (py-4 + a 40px control row).
          */}
          <main id="main" className="pt-18">
            {children}
          </main>
          <Footer />
          <WhatsAppFab />
        </ThemeProvider>
      </body>
    </html>
  );
}

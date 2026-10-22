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
    // Nature Frost leaf-and-snowflake mark on a white tile, so it stays
    // visible on dark browser tab bars. Generated from
    // public/images/brand/nature-frost-mark.png.
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
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
  // The site opens in light mode whatever the device setting (dark mode is
  // opt-in), so the browser bar matches the light page. A separate dark entry
  // gave phones in dark mode a navy bar above a white page.
  themeColor: "#ffffff",
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

import type { MetadataRoute } from "next";
import { pageRoutes, site } from "@/lib/site";

/**
 * Generates /sitemap.xml at build time. Only real pages are listed — the
 * homepage's #about, #quality etc. are anchors within "/", not separate URLs.
 */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pageRoutes.map((route) => ({
    url: `${site.url}${route === "/" ? "" : route}/`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/products" ? 0.9 : 0.8,
  }));
}

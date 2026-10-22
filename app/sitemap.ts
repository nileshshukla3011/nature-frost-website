import type { MetadataRoute } from "next";
import { pageRoutes, site } from "@/lib/site";
import { products } from "@/lib/products";

/**
 * Generates /sitemap.xml at build time: the real pages plus one page per
 * product. The home page's #about, #markets etc. are anchors within "/", not
 * separate URLs.
 */
export const dynamic = "force-static";

const priority = (route: string) => {
  if (route === "/") return 1;
  if (route === "/products") return 0.9;
  if (route.startsWith("/products/")) return 0.7;
  return 0.8;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [
    ...pageRoutes,
    ...products.map((product) => `/products/${product.slug}`),
  ];

  return routes.map((route) => ({
    url: `${site.url}${route === "/" ? "" : route}/`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: priority(route),
  }));
}

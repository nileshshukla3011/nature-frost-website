import type { Metadata } from "next";
import { site, formattedAddress } from "./site";

/**
 * The link-preview card shown when a page is shared on WhatsApp, LinkedIn,
 * X and the like. 1200×630, in public/.
 */
const shareImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: `${site.name} — premium IQF frozen fruits and vegetables from India`,
};

/**
 * Shared metadata builder. Every page calls this so titles, canonical URLs and
 * social share cards stay consistent without repeating boilerplate.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = `${site.url}${path}`;
  const fullTitle = path === "/" ? title : `${title} | ${site.name}`;

  return {
    // The tab title gets "| Nature Frost" from the template in app/layout.tsx,
    // so pass the bare page name here — adding it again doubled the suffix.
    // The home title is already complete, so it opts out of the template.
    title: path === "/" ? { absolute: title } : title,
    description,
    keywords: [
      "IQF frozen vegetables",
      "frozen fruits supplier India",
      "individual quick frozen",
      "frozen food manufacturer Bihar",
      "frozen vegetables exporter India",
      ...keywords,
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: fullTitle,
      description,
      url,
      locale: "en_IN",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [shareImage.url],
    },
  };
}

/**
 * Organization + LocalBusiness structured data.
 * Lets Google display the business name, phone and address directly in
 * search results. Rendered once in the root layout.
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: site.name,
    legalName: site.legalName,
    description: site.shortDescription,
    url: site.url,
    email: site.email,
    slogan: site.tagline,
    telephone: site.phones.map((p) => p.tel),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: site.openingHours.days,
      opens: site.openingHours.opens,
      closes: site.openingHours.closes,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: [site.address.line1, site.address.line2]
        .filter(Boolean)
        .join(", "),
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.postalCode || undefined,
      addressCountry: site.address.countryCode,
    },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Place", name: "Export markets worldwide" },
    ],
    knowsAbout: [
      "IQF freezing",
      "Frozen vegetable processing",
      "Frozen fruit processing",
      "Cold chain logistics",
    ],
    sameAs: Object.values(site.social).filter(Boolean),
  };
}

/**
 * Product catalogue structured data for the products page: a plain list of
 * links to the product pages. Deliberately not schema.org `Product` items —
 * Google requires a price, review or rating on those and reports every
 * product without one as an error in Search Console.
 */
export function productCatalogJsonLd(items: { name: string; slug: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${site.name} Product Range`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(`/products/${item.slug}`),
    })),
  };
}

/**
 * Breadcrumb structured data for inner pages. `trail` is every level below
 * Home, e.g. [{ name: "Products", path: "/products" }, { name: "Sweet Corn",
 * path: "/products/sweet-corn" }].
 */
export function breadcrumbJsonLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map(
      (crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: absoluteUrl(crumb.path),
      }),
    ),
  };
}

/** Full URL of a page, with the trailing slash the static export serves. */
function absoluteUrl(path: string) {
  return path === "/" ? `${site.url}/` : `${site.url}${path}/`;
}

export { formattedAddress };

import type { Metadata } from "next";
import { site, formattedAddress } from "./site";

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
    title: fullTitle,
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
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
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
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
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

/** Product catalogue structured data for the products page. */
export function productCatalogJsonLd(
  items: { name: string; description: string; slug: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${site.name} Product Range`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: item.name,
        description: item.description,
        url: `${site.url}/products/#${item.slug}`,
        brand: { "@type": "Brand", name: site.name },
      },
    })),
  };
}

/** Breadcrumb structured data for inner pages. */
export function breadcrumbJsonLd(label: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: label,
        item: `${site.url}${path}`,
      },
    ],
  };
}

export { formattedAddress };

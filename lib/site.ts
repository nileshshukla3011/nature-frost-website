/**
 * SINGLE SOURCE OF TRUTH for Nature Frost contact + identity details.
 *
 * If a phone number, email address or the office address ever changes, change
 * it HERE and nowhere else. Every header, footer, contact page, WhatsApp
 * button and search-engine snippet reads from this file.
 */

export const site = {
  name: "Nature Frost",
  legalName: "Nature Frost",
  tagline: "Preserving Nature. Delivering Freshness.",
  shortDescription:
    "Premium IQF frozen fruits and vegetables from India, processed with modern technology to preserve freshness, quality and convenience.",

  /**
   * TODO(before launch): replace with the real domain once it is registered.
   * Used for canonical URLs, the sitemap and social share previews.
   */
  url: "https://naturefrost.com",

  email: "Naturefrost25@gmail.com",

  /**
   * `tel` is the machine-readable form used in href="tel:" links and in the
   * structured data Google reads. `display` is what a human sees.
   */
  phones: [
    {
      display: "+91 70042 62268",
      tel: "+917004262268",
      whatsapp: "917004262268",
    },
    {
      display: "+91 73688 01602",
      tel: "+917368801602",
      whatsapp: "917368801602",
    },
  ],

  /** The number the floating WhatsApp button dials. */
  whatsapp: {
    number: "917004262268",
    prefillMessage:
      "Hello Nature Frost, I would like to know more about your IQF frozen fruits and vegetables.",
  },

  /**
   * TODO(before launch): replace with the exact plant/office address in Bihar.
   * This feeds the footer, the contact page and the LocalBusiness structured
   * data that lets Google show your location in search results.
   */
  address: {
    line1: "Nature Frost Processing Facility",
    line2: "",
    city: "Bihar",
    state: "Bihar",
    postalCode: "",
    country: "India",
    countryCode: "IN",
    /** Google Maps embed query. Swap for the precise address or coordinates. */
    mapQuery: "Bihar, India",
  },

  businessHours: "Monday – Saturday, 9:00 AM – 6:00 PM IST",

  /**
   * TODO(optional): add real profile URLs and they appear in the footer
   * automatically. Leave a value empty and that icon is hidden.
   */
  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
    twitter: "",
  },

  /**
   * Certification badges are intentionally EMPTY until real certificates are
   * issued. Publishing a badge you do not hold is a compliance risk with
   * institutional buyers and export customers.
   *
   * To switch them on, add entries like:
   *   { label: "FSSAI Licensed", detail: "Lic. No. 10012345678901" }
   */
  certifications: [] as { label: string; detail: string }[],

  government: {
    ministry: "Ministry of Food Processing Industries (MoFPI)",
    authority: "Government of India",
    scheme: "Pradhan Mantri Kisan SAMPADA Yojana (PMKSY)",
    subScheme:
      "Creation / Expansion of Food Processing & Preservation Capacities (CEFPPC)",
    shortCredit:
      "MoFPI Supported Project | Government of India | PMKSY – CEFPPC",
  },
} as const;

/**
 * Primary navigation, shared by the header, mobile drawer and footer.
 *
 * Most entries are anchors into sections of the single-page home route.
 * Products and Contact are real pages of their own — they are the two that
 * attract search traffic and need their own titles and descriptions.
 */
export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Technology", href: "/#technology" },
  { label: "Products", href: "/products" },
  { label: "Quality", href: "/#quality" },
  { label: "Infrastructure", href: "/#infrastructure" },
  { label: "Sustainability", href: "/#sustainability" },
  { label: "Markets", href: "/#markets" },
  { label: "Contact", href: "/contact" },
] as const;

/** Only the routes that exist as real pages — used to build the sitemap. */
export const pageRoutes = ["/", "/products", "/contact"] as const;

/** Builds a WhatsApp deep link with an optional pre-filled message. */
export function whatsappLink(message: string = site.whatsapp.prefillMessage) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

/** Formats the address into a single human-readable line. */
export function formattedAddress() {
  const { line1, line2, city, state, postalCode, country } = site.address;
  return [line1, line2, city, state !== city ? state : "", postalCode, country]
    .filter(Boolean)
    .join(", ");
}

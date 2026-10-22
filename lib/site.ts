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

  /** Canonical domain. Used for canonical URLs, the sitemap and share previews. */
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
    {
      display: "+91 91550 11111",
      tel: "+919155011111",
      whatsapp: "919155011111",
    },
  ],

  /** The number the floating WhatsApp button dials. */
  whatsapp: {
    number: "917004262268",
    prefillMessage:
      "Hello Nature Frost, I would like to know more about your IQF frozen fruits and vegetables.",
  },

  /**
   * The processing plant. Feeds the footer, the contact page, the map and the
   * LocalBusiness structured data that lets Google show the location.
   */
  address: {
    line1: "Plot No. 10, Shree Kangan Food Park",
    line2: "Agapur, Mansurchak, Teghra",
    city: "Begusarai",
    state: "Bihar",
    postalCode: "",
    country: "India",
    countryCode: "IN",
    /** Google Maps embed query. Swap for coordinates if the pin is off. */
    mapQuery: "Shree Kangan Food Park, Teghra, Begusarai, Bihar",
  },

  /** Corporate office, shown alongside the plant address. */
  office: {
    line1: "Krishna Niwas, A-98, Road No. 4",
    line2: "Magistrate Colony",
    city: "Patna",
    state: "Bihar",
    postalCode: "800025",
    country: "India",
  },

  /** Named contacts from the company brochure. */
  people: [
    {
      name: "S.K. Bhardwaj",
      honorific: "Retd. I.P.S.",
      role: "Chairman",
      phone: { display: "+91 91550 11111", tel: "+919155011111" },
    },
    {
      name: "Shishir Kumar",
      role: "Chief Executive Officer",
      phone: { display: "+91 73688 01602", tel: "+917368801602" },
    },
  ] as {
    name: string;
    honorific?: string;
    role: string;
    phone: { display: string; tel: string };
  }[],

  /** The downloadable company brochure, served from /public. */
  brochure: {
    file: "/brochure/nature-frost-brochure.pdf",
    pages: 5,
  },

  businessHours: "Monday – Saturday, 9:00 AM – 6:00 PM IST",

  /** The same hours in the machine-readable form search engines read. */
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },

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
 * About, Markets and Clients are anchors into sections of the home page.
 * Products, Technology, Brochure and Contact are pages of their own, and
 * Quality, Infrastructure and Sustainability are sections of the facility
 * page — each one can have its own title and description for search.
 */
export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Technology", href: "/technology" },
  { label: "Products", href: "/products" },
  { label: "Quality", href: "/facility#quality" },
  { label: "Infrastructure", href: "/facility#infrastructure" },
  { label: "Sustainability", href: "/facility#sustainability" },
  { label: "Markets", href: "/#markets" },
  { label: "Clients", href: "/#clients" },
  { label: "Brochure", href: "/brochure" },
  { label: "Contact", href: "/contact" },
] as const;

/** Only the routes that exist as real pages — used to build the sitemap. */
export const pageRoutes = [
  "/",
  "/products",
  "/technology",
  "/facility",
  "/brochure",
  "/contact",
] as const;

/** Builds a WhatsApp deep link with an optional pre-filled message. */
export function whatsappLink(message: string = site.whatsapp.prefillMessage) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

/** Formats the address into a single human-readable line. */
export function formattedAddress(
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  } = site.address,
) {
  const { line1, line2, city, state, postalCode, country } = address;
  return [line1, line2, city, state !== city ? state : "", postalCode, country]
    .filter(Boolean)
    .join(", ");
}

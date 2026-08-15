/**
 * Product catalogue.
 *
 * To add a product: append one entry to `products`. The catalogue page, the
 * homepage preview, the filter tabs and the contact-form product dropdown all
 * read from this array — no JSX edits required.
 *
 * Each product shows an emoji on a soft tinted tile rather than a photograph,
 * so the catalogue looks complete without any image files. To move to real
 * photography later, add an `image` field here and render it in ProductCard.
 */

export type ProductCategory = "vegetables" | "fruits";

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  /** One-line buyer-facing description. */
  description: string;
  /** Typical cut/format offered. */
  formats: string[];
  /** Indicative harvest window for planning. */
  season: string;
  /** Emoji shown on the product tile. */
  emoji: string;
  /** Tile background tint. */
  tint: "green" | "amber" | "violet" | "rose";
  /** Shown as a small ribbon on the card. */
  featured?: boolean;
}

export const categories: {
  id: "all" | ProductCategory;
  label: string;
}[] = [
  { id: "all", label: "All Products" },
  { id: "vegetables", label: "Frozen Vegetables" },
  { id: "fruits", label: "Frozen Fruits" },
];

export const products: Product[] = [
  {
    slug: "sweet-corn",
    name: "Sweet Corn",
    category: "vegetables",
    description:
      "Tender golden kernels frozen at peak sweetness, retaining natural sugars, colour and bite.",
    formats: ["Whole kernels", "Cob segments"],
    season: "Year-round supply",
    emoji: "🌽",
    tint: "amber",
    featured: true,
  },
  {
    slug: "green-peas",
    name: "Green Peas",
    category: "vegetables",
    description:
      "Sorted, graded and individually quick frozen within hours of harvest for a fresh-picked taste.",
    formats: ["Whole peas"],
    season: "Nov – Mar harvest",
    emoji: "🫛",
    tint: "green",
    featured: true,
  },
  {
    slug: "okra-bhindi",
    name: "Okra / Bhindi",
    category: "vegetables",
    description:
      "Young, tender okra processed to hold its shape and texture through cooking.",
    formats: ["Whole", "Cut / sliced"],
    season: "Jun – Oct harvest",
    emoji: "🥒",
    tint: "green",
    featured: true,
  },
  {
    slug: "yam",
    name: "Yam",
    category: "vegetables",
    description:
      "Cleaned, peeled and uniformly cut yam, ready for direct use in commercial kitchens.",
    formats: ["Diced", "Sliced"],
    season: "Oct – Feb harvest",
    emoji: "🍠",
    tint: "amber",
  },
  {
    slug: "yellow-carrot",
    name: "Yellow Carrot",
    category: "vegetables",
    description:
      "Distinctive yellow carrots frozen to preserve their natural colour, crunch and sweetness.",
    formats: ["Diced", "Sliced", "Batons"],
    season: "Nov – Mar harvest",
    emoji: "🥕",
    tint: "amber",
  },
  {
    slug: "broccoli",
    name: "Broccoli",
    category: "vegetables",
    description:
      "Uniform florets, blanched and IQF frozen to lock in deep green colour and firm texture.",
    formats: ["Florets", "Cuts"],
    season: "Oct – Mar harvest",
    emoji: "🥦",
    tint: "green",
    featured: true,
  },
  {
    slug: "cauliflower",
    name: "Cauliflower",
    category: "vegetables",
    description:
      "Clean white florets, size-graded for consistent plate presentation and cooking time.",
    formats: ["Florets", "Cuts"],
    season: "Oct – Mar harvest",
    emoji: "🥬",
    tint: "green",
  },
  {
    slug: "baby-corn",
    name: "Baby Corn",
    category: "vegetables",
    description:
      "Hand-selected tender baby corn, frozen whole or cut for stir-fries, curries and salads.",
    formats: ["Whole", "Cut"],
    season: "Year-round supply",
    emoji: "🌽",
    tint: "amber",
  },
  {
    slug: "grilled-brinjal",
    name: "Grilled Brinjal",
    category: "vegetables",
    description:
      "Value-added grilled aubergine slices, frozen ready-to-use for Mediterranean and Indian menus.",
    formats: ["Grilled slices"],
    season: "Year-round supply",
    emoji: "🍆",
    tint: "violet",
  },
  {
    slug: "mixed-vegetables",
    name: "Mixed Vegetables",
    category: "vegetables",
    description:
      "Custom blends of peas, carrots, corn and beans, mixed to your specified ratio.",
    formats: ["Custom blends"],
    season: "Year-round supply",
    emoji: "🥗",
    tint: "green",
    featured: true,
  },
  {
    slug: "pineapple",
    name: "Pineapple",
    category: "fruits",
    description:
      "Ripe pineapple, cored and cut, frozen individually to prevent clumping and preserve juice.",
    formats: ["Chunks", "Tidbits", "Slices"],
    season: "Year-round supply",
    emoji: "🍍",
    tint: "amber",
    featured: true,
  },
  {
    slug: "jackfruit",
    name: "Jackfruit",
    category: "fruits",
    description:
      "Both ripe and raw jackfruit, cleaned and portioned for dessert and plant-based applications.",
    formats: ["Bulbs", "Chunks", "Raw cuts"],
    season: "Mar – Jul harvest",
    emoji: "🍈",
    tint: "amber",
    featured: true,
  },
  {
    slug: "seasonal-fruits",
    name: "Seasonal Fruits",
    category: "fruits",
    description:
      "Mango, guava, papaya and other regional fruits processed at the height of their season.",
    formats: ["Dices", "Slices", "Pulp-grade cuts"],
    season: "By season",
    emoji: "🍓",
    tint: "rose",
  },
  {
    slug: "custom-fruit-products",
    name: "Custom Fruit Products",
    category: "fruits",
    description:
      "Bespoke cuts, blends and pack formats developed to your product specification.",
    formats: ["To specification"],
    season: "On request",
    emoji: "🍊",
    tint: "amber",
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

/** Pack formats offered across institutional, HoReCa, retail and bulk buyers. */
export const packFormats = [
  {
    title: "Bulk / Institutional",
    detail: "10 kg and 20 kg master cartons with food-grade liners",
    audience: "Food manufacturers, institutional kitchens",
  },
  {
    title: "HoReCa Packs",
    detail: "1 kg and 2.5 kg catering packs",
    audience: "Hotels, restaurants, cafés, caterers",
  },
  {
    title: "Retail Packs",
    detail: "200 g, 500 g and 1 kg consumer packs",
    audience: "Supermarkets and modern retail",
  },
  {
    title: "Private Label",
    detail: "Your brand, your artwork, our processing",
    audience: "Retail chains and distributors",
  },
];

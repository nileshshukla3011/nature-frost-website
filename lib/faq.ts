/**
 * Frequently asked questions, shown on /faq and given to search engines as
 * FAQPage structured data.
 *
 * Answers are built from the same data as the rest of the site (products,
 * pack formats, addresses, phone numbers), so they stay in step with it. Only
 * answer with what the site already states — buyers read these as commitments.
 */
import { packFormats, products, type ProductCategory } from "./products";
import { formattedAddress, mainPhone, site } from "./site";

export interface FaqItem {
  question: string;
  answer: string;
  /** Optional follow-up link shown under the answer. */
  link?: { label: string; href: string };
}

export interface FaqGroup {
  title: string;
  items: FaqItem[];
}

/** "a, b and c" */
function listJoin(items: string[]) {
  return items.length < 2
    ? items.join("")
    : `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

const productNames = (category: ProductCategory) =>
  listJoin(products.filter((p) => p.category === category).map((p) => p.name));

export const faqGroups: FaqGroup[] = [
  {
    title: "IQF and frozen produce",
    items: [
      {
        question: "What is IQF?",
        answer:
          "IQF stands for Individual Quick Freezing. Each piece of fruit or vegetable is frozen separately in minutes at −35°C to −40°C, so ice crystals stay small, the texture holds up and the pieces stay free-flowing instead of freezing into a solid block. You can pour out only what you need.",
        link: { label: "How our IQF process works", href: "/technology" },
      },
      {
        question: "How long do IQF frozen fruits and vegetables last?",
        answer:
          "12 to 24 months, depending on the product, when they are held correctly at −18°C or lower. Once thawed, they should not be refrozen.",
      },
      {
        question: "Do your frozen products contain preservatives?",
        answer:
          "No. The low temperature does the preserving, so no chemical preservatives are needed.",
      },
      {
        question: "Are frozen vegetables as nutritious as fresh ones?",
        answer:
          "Produce for freezing is processed close to harvest, and freezing slows the nutrient loss that continues in fresh produce during days of transport and storage. That is why frozen produce often compares well with fresh produce that has spent several days reaching the shelf.",
        link: {
          label: "Why frozen is picked at its best",
          href: "/technology",
        },
      },
    ],
  },
  {
    title: "Products and packs",
    items: [
      {
        question: "Which products does Nature Frost offer?",
        answer: `Frozen vegetables: ${productNames("vegetables")}. Frozen fruits: ${productNames("fruits")}.`,
        link: { label: "See the full product range", href: "/products" },
      },
      {
        question: "What pack sizes are available?",
        answer: `${packFormats
          .map((format) => `${format.title} — ${format.detail.toLowerCase()}`)
          .join(
            "; ",
          )}. Pack sizes are indicative and confirmed against your specification at the quotation stage.`,
      },
      {
        question: "Do you offer private label packing?",
        answer:
          "Yes. We pack under your brand and artwork for retail chains and distributors, with formats and weights agreed at the quotation stage.",
      },
      {
        question: "Can you supply custom cuts or blends?",
        answer:
          "Yes. Mixed vegetables are blended to your specified ratio, and custom fruit products — cuts, blends and pack formats — are developed to your specification.",
        link: { label: "Send us your specification", href: "/contact" },
      },
    ],
  },
  {
    title: "Supply and ordering",
    items: [
      {
        question: "Who do you supply?",
        answer:
          "Hotels, restaurants and caterers (HoReCa), food manufacturers, modern retail, distributors, institutional buyers and export markets.",
      },
      {
        question: "Do you supply export markets?",
        answer:
          "Yes. Export buyers are one of the markets we serve, with export-oriented pack formats, container-load logistics and documentation support.",
      },
      {
        question: "What is your processing capacity?",
        answer:
          "The facility is designed for a planned IQF processing capacity of about 3 tonnes per hour.",
        link: {
          label: "Inside the facility",
          href: "/facility#infrastructure",
        },
      },
      {
        question: "Where is Nature Frost located?",
        answer: `The processing facility is at ${formattedAddress()}. The office is at ${formattedAddress(site.office)}.`,
      },
      {
        question: "How do I get a quote or a specification sheet?",
        answer: `Send an enquiry with the product, pack size and volume you need, call ${mainPhone.display} or message us on WhatsApp. We are available ${site.businessHours}.`,
        link: { label: "Send an enquiry", href: "/contact" },
      },
    ],
  },
];

/** Every question and answer as one list, for the structured data. */
export const faqItems = faqGroups.flatMap((group) => group.items);

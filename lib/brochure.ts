/**
 * Brochure page previews, rendered from the PDF in public/brochure/.
 *
 * If the brochure is replaced, re-export each page as an image into
 * public/images/brochure/ (page-1.webp, page-2.webp, …) and update this list.
 */
export const brochurePages = [
  { src: "/images/brochure/page-1.webp", title: "Cover" },
  { src: "/images/brochure/page-2.webp", title: "Contact details" },
  { src: "/images/brochure/page-3.webp", title: "About, mission & vision" },
  { src: "/images/brochure/page-4.webp", title: "IQF technology & clients" },
  { src: "/images/brochure/page-5.webp", title: "Products & facility" },
];

/** Pixel size of the page images, for layout reservation. */
export const brochurePageSize = { width: 1100, height: 1556 };

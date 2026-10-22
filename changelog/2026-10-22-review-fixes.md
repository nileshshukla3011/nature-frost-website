# 2026-10-22 — Shorter home page, product pages and review fixes

Changes from a full review of the code, content and live site. Items that
need a decision from Nature Frost are listed at the end.

## Added

- **Technology page (`/technology`).** IQF explained, the five processing
  stages, the temperature journey, the farm-to-freezer steps and why frozen
  produce keeps its nutrients — moved here from the home page.
- **Facility & Quality page (`/facility`).** Quality checks, infrastructure and
  sustainability, moved from the home page. The Quality, Infrastructure and
  Sustainability menu links jump to its sections.
- **A page for every product** (`/products/sweet-corn/` and 13 more): formats,
  availability, pack formats, Enquire and WhatsApp buttons, a spec-sheet
  request link and other products from the same category. Product cards (the
  whole card is clickable), the footer and the sitemap link to them.
- **How We Work** section on the home page, linking to the two new pages. It
  keeps the old `#technology`, `#quality`, `#infrastructure` and
  `#sustainability` anchors so older links still land in the right place.
- **Link-preview image** (`public/og-image.jpg`, 1200×630), so shared links show
  a picture on WhatsApp, LinkedIn and X.
- Opening hours and breadcrumbs in the structured data search engines read.

## Changed

- **Home page about 45% shorter**: 21 laptop screens down to 11, and the
  products now start 4 screens down instead of 11.
- **The 3 MT/hour capacity is described as planned**, as in the brochure: stats
  band, About photo caption, MoFPI section, Infrastructure heading and the
  home page search description.
- Products page: the stale "Request the Brochure" button is replaced by
  **View the Brochure** and **Request a Spec Sheet**.
- **Brochure PDF compressed from 6.0 MB to 2.6 MB.** Photos were re-encoded;
  text, logos and layout are unchanged on all five pages.
- Next.js updated from 16.3.1 to 16.4.2; `npm audit` reports 0 vulnerabilities.
- The browser bar colour is always white, matching the light-by-default site.

## Fixed

- The closed phone menu could be reached with the Tab key (11 invisible
  links). It is now inert while closed; opening it moves focus inside and
  closing returns focus to the menu button.
- The IQF comparison table and the temperature chart, which scroll sideways
  on phones, could not be scrolled with a keyboard.
- Key-figure labels and values were in the wrong order in the markup.
- Products page headings skipped a level.
- The floating WhatsApp and back-to-top buttons sat outside any page landmark.
- Product structured data no longer uses schema.org `Product`, which Google
  reports as an error for every item without a price or rating.
- Garbled characters in the `package.json` description, a stale example URL
  in `next.config.ts`, and a leftover scroll-reveal style in the layout.

## Removed

- `Nature Frost Final.pdf` from the project folder: an untracked, identical
  copy of the brochure. The original 6 MB PDF is still in git history
  (commit `2a6242c`).

## Needs a decision from Nature Frost

- **Contact form key.** Add the Web3Forms key as the GitHub secret
  `NEXT_PUBLIC_WEB3FORMS_KEY`; until then the live form only opens the
  visitor's own email app.
- Permission to show the Bihar Government seal and the Mother Dairy logo.
- A company email address on the naturefrost.com domain.
- www.naturefrost.in, printed in the brochure, does not resolve.
- One tagline across the site, brochure and building sign.
- Sources for the nutrition chart, the factory PIN code, and whether the
  facility image needs an "Artist's impression" caption.

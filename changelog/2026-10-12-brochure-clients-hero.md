# 2026-10-12 — Brochure, clients and hero redesign

Content in this release comes from the company brochure
(`Nature Frost Final.pdf`).

## Added

- **Brochure page (`/brochure`).** All 5 brochure pages shown as images, which
  work on every phone, with **Download PDF** and **Open PDF** buttons. The PDF
  is served from `/brochure/nature-frost-brochure.pdf`.
- **Brochure section on the home page.** A fanned stack of brochure pages with
  **View Brochure** and **Download PDF** buttons, placed after Markets.
- **Brochure button** in the header, and a **Download Brochure (PDF)** link in
  the hero.
- **Clients section** on the home page, right after the key figures, with a
  **Clients** menu link. It shows Mother Dairy, Government of Bihar, Tarkari,
  Trinetra Makhana Corporation, PAF and Chitransh Corporate Services. Chitransh
  has a red "CCS" monogram until their logo is available. Clients are listed in
  `lib/clients.ts`.
- **Contact persons** card on the contact page: S.K. Bhardwaj (Retd. I.P.S.),
  Chairman, and Shishir Kumar, CEO, each with a phone number.
- **Office address** (Krishna Niwas, A-98, Road No. 4, Magistrate Colony,
  Patna 800025) on the contact page and in the footer.
- **Third phone number**, +91 91550 11111, wherever phone numbers are listed.
- **Product photos** for Sweet Corn, Green Peas, Broccoli, Mixed Vegetables,
  Seasonal Fruits and Custom Fruit Products. The home page product preview now
  shows these first. Other products keep their emoji tiles.
- **Photo collage** in the About section: the facility, frozen vegetables and
  frozen fruits.
- Hover effects: cards lift slightly and photos zoom. Both are switched off for
  visitors whose device asks for reduced motion.

## Changed

- **Hero redesigned.** The facility photo fills the top of the page with a dark
  fade behind the text, so the headline no longer overlaps the building's
  lettering. On desktop the photo sits to the right of the text; on phones it
  is a band across the top with the text below. Four highlights sit along the
  bottom: IQF freezing, farm-fresh sourcing, cold chain, and the plant location.
- **Logo.** The drawn placeholder is replaced by the real leaf-and-snowflake
  mark from the brochure.
- **Factory address** is now the real one: Plot No. 10, Shree Kangan Food
  Park, Agapur, Mansurchak, Teghra, Begusarai, Bihar. It is used on the contact
  page, in the footer, in the business details Google reads, and for the map.
- **Map** on the contact page now points at the factory, and the "approximate
  location" note is gone.
- **Desktop menu.** Home (the logo links home) and Sustainability are no longer
  in the top bar, to make room for the Brochure button. Both are still in the
  phone menu and the footer.
- **About text** now says the facility "is being developed" at Shree Kangan
  Food Park, matching the brochure, instead of "we operate".
- README updated for clients, the brochure and images.
- **Contact page redesigned to fit one laptop screen.** The separate header
  band is gone: the intro and a single "Talk to us directly" card sit on the
  left, the enquiry form on the right. The card merges the contact persons
  with the main line, email, factory and office addresses, hours and a
  WhatsApp button, so each phone number appears once (the Chairman's and
  CEO's numbers on their own rows, +91 70042 62268 as the main line). The
  form is more compact (shorter message box, tighter spacing). The map moved
  to its own band below. On phones the order is intro → form → contact card.
- **About section re-laid out.** The factory photo is larger and fills the left
  side at full height; the text and the frozen vegetables and fruits photos
  share the right side, so the whole block is visible at once instead of the
  product photos dropping below the screen. The first paragraph, which
  repeated the section subtitle word for word, was removed.

## Unchanged on purpose

- The **WhatsApp button** still uses +91 70042 62268.
- The **domain** stays **naturefrost.com**. Note that the brochure PDF itself
  prints www.naturefrost.in; that needs correcting in the brochure's source file.

## Removed

- The five loose logo files in `public/` (`BIHAR_GOVT.webp`,
  `Mother_Dairy.webp`, `Paf.png`, `TARKARI.png`, `trinetraMakhana.png`).
  Smaller copies now live in `public/images/clients/`.

## Fixed

- The hero text box was see-through, so the building's sign showed behind the
  headline, and the feature cards were cut off at the bottom of the screen.
- The textured dots on the green bands (`dot-grid`) were referenced but never
  defined, so they did not show.

## Known follow-ups

- The green peas photo is low resolution (235×309) and looks slightly soft.
- The brochure cover includes the Ashoka emblem, which the site's own text
  avoids using.
- The factory's PIN code is not in the brochure.
- Chitransh Corporate Services logo still needed.

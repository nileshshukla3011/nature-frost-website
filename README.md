# Nature Frost — Website

Corporate website for Nature Frost, a premium IQF frozen fruits and vegetables
processing company in Bihar, India.

Built with **Next.js 16**, **Tailwind CSS v4** and TypeScript. It compiles to
plain static HTML, so it can be hosted almost anywhere — free.

---

## Running it locally

```bash
npm install     # once, after downloading the project
npm run dev     # then open http://localhost:3000
```

## Building for the web

```bash
npm run build   # creates the `out/` folder
npm run serve   # preview that folder at http://localhost:3000
```

`out/` is the complete website. Upload its contents to your host.

---

## How the site is organised

**One long home page, plus two standalone pages.**

| URL | What it is |
|---|---|
| `/` | Everything about the company, as sections you scroll through |
| `/products` | The full 14-product catalogue with category filters |
| `/contact` | The enquiry form and contact details |

The menu items About, Technology, Quality, Infrastructure, Sustainability and
Markets are **jump links** to sections of the home page (`/#about`,
`/#quality`, and so on) — not separate pages. Products and Contact are real
pages of their own, because those are the two that attract search traffic.

Home page section order: Hero → key figures → About (vision & mission) →
MoFPI support → Technology (IQF, five stages, temperature chart) → Products
preview → Farm to Freezer steps → Why Frozen → Quality → Infrastructure →
Sustainability → Markets → Why Nature Frost → Contact call-to-action.

## Design

Deliberately restrained, following the style of the earlier `Nilesh_Website`
reference project:

- **No animation.** No falling snowflakes, no fade-in-on-scroll, no counting
  numbers. Content is visible the instant the page loads. The only motion is a
  colour change on hover and smooth scrolling to anchors.
- **Flat colour, no gradients.** Solid tinted section bands rather than
  gradient washes.
- **Light by default.** The site always opens in light mode, even if the
  visitor's computer is set to dark. Dark mode is opt-in via the sun/moon
  button in the header, and the choice is remembered on that device.
- **Product pictures are emoji on soft tinted tiles** — the same approach the
  reference site uses. Nothing to upload, nothing that can break.

---

## ⚠️ Do this before going live

### 1. Make the contact form actually send email

The form is fully built, but it needs one free key to deliver mail.

1. Go to **https://web3forms.com**
2. Enter **Naturefrost25@gmail.com** — no signup required
3. An access key arrives in that inbox
4. In the project folder, copy `.env.local.example` to `.env.local`
5. Paste the key after `NEXT_PUBLIC_WEB3FORMS_KEY=`
6. Run `npm run build` again

**Do this before showing the site to anyone.** Until the key is set, the form
falls back to opening the visitor's own email app. That only works if they have
a desktop mail client such as Outlook configured — anyone using Gmail in a
browser tab, which is most people, will click Send and see nothing happen, and
that enquiry is lost. The fallback is a safety net for the developer, not a
working substitute.

> After the first live enquiry, **check the Gmail spam folder** and mark it as
> "Not spam" so later ones land in the inbox.

### 2. Fill in the real details

Open **`lib/site.ts`** — every phone number, email, address and business hour on
the entire site comes from that one file. Look for the `TODO` comments:

| What | Why it matters |
|---|---|
| `url` | Your real domain. Used for Google indexing and link previews. |
| `address` | The exact plant address. Shows in the footer, contact page and Google's business listing data. |
| `social` | Add profile links and the icons appear in the footer automatically. Leave blank to hide. |

### 3. Certifications

`site.certifications` is deliberately **empty**. Nothing on the site claims a
certification the company does not hold, which matters when institutional and
export buyers verify suppliers. Once FSSAI / HACCP / ISO certificates are
issued, add them there and a badge section appears in the Quality section.

### 4. Government scheme references

The MoFPI / PMKSY credit appears in the footer, hero and About section. Per the
note in the source corporate profile, **confirm these against the official
sanction letter and MoFPI branding permissions before publishing.**

The site uses a plain text credit and a generic institution icon — *not* the
State Emblem of India or the Ashoka Lion, which are legally restricted and must
not be used by a private company.

---

## Publishing the site

Any of these work. **Netlify is the easiest** if you are not a developer.

**Netlify (drag and drop)**
1. Run `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag the `out` folder onto the page — it goes live immediately
4. Add your domain under Site settings → Domain management

**Vercel** — `npx vercel` in this folder, then follow the prompts.

**Traditional / cPanel hosting** — run `npm run build` and upload everything
inside `out/` into `public_html/` by FTP.

---

## Making common changes

| I want to… | Edit this |
|---|---|
| Change a phone number, email or address | `lib/site.ts` |
| Add or edit a product | `lib/products.ts` — add one entry to the array |
| Change a product's picture | The `emoji` field in `lib/products.ts` |
| Change the processing steps | `lib/process.ts` |
| Change marketing copy, markets, quality points | `lib/content.ts` |
| Reorder the home page sections | `app/page.tsx` |
| Change the menu | `lib/site.ts` → `navigation` |
| Change the brand colours | `app/globals.css` — the `:root` and `.dark` blocks at the top |
| Replace the logo | `components/layout/Logo.tsx` |

### If you later want real photographs

There are no image files in the project at the moment — every visual is either
an emoji tile, an icon panel or a drawn chart, so nothing can appear broken.

To introduce photography later: create a `public/images/` folder, drop your
compressed JPGs in (aim for under 200 KB each, via squoosh.app), then replace
an `<IconPanel …/>` with `<img src="/images/your-photo.jpg" alt="…" />`. For
products, add an `image` field in `lib/products.ts` and render it in
`components/products/ProductCard.tsx` in place of the emoji.

---

## Project structure

```
app/
  page.tsx        The whole home page — just a list of sections
  products/       Product catalogue page
  contact/        Enquiry form page
  globals.css     Colours and base styles
components/
  layout/         Header, footer, logo, theme toggle, WhatsApp button
  ui/             Buttons, cards, sections, icon panels
  home/           Each home page section
  products/       Product cards and the filterable grid
  contact/        The enquiry form
  technology/     The temperature chart
lib/              All text, data and settings — no design code here
public/           favicon
```

---

## Quality checks this site passes

- Production build clean, TypeScript clean, 0 npm vulnerabilities
- **Zero accessibility violations** (axe, WCAG 2.1 AA) on all three pages in
  both light and dark mode
- No horizontal scrolling at 360 / 390 / 768 / 1024 px
- Renders fully with JavaScript disabled
- Charts use colours validated for colour-blind readability and 3:1 contrast in
  both themes
- SEO: per-page titles and descriptions, `sitemap.xml`, `robots.txt`, and
  structured data so Google can show the business phone and address

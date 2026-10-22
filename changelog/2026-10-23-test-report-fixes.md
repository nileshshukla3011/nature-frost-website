# 2026-10-23 — Test report fixes

Fixes for the failed cases in the 22 October test report that can be solved in
the website code. Items that need DNS, email or a backend are listed at the end.

## Added

- **Content-Security-Policy on every page** (NF-048). `scripts/add-csp.mjs`
  runs after `npm run build`, hashes each page's inline scripts and allows only
  those, plus Web3Forms for the form and Google Maps for the factory map.
- **Clickjacking guard** (NF-048). If another site loads a page inside a frame,
  the page hides itself and tries to open in a normal tab.
- **Referrer policy** `strict-origin-when-cross-origin` (NF-048): other sites
  see only "naturefrost.com", not full addresses such as `/contact/?product=…`.

## Changed

- **FAQ is in the desktop menu** (NF-010), as it already was on phones. Menu
  links are slightly closer together so all nine fit on one line from 1280 px.
- **Brochure PDF 2.5 MB → 2.0 MB** (NF-008). Duplicate pictures merged and
  unused font data removed; every page renders pixel-identical to before.

## Fixed

- **Tap targets at least 24 px tall** (NF-031, WCAG 2.2): product card titles,
  breadcrumbs, the email link in the call-to-action band, FAQ "read more"
  links, "See all products" in the footer, contact page phone and FAQ links,
  the "How IQF works" link on product pages, and the email link after a form
  fallback.
- "Get in Touch" in the header wrapped onto two lines on screens 1536 px and
  wider.

## Not a fault

- NF-012 (phone menu and the Escape key): retested on the live site, Escape
  does close the menu. No change needed.

## Needs action outside the code

- **Security headers that need a real server or Cloudflare** (NF-048): HSTS,
  X-Frame-Options / frame-ancestors, X-Content-Type-Options, Permissions-Policy.
- **DNS at Hostinger** (NF-052, NF-053): SPF, DMARC and CAA records.
- **Company email address** (NF-056) on naturefrost.com.
- **Contact form delivery** (NF-025 to NF-027) and the **product admin**
  (NF-057) need the backend.

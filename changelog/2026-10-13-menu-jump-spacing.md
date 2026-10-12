# 2026-10-13 — Menu jumps land on the section

## Fixed

- **Large gap after clicking a menu link.** Clicking About, Technology,
  Quality, Clients and the other menu links left a tall empty band (about
  160px) between the menu bar and the section, so the section's content was
  pushed below the screen. Sections now land with only a small gap under the
  menu bar. One setting in `components/ui/Section.tsx` (`anchorOffset`) covers
  every menu target, and the Brochure section uses the same values.

## Changed

- **About section tightened** so that, after clicking **About**, the heading,
  the factory photo, the text and both product photos fit on one laptop
  screen: slightly shorter factory photo, wider product photos and marginally
  smaller body text on desktop.

import { asset } from "./utils";

/**
 * The facility photo in four widths (WebP), so a phone downloads a small file
 * and a large screen a sharp one. The browser picks the width from `srcSet`
 * and the `sizes` each <img> passes.
 *
 * Source: public/nature-frost-facility.jpeg. To replace the photo, export it
 * as 640, 960, 1280 and 1536 px wide WebP files into public/images/facility/
 * with the same names.
 */
const facilityWidths = [640, 960, 1280, 1536];

export const facilityPhoto = {
  src: asset("/images/facility/nature-frost-facility-1536.webp"),
  srcSet: facilityWidths
    .map(
      (width) =>
        `${asset(`/images/facility/nature-frost-facility-${width}.webp`)} ${width}w`,
    )
    .join(", "),
  width: 1536,
  height: 1024,
};

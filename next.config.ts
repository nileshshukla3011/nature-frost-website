import type { NextConfig } from "next";

/*
 * GitHub Pages serves a project repo from a sub-path, e.g.
 *   https://shikhar0110.github.io/webiste/
 * Without basePath every CSS/JS/link URL points at the domain root and 404s,
 * so the site loads completely unstyled.
 *
 * This is switched on ONLY when BASE_PATH is set, which the GitHub Actions
 * workflow does. Local `npm run dev`, Netlify and Vercel all leave it unset and
 * serve from the root as normal.
 */
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Static export -> produces an `out/` folder that can be hosted on Netlify,
  // Vercel, Cloudflare Pages, GitHub Pages or any plain shared/cPanel host.
  output: "export",

  // Static export has no image optimisation server, so images are served as-is.
  images: { unoptimized: true },

  // Emits /about/index.html instead of /about.html so plain file hosts resolve
  // clean URLs without extra rewrite rules.
  trailingSlash: true,

  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
};

export default nextConfig;

/*
 * Adds a Content-Security-Policy <meta> tag to every exported HTML page.
 *
 * GitHub Pages cannot send custom HTTP headers, so the policy has to live in
 * the page itself. Next.js writes its page data as inline <script> tags, and a
 * static export has no server to give them a nonce, so instead this script
 * hashes each inline script on each page and allows exactly those hashes.
 * Anything injected later, from a typed message or a compromised link, is not
 * on the list and the browser refuses to run it.
 *
 * Runs automatically after `npm run build` (the "postbuild" script). It only
 * touches the out/ folder; `npm run dev` is unaffected.
 *
 * Not possible from a <meta> tag (they need real HTTP headers, e.g. via
 * Cloudflare): frame-ancestors, HSTS, X-Frame-Options, X-Content-Type-Options
 * and Permissions-Policy.
 */
import { createHash } from "node:crypto";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const OUT_DIR = "out";

/** Third-party origins the site really uses. Add to these, never "*". */
const policy = (scriptHashes) =>
  [
    "default-src 'self'",
    `script-src 'self' ${scriptHashes.join(" ")}`,
    // React and Next write a few style="" attributes into the HTML.
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data:",
    "font-src 'self'",
    // The contact form posts to Web3Forms once its key is set.
    "connect-src 'self' https://api.web3forms.com",
    // The factory map on the contact page.
    "frame-src https://www.google.com https://maps.google.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "upgrade-insecure-requests",
  ].join("; ");

// Inline scripts only: <script src="…"> files are covered by 'self'.
const INLINE_SCRIPT = /<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g;

async function htmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) return htmlFiles(path);
      return entry.name.endsWith(".html") ? [path] : [];
    }),
  );
  return nested.flat();
}

const files = await htmlFiles(OUT_DIR);

for (const file of files) {
  const html = await readFile(file, "utf8");
  if (html.includes('http-equiv="Content-Security-Policy"')) continue;

  const hashes = new Set();
  for (const [, body] of html.matchAll(INLINE_SCRIPT)) {
    if (!body) continue;
    hashes.add(
      `'sha256-${createHash("sha256").update(body).digest("base64")}'`,
    );
  }

  // The policy only covers what comes after it, so it must open the <head>.
  const meta = `<meta http-equiv="Content-Security-Policy" content="${policy([...hashes])}"/>`;
  const withMeta = html.replace(
    /<head>(<meta charSet="utf-8"\/>)?/,
    (head) => head + meta,
  );
  if (withMeta === html) throw new Error(`No <head> found in ${file}`);

  await writeFile(file, withMeta);
}

console.log(`Content-Security-Policy added to ${files.length} pages.`);

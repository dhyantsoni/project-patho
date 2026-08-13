// Writes redirect stubs into out/ for the URLs the old Google Sites build used.
// Google has those paths indexed; without these they'd 404 the moment the
// domain moves, and the site would have to earn its ranking again from zero.
//
// GitHub Pages serves static files only, so it can't issue a real 301. A
// zero-delay meta refresh plus a canonical link is the closest equivalent that
// a static host can express, and Google follows it as a redirect signal.
//
// Run: node scripts/make-redirects.mjs   (wired into `npm run build`)
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT = new URL("../out/", import.meta.url).pathname;

// Paths that exist on both sites (/podcast, /resources) are deliberately absent:
// they need no redirect, and writing one would overwrite the real page.
/** old Google Sites path -> path on this site */
const REDIRECTS = {
  "/home": "/",
  "/meet-the-team": "/team/",
  "/events/past-events": "/events/",
  "/events/upcoming-events": "/events/",
  "/events/cards-for-hospitalized-kids": "/events/#cards-for-kids",
  "/join-us/join-us": "/join/",
  "/join-us/contact-us": "/contact/",
  "/resources/info-posters/bipolar-disorder": "/resources/",
  "/resources/info-posters/cystic-fibrosis": "/resources/",
  "/resources/info-posters/epilepsy": "/resources/",
  "/resources/info-posters/fragile-x-syndrome": "/resources/",
  "/resources/info-posters/osteogenesis-imperfecta": "/resources/",
  "/resources/info-posters/sickle-cell-anemia": "/resources/",
};

const SITE = "https://www.projectpatho.org";

const page = (to) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Redirecting</title>
    <link rel="canonical" href="${SITE}${to}">
    <meta name="robots" content="noindex">
    <meta http-equiv="refresh" content="0; url=${to}">
  </head>
  <body>
    <p>This page has moved to <a href="${to}">${SITE}${to}</a>.</p>
  </body>
</html>
`;

let written = 0;
for (const [from, to] of Object.entries(REDIRECTS)) {
  const file = join(OUT, from, "index.html");
  // A real page already at this path means the two sites share the URL, so
  // there is nothing to redirect. Never clobber the export.
  if (existsSync(file)) {
    console.error(`refusing to overwrite a real page at ${from} — remove it from REDIRECTS`);
    process.exit(1);
  }
  mkdirSync(join(OUT, from), { recursive: true });
  writeFileSync(file, page(to));
  written += 1;
}

console.log(`wrote ${written} redirect stubs into out/`);

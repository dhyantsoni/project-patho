// Optimizes raster images in public/images to WebP.
// Run: npm run images
// Any .jpg/.jpeg/.png in public/images is converted to a same-named .webp
// (max width 1400px, quality 80). Safe to re-run; skips up-to-date .webp files.
import sharp from "sharp";
import { readdirSync, statSync } from "node:fs";
import path from "node:path";

const DIR = path.join(process.cwd(), "public", "images");
const MAX_WIDTH = 1400;

const files = readdirSync(DIR).filter((f) => /\.(jpe?g|png)$/i.test(f));
if (files.length === 0) {
  console.log("No .jpg/.png images to optimize in public/images.");
}
for (const file of files) {
  const src = path.join(DIR, file);
  const out = src.replace(/\.(jpe?g|png)$/i, ".webp");
  try {
    const st = statSync(out);
    if (st.mtimeMs > statSync(src).mtimeMs) {
      console.log(`skip (up to date): ${path.basename(out)}`);
      continue;
    }
  } catch {
    /* no webp yet */
  }
  const meta = await sharp(src).metadata();
  const pipeline = sharp(src).rotate();
  if ((meta.width ?? 0) > MAX_WIDTH) pipeline.resize({ width: MAX_WIDTH });
  await pipeline.webp({ quality: 80 }).toFile(out);
  console.log(`wrote ${path.basename(out)}`);
}

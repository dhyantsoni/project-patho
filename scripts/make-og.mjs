// Generates public/og.png (1200x630) — the social share card.
// Flat editorial card in the site palette: maroon on blush, pink accent.
// Run: node scripts/make-og.mjs
import sharp from "sharp";
import { writeFileSync } from "node:fs";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#FDF4F2"/>
  <rect x="0" y="0" width="16" height="630" fill="#8C1C33"/>
  <rect x="1010" y="0" width="190" height="630" fill="#F7DEE4"/>
  <g transform="translate(1105 315)">
    <circle cx="0" cy="0" r="58" fill="none" stroke="#E6A4B4" stroke-width="16"/>
    <circle cx="0" cy="0" r="20" fill="#8C1C33"/>
  </g>
  <text x="88" y="104" font-family="Helvetica, Arial, sans-serif" font-size="24" font-weight="700" letter-spacing="3.4" fill="#8C1C33">PROJECTPATHO</text>
  <rect x="88" y="132" width="860" height="1" fill="#ECD6D2"/>
  <text x="88" y="300" font-family="Georgia, serif" font-size="88" font-weight="700" fill="#2B1418">Diseases,</text>
  <text x="88" y="396" font-family="Georgia, serif" font-size="88" font-weight="700" fill="#8C1C33">explained for kids.</text>
  <text x="88" y="470" font-family="Helvetica, Arial, sans-serif" font-size="28" fill="#6B4148">A student-led nonprofit teaching kids about diseases —</text>
  <text x="88" y="510" font-family="Helvetica, Arial, sans-serif" font-size="28" fill="#6B4148">to reduce stigma, grow empathy, and spark science.</text>
</svg>`;

const png = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync(new URL("../public/og.png", import.meta.url), png);
console.log("wrote public/og.png", png.length, "bytes");

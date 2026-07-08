import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const OUT = process.argv[2] || "/tmp/claude-1000/-home-dhyan-project-patho/37d30322-a775-4bb9-ba3f-8c33d943158a/scratchpad/shots";
mkdirSync(OUT, { recursive: true });
const base = "http://localhost:4321";
const pages = [
  ["home", "/"],
  ["team", "/team/"],
  ["resources", "/resources/"],
  ["events", "/events/"],
  ["podcast", "/podcast/"],
  ["join", "/join/"],
  ["contact", "/contact/"],
];
const widths = [
  ["mobile", 390, 844],
  ["tablet", 768, 1024],
  ["desktop", 1280, 900],
];

const browser = await chromium.launch();
for (const [wname, w, h] of widths) {
  const ctx = await browser.newContext({
    viewport: { width: w, height: h },
    deviceScaleFactor: 1,
    reducedMotion: "reduce",
  });
  const page = await ctx.newPage();
  for (const [name, path] of pages) {
    await page.goto(base + path, { waitUntil: "networkidle" });
    // Scroll through the page to trigger IntersectionObserver reveals.
    await page.evaluate(async () => {
      const step = window.innerHeight * 0.7;
      for (let y = 0; y <= document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 90));
      }
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 250));
    });
    await page.waitForTimeout(400);
    await page.screenshot({ path: `${OUT}/${name}-${wname}.png`, fullPage: true });
    console.log(`shot ${name}-${wname}`);
  }
  await ctx.close();
}
await browser.close();
console.log("done ->", OUT);

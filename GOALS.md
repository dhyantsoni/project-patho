# GOALS — ProjectPatho rebuild

This is a **goal-driven** build. The work is NOT done until every goal below is
`✅ verified`. A goal flips to ✅ **only after a separate verifier agent confirms
it** — never mark your own work verified. Keep this file updated as you go and
paste the final version (all ✅) as proof of completion.

**Status legend:** ⬜ not started · 🟡 in progress · 🔵 built, awaiting verify · ✅ verified · ❌ failed verify (loop back)

| # | Goal | Owner agent | Verified by (method) | Status |
|---|------|-------------|----------------------|--------|
| G1 | **Content parity** — every section, stat, all 10 podcast episodes, every event, all 6 info-poster topics, and every team bio from the live site is present and accurate | builder agents | Verifier diffs new site content vs saved `inventory/` snapshot → zero missing items | ⬜ |
| G2 | **New flow & feel** — nav, layout, and design are entirely new (not Google-Sites-like) and commit to one aesthetic anchor | design agent | `design-review` (no high-severity) **and** `design-auditor` ≥ 85/100 on every page | ⬜ |
| G3 | **Easy editing** — a non-coder can add (a) a photo, (b) a podcast episode / event / post, (c) a team bio by editing ONE file each per CONTENT-GUIDE.md | content-arch agent | Verifier actually performs all 3 edits from the templates, confirms each renders, then reverts | ⬜ |
| G4 | **Accessibility** — WCAG 2.1 AA on every page | a11y agent | `accessibility` + `web-design-guidelines` report zero AA violations | ⬜ |
| G5 | **Performance & SEO** — good Core Web Vitals + complete SEO basics (titles, meta, OG, sitemap, structured data) | perf agent | `core-web-vitals` + `performance` + `seo` pass thresholds | ⬜ |
| G6 | **Images** — every image sourced online (openly licensed), optimized (WebP/AVIF), has alt text, and is credited in IMAGE-CREDITS.md | image agent | Verifier checks each image has credit + alt + optimized format | ⬜ |
| G7 | **Responsive** — correct on mobile / tablet / desktop | builder agents | Playwright/webapp-testing screenshots at 390px, 768px, 1280px reviewed by verifier | ⬜ |
| G8 | **Clean git history** — one commit per feature/step, zero co-authored commits | orchestrator | Verifier runs `git log`, greps for "Co-Authored-By" / "Generated with" → finds none | ⬜ |

## Content inventory to hit for G1 (fill in / verify against the live site)

- **Sections/pages:** Home, Meet The Team, Resources (Info Posters), Events (Upcoming / Past / Cards for Hospitalized Kids), Join Us, Podcast, Contact Us, BfB partner link, footer + socials.
- **Impact stats (verify current numbers):** 800+ volunteer hours · 500+ Instagram followers · 100+ students reached · 30+ active volunteers · 85 care packages donated · 10+ events hosted · 10 podcast episodes.
- **Info-poster topics (ages 7–11):** Bipolar Disorder, Cystic Fibrosis, Epilepsy, Fragile X Syndrome, Osteogenesis Imperfecta, Sickle Cell Anemia.
- **Podcast:** all 10 episodes (title, description, art, link/embed).
- **Team:** every leadership member (name, role, photo, bio).

## Loop-until-done

If any goal is ❌ or the completeness critic finds gaps → fix, re-run that goal's
verifier, repeat. Do not stop until this table is 100% ✅.

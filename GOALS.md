# GOALS: ProjectPatho rebuild

This is a **goal-driven** build. The work is NOT done until every goal below is
`✅ verified`. A goal flips to ✅ **only after a separate verifier agent confirms
it**: never mark your own work verified. Keep this file updated as you go and
paste the final version (all ✅) as proof of completion.

**Status legend:** ⬜ not started · 🟡 in progress · 🔵 built, awaiting verify · ✅ verified · ❌ failed verify (loop back)

| # | Goal | Owner agent | Verified by (method) | Status |
|---|------|-------------|----------------------|--------|
| G1 | **Content parity**: every section, stat, all 10 podcast episodes, every event, all 6 info-poster topics, and every team bio from the live site is present and accurate | builder agents | Verifier diffs new site content vs saved `inventory/` snapshot → zero missing items | ✅ verified, independent agent confirmed all 6 bios verbatim, all 10 Spotify links exact, all 10 events, all 6 posters, all links; only flag (reworded stat labels) now corrected to verbatim |
| G2 | **New flow & feel**: nav, layout, and design are entirely new (not Google-Sites-like) and commit to one aesthetic anchor | design agent | `design-review` (no high-severity) **and** `design-auditor` ≥ 85/100 on every page | ✅ verified, independent design review: all 7 pages 86–92/100, Organic anchor held, no high-severity findings |
| G3 | **Easy editing**: a non-coder can add (a) a photo, (b) a podcast episode / event / post, (c) a team bio by editing ONE file each per CONTENT-GUIDE.md | content-arch agent | Verifier actually performs all 3 edits from the templates, confirms each renders, then reverts | ✅ verified, independent re-verify performed all 3 edits: team headshot renders (`<img src="/images/team-test-person.webp">`), episode 11 & upcoming event render, empty-state gone; one content file each, zero code changes; reverted clean |
| G4 | **Accessibility**: WCAG 2.1 AA on every page | a11y agent | `accessibility` + `web-design-guidelines` report zero AA violations | ✅ verified, independent re-audit: zero AA violations. Full contrast sweep passes (brand-deep/surface-2 now 5.10:1); one h1/page, landmarks, skip link, alt text, aria-hidden SVG, aria-expanded/pressed, rel=noopener, reduced-motion, lang all confirmed |
| G5 | **Performance & SEO**: good Core Web Vitals + complete SEO basics (titles, meta, OG, sitemap, structured data) | perf agent | `core-web-vitals` + `performance` + `seo` pass thresholds | ✅ verified, Performance PASS (CLS 0, FCP 1.2s, small JS, optimized WebP, no render-blocking); SEO PASS on re-verify (self-referential canonicals + per-page OG confirmed on all 7 routes) |
| G6 | **Images**: every image sourced online (openly licensed), optimized (WebP/AVIF), has alt text, and is credited in IMAGE-CREDITS.md | image agent | Verifier checks each image has credit + alt + optimized format | ✅ verified (independent agent, PASS; 2 CC BY 2.0 photos as WebP w/ alt + credits, OG original, placeholders documented) |
| G7 | **Responsive**: correct on mobile / tablet / desktop | builder agents | Playwright/webapp-testing screenshots at 390px, 768px, 1280px reviewed by verifier | ✅ verified, independent re-review of all 7 pages × 390/768/1280: no overflow/overlap/clipping, grids reflow 3→2→1, hamburger on mobile; Events CTA clip fixed |
| G8 | **Clean git history**: one commit per feature/step, zero co-authored commits | orchestrator | Verifier runs `git log`, greps for "Co-Authored-By" / "Generated with" → finds none | ✅ verified, 16 commits, single author, grep for co-author/AI attribution returns none |

## Content inventory to hit for G1 (fill in / verify against the live site)

- **Sections/pages:** Home, Meet The Team, Resources (Info Posters), Events (Upcoming / Past / Cards for Hospitalized Kids), Join Us, Podcast, Contact Us, BfB partner link, footer + socials.
- **Impact stats (verify current numbers):** 800+ volunteer hours · 500+ Instagram followers · 100+ students reached · 30+ active volunteers · 85 care packages donated · 10+ events hosted · 10 podcast episodes.
- **Info-poster topics (ages 7–11):** Bipolar Disorder, Cystic Fibrosis, Epilepsy, Fragile X Syndrome, Osteogenesis Imperfecta, Sickle Cell Anemia.
- **Podcast:** all 10 episodes (title, description, art, link/embed).
- **Team:** every leadership member (name, role, photo, bio).

## Loop-until-done

If any goal is ❌ or the completeness critic finds gaps → fix, re-run that goal's
verifier, repeat. Do not stop until this table is 100% ✅.

---

## ✅ COMPLETE, all 8 goals independently verified

Every goal above is ✅, each confirmed by a **separate** verifier agent (not the
builder). The Phase-4 completeness critic found **no blockers**; its should-fix
items were all addressed (honest "Quiz coming soon" badges, de-duplicated poster
placeholders, removed the empty Join form iframe, dynamic footer year, custom
on-brand 404, team-fillable podcast-follow link). Build, `tsc --noEmit`, and
`next lint` all pass clean; static export produces 14 routes.

### Genuinely team-only follow-ups (not defects, external assets we can't source)
These render tasteful, clearly-labeled placeholders today and appear the moment
the team drops the file in and names it (one file each, per `CONTENT-GUIDE.md`):

1. **Team headshots**: add `team-firstname-lastname.webp` to `public/images/`.
2. **Info-poster artwork**: the team's own infographics (`poster-*.webp`).
3. **Poster quizzes**: currently badged "Quiz coming soon" (honest; the live
   quizzes were interactive Google embeds we couldn't carry over).
4. **PathoTalks show/trailer URL**: paste the Spotify *show* URL into
   `site.podcastShow` in `src/lib/site.ts` to reveal a "Follow PathoTalks" button.
5. **Confirm the footer Instagram**: live site's footer icon mis-linked to an
   unrelated account; rebuild uses the canonical `instagram.com/projectpatho`.

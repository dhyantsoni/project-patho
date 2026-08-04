# Image credits

All imagery on the ProjectPatho site is either (a) original artwork we generate
(the "living cell" SVG motif and the social-share card), or (b) ProjectPatho's
own photography and infographics, supplied by the team.

## ProjectPatho photography and artwork

Every photograph and info poster on this site is the team's own work, taken at
ProjectPatho events or drawn by a ProjectPatho student. The files were supplied
by the team (August 2026) from the pages of the previous Google Sites build.

| Files                                                                                                    | What they show                                                                           | Where used                           |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------ |
| `home-workshop-library.webp`, `home-team-lineup.webp`, `home-rmhc-team.webp`, `home-rmhc-donations.webp` | Library workshop, the officer team, and the Ronald McDonald House Charities donation day | Home — hero, mission, community band |
| `team-*.webp` (10 files)                                                                                 | Officer headshots, one per member                                                        | Meet the Team                        |
| `event-*.webp` (23 files)                                                                                | Workshops, Club Rush, care packages, and the Skeletal System Event flyer                 | Events, Join                         |
| `cards-for-kids*.webp` (3 files)                                                                         | Cards for Hospitalized Kids sessions                                                     | Events — Cards for Hospitalized Kids |
| `poster-*.webp` (6 files)                                                                                | Info posters, credited to their student author in `content/posters/*.md`                 | Resources                            |

Poster authors, as credited on each poster: Bipolar Disorder — Ridah Mannat;
Cystic Fibrosis and Fragile X Syndrome — Aditi Jain; Epilepsy and Osteogenesis
Imperfecta — Jolina Jian; Sickle Cell Anemia — Aarini Parikh.

Changes made: photos were resized and converted to WebP; headshots were cropped
square. The multi-panel Epilepsy and Osteogenesis Imperfecta infographics were
stacked into one tall image each so the whole poster reads in one scroll.

**Photo consent:** these images were already published on ProjectPatho's public
site. Some show children at library events — if a family asks for a photo to be
removed, delete the file from `public/images/` and clear its `image:` line in
the matching `content/events/*.md` file. The card then falls back to a
placeholder rather than a broken image.

## Original assets (created for this site)

| File                                                  | Description                                                               | License                    |
| ----------------------------------------------------- | ------------------------------------------------------------------------- | -------------------------- |
| `public/og.png`                                       | Social-share card, generated from an on-brand SVG (`scripts/make-og.mjs`) | Original — © ProjectPatho |
| `src/app/icon.svg`                                    | Favicon — the "living cell" logo mark                                     | Original — © ProjectPatho |
| `<Cell>` SVG blobs & poster/episode/team placeholders | Inline SVG illustration, the site's signature motif                       | Original — © ProjectPatho |

## Still to supply

- **Podcast episode art** — optional, per `content/podcast/*.md`. Episodes read
  well without it, so the slots stay empty rather than showing filler.

## How to add a new image

1. Drop the file into `public/images/` (JPG/PNG is fine).
2. Run `npm run images` to generate an optimized `.webp`.
3. Reference it from the relevant content file, and add a credit row above if it
   came from an external source. Always include meaningful `alt` text.

## Where to find openly-licensed images

- Openverse — https://openverse.org (aggregates CC-licensed media)
- Unsplash — https://unsplash.com · Pexels — https://pexels.com
- Wikimedia Commons — https://commons.wikimedia.org (check each file's license)

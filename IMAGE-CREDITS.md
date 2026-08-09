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
| `home-workshop-library.webp`, `home-team-lineup.webp`, `home-rmhc-team.webp`, `home-rmhc-donations.webp` | First aid workshop, the team at the Cardiovascular System event, and the Ronald McDonald House Charities donation day | Home — mission, community band |
| `team-*.webp` (10 files)                                                                                 | Officer headshots, one per member                                                        | Meet the Team                        |
| `event-*.webp` (78 files)                                                                                | Every photo from every event, in the same order as the team's own past-events page, plus the Skeletal System Event flyer | Events, Join, Home |
| `cards-for-kids-*.webp` (4 files)                                                                        | Cards for Hospitalized Kids sessions                                                     | Events — Cards for Hospitalized Kids |
| `poster-*.webp` (6 files)                                                                                | Info posters, credited to their student author in `content/posters/*.md`                 | Resources                            |
| `podcast-ep-01…11.webp`                                                                                  | PathoTalks episode cover art, one per episode                                            | Podcast                              |
| `logo.png`, `src/app/icon.png`, `src/app/apple-icon.png`                                                 | The stethoscope roundel from the team's business card                                    | Header, home hero, browser tab       |

Poster authors, as credited on each poster: Bipolar Disorder — Ridah Mannat;
Cystic Fibrosis and Fragile X Syndrome — Aditi Jain; Epilepsy and Osteogenesis
Imperfecta — Jolina Jian; Sickle Cell Anemia — Aarini Parikh.

Changes made: photos were resized and converted to WebP; headshots were cropped
square, and two that arrived padded onto a white canvas were trimmed and
re-cropped so the face fills the frame. The multi-panel Epilepsy and
Osteogenesis Imperfecta infographics were stacked into one tall image each so
the whole poster reads in one scroll.

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

The logo was lifted from the business card artwork, trimmed, and masked to a
circle so its corners are transparent instead of white.

## Still to supply

- **Episode 11's Spotify link** — the episode and its cover are in place; paste
  the URL into `link:` in `content/podcast/episode-11.md` and the Listen button
  appears.
- **A Sickle Cell Anemia quiz** — the team's own site marks it "coming soon", so
  that poster shows the same note. Add a `quiz:` block to give it one.

## How to add a new image

1. Drop the file into `public/images/` (JPG/PNG is fine).
2. Run `npm run images` to generate an optimized `.webp`.
3. Reference it from the relevant content file, and add a credit row above if it
   came from an external source. Always include meaningful `alt` text.

## Where to find openly-licensed images

- Openverse — https://openverse.org (aggregates CC-licensed media)
- Unsplash — https://unsplash.com · Pexels — https://pexels.com
- Wikimedia Commons — https://commons.wikimedia.org (check each file's license)

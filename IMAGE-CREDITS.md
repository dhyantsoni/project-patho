# Image credits

All imagery on the ProjectPatho site is either (a) original artwork we generate
(the "living cell" SVG motif and the social-share card), (b) openly-licensed
photography credited below, or (c) clearly-labeled placeholders for photos the
team will supply (headshots, info-poster artwork, event photos).

## Openly-licensed photography

| File | Source & title | Author | License | Where used |
|------|----------------|--------|---------|------------|
| `public/images/students-learning.webp` | Flickr — "Students Learning" ([source](https://www.flickr.com/photos/togawanderings/6416178725)) | ToGa Wanderings | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) | Home — mission section |
| `public/images/classroom-workshop.webp` | Flickr — "kindergarten, in session" ([source](https://www.flickr.com/photos/woodleywonderworks/2885861465)) | woodleywonderworks | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) | Join — photo band |

Changes made: images were resized and converted to WebP (via `npm run images`);
no other modifications. Attribution retained here per the CC BY 2.0 terms.

## Original assets (created for this site)

| File | Description | License |
|------|-------------|---------|
| `public/og.png` | Social-share card, generated from an on-brand SVG (`scripts/make-og.mjs`) | Original — © ProjectPatho |
| `src/app/icon.svg` | Favicon — the "living cell" logo mark | Original — © ProjectPatho |
| `<Cell>` SVG blobs & poster/episode/team placeholders | Inline SVG illustration, the site's signature motif | Original — © ProjectPatho |

## Team-supplied images (labeled placeholders until provided)

These slots render tasteful, clearly-labeled placeholders today. Dropping a real
file into `public/images/` and naming it in the matching content file makes it
appear (see `CONTENT-GUIDE.md`):

- **Team headshots** — `team-firstname-lastname.webp` per `content/team/*.md`.
- **Info-poster artwork** — the team's own infographics, per `content/posters/*.md`.
- **Event photos** — optional, per `content/events/*.md`.
- **Podcast episode art** — optional, per `content/podcast/*.md`.

## How to add a new image

1. Drop the file into `public/images/` (JPG/PNG is fine).
2. Run `npm run images` to generate an optimized `.webp`.
3. Reference it from the relevant content file, and add a credit row above if it
   came from an external source. Always include meaningful `alt` text.

## Where to find openly-licensed images

- Openverse — https://openverse.org (aggregates CC-licensed media)
- Unsplash — https://unsplash.com · Pexels — https://pexels.com
- Wikimedia Commons — https://commons.wikimedia.org (check each file's license)

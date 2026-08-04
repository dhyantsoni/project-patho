# Content guide — how to update the ProjectPatho site (no coding)

Everything on this site is driven by simple files. To change content you edit or
add ONE file — you never touch code. After saving, the site updates automatically
(the dev preview refreshes; a deploy publishes it live).

> File paths below assume the `content/` and `public/images/` folders from this
> starter. If the developer set up a different structure, they'll update this
> guide to match — but the "one file per change" rule stays the same.

---

## 1. Add a new photo

1. Put the image file in `public/images/` (use a clear name, lowercase, dashes —
   e.g. `beach-cleanup-2026.jpg`). Prefer `.webp` if you can; `.jpg`/`.png` are fine.
2. Wherever you want it shown (a post, a bio, a gallery), reference it by that
   name — each template below has an `image:` line. Example: `image: beach-cleanup-2026.jpg`.
3. Add one line to `IMAGE-CREDITS.md` with where the photo came from.

That's it. No other files to touch.

---

## 2. Add a new post (podcast episode, event, etc.)

Each content type is a folder of files. To add one, **copy the `_TEMPLATE.md`
file in that folder, rename it, and fill it in.**

- **Podcast episode →** copy `content/podcast/_TEMPLATE.md` to
  `content/podcast/episode-11.md` (next number) and fill in the fields.
- **Event →** copy `content/events/_TEMPLATE.md` to
  `content/events/2026-08-15-blood-drive.md` and fill in the fields. Set
  `status: upcoming` or `status: past` — the site sorts it into the right list.
  `image:` is the photo on the event card; the optional `gallery:` list holds
  extra photos, and the first of them also appears in the "Moments from our
  workshops" gallery further down the Events page.
- **Info poster →** copy `content/posters/_TEMPLATE.md` to
  `content/posters/asthma.md` and fill it in.

The new item appears automatically in the right place, newest first.

---

## 3. Add or update a leadership bio

1. Copy `content/team/_TEMPLATE.md` to `content/team/firstname-lastname.md`.
2. Fill in name, role, a short bio, and the photo filename (see step 1 for photos).
3. Set `order:` to control where they appear (lower = earlier). To remove someone,
   delete their file.

---

## Tips

- Keep bios and descriptions short and warm — the audience includes kids and families.
- Every photo needs a short `alt` description (what's in the image) for
  accessibility. The templates have an `alt:` field — always fill it.
- If something doesn't show up, check the file is in the right folder and the
  top section (between the `---` lines) has no typos.

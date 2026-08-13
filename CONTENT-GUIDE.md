# Content guide: how to update the ProjectPatho site (no coding)

Everything on this site is driven by simple files. To change content you edit or
add ONE file. You never touch code. After saving, the site updates automatically
(the dev preview refreshes; a deploy publishes it live).

> File paths below assume the `content/` and `public/images/` folders from this
> starter. If the developer set up a different structure, they'll update this
> guide to match, though the "one file per change" rule stays the same.

---

## 1. Add a new photo

1. Put the image file in `public/images/` (use a clear name, lowercase, dashes, e.g. `beach-cleanup-2026.jpg`). Prefer `.webp` if you can; `.jpg`/`.png` are fine.
2. Wherever you want it shown (a post, a bio, a gallery), reference it by that
   name. Each template below has an `image:` line. Example: `image: beach-cleanup-2026.jpg`.
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
  `status: upcoming` or `status: past`, and the site sorts it into the right list.
  `image:` is the event's first photo; add the rest to the optional `gallery:`
  list. Past events show their whole album on the Events page, in the order you
  list them, and the first photo is the one used elsewhere on the site.
- **Info poster →** copy `content/posters/_TEMPLATE.md` to
  `content/posters/asthma.md` and fill it in. To add a quiz, list the questions
  under `quiz:`, each with its `options:` and an `answer:` giving the position
  of the correct one, counting from 0. Quizzes are taken on our own Resources
  page. No `quiz:` block means the card reads "Quiz coming soon".

The new item appears automatically in the right place, newest first.

---

## 3. Add or update a leadership bio

1. Copy `content/team/_TEMPLATE.md` to `content/team/firstname-lastname.md`.
2. Fill in name, role, a short bio, and the photo filename (see step 1 for photos).
3. Set `order:` to control where they appear (lower = earlier). To remove someone,
   delete their file.

---

## Tips

- Keep bios and descriptions short and warm. The audience includes kids and families.
- Every photo needs a short `alt` description (what's in the image) for
  accessibility. The templates have an `alt:` field. Always fill it.
- If something doesn't show up, check the file is in the right folder and the
  top section (between the `---` lines) has no typos.

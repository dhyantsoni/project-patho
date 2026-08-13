import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/**
 * Content layer for ProjectPatho.
 *
 * Every list on the site (team, podcast, events, posters) is a folder of
 * markdown files under /content. A non-coder adds an item by copying the
 * folder's `_TEMPLATE.md` to a new file, with no code changes. These helpers read
 * those folders at build time (static export).
 */

const CONTENT_DIR = path.join(process.cwd(), "content");
const PUBLIC_IMAGES_DIR = path.join(process.cwd(), "public", "images");

/**
 * Resolves a content `image:` filename to a usable `/images/…` path, but only
 * if the file actually exists in public/images. Otherwise returns undefined so
 * the component can show its graceful placeholder. This is what makes the
 * documented "drop a photo in public/images and name it" flow work: name it and
 * it appears; leave it and you get a tasteful placeholder, never a broken image.
 */
const resolveImage = (file?: string): string | undefined => {
  if (!file) return undefined;
  const clean = file.replace(/^\/?(images\/)?/, "");
  return fs.existsSync(path.join(PUBLIC_IMAGES_DIR, clean)) ? `/images/${clean}` : undefined;
};

/**
 * Resolves a content `link:`/`pdf:` value to a usable href, keeping
 * only schemes that are safe to put in an anchor. Anything else, most
 * pointedly `javascript:`, is dropped, so a link pasted into a content file
 * can never become script. Site-relative paths ("/handout.pdf") pass through.
 */
const resolveUrl = (raw?: string): string | undefined => {
  const value = raw?.trim();
  if (!value) return undefined;
  if (value.startsWith("/") && !value.startsWith("//")) return value;
  try {
    const { protocol } = new URL(value);
    return ["http:", "https:", "mailto:"].includes(protocol) ? value : undefined;
  } catch {
    return undefined;
  }
};

/**
 * Reads a WebP's pixel dimensions straight from its header, so photos can be
 * laid out at their true shape instead of being cropped into a fixed frame.
 * Covers the three WebP flavours (lossy, lossless, extended). Returns undefined
 * for anything it can't parse, and the caller falls back to a default box.
 */
const webpSize = (file: string): { width: number; height: number } | undefined => {
  let head: Buffer;
  try {
    const fd = fs.openSync(file, "r");
    head = Buffer.alloc(30);
    fs.readSync(fd, head, 0, 30, 0);
    fs.closeSync(fd);
  } catch {
    return undefined;
  }
  if (head.toString("ascii", 0, 4) !== "RIFF" || head.toString("ascii", 8, 12) !== "WEBP") {
    return undefined;
  }
  switch (head.toString("ascii", 12, 16)) {
    case "VP8 ":
      return { width: head.readUInt16LE(26) & 0x3fff, height: head.readUInt16LE(28) & 0x3fff };
    case "VP8L": {
      const bits = head.readUInt32LE(21);
      return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
    }
    case "VP8X":
      return {
        width: (head[24] | (head[25] << 8) | (head[26] << 16)) + 1,
        height: (head[27] | (head[28] << 8) | (head[29] << 16)) + 1,
      };
    default:
      return undefined;
  }
};

/**
 * A photo ready to render: a resolved path, its alt text, and its true pixel
 * size so grids can show the whole frame rather than cropping to fit.
 */
export type Photo = { src: string; alt: string; width?: number; height?: number };

/** Resolve one `public/images` filename into a Photo, or undefined if missing. */
export const getPhoto = (file: string, alt: string): Photo | undefined => {
  const src = resolveImage(file);
  if (!src) return undefined;
  return { src, alt, ...webpSize(path.join(PUBLIC_IMAGES_DIR, src.replace("/images/", ""))) };
};

type Frontmatter = Record<string, unknown>;

export type ContentEntry = {
  slug: string;
  data: Frontmatter;
  body: string;
};

/** Read every non-template markdown file in a content collection folder. */
const readCollection = (folder: string): ContentEntry[] => {
  const dir = path.join(CONTENT_DIR, folder);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      return { slug: file.replace(/\.md$/, ""), data, body: content.trim() };
    });
};

// ---- Typed accessors -------------------------------------------------------

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  image?: string;
  alt?: string;
  order: number;
  links?: { linkedin?: string; email?: string; instagram?: string };
  bio: string;
};

export const getTeam = (): TeamMember[] =>
  readCollection("team")
    .map((e) => ({
      slug: e.slug,
      name: String(e.data.name ?? ""),
      role: String(e.data.role ?? ""),
      image: resolveImage(e.data.image ? String(e.data.image) : undefined),
      alt: e.data.alt ? String(e.data.alt) : undefined,
      order: Number(e.data.order ?? 99),
      links: (e.data.links as TeamMember["links"]) ?? undefined,
      bio: e.body,
    }))
    .sort((a, b) => a.order - b.order || a.name.localeCompare(b.name));

export type Episode = {
  slug: string;
  title: string;
  episode: number;
  guest?: string;
  specialty?: string;
  interviewer?: string;
  date: string;
  summary: string;
  /** Cover art, measured so it renders at its true shape. */
  cover?: Photo;
  link: string;
  embed?: string;
  body: string;
};

export const getEpisodes = (): Episode[] =>
  readCollection("podcast")
    .map((e) => ({
      slug: e.slug,
      title: String(e.data.title ?? ""),
      episode: Number(e.data.episode ?? 0),
      guest: e.data.guest ? String(e.data.guest) : undefined,
      specialty: e.data.specialty ? String(e.data.specialty) : undefined,
      interviewer: e.data.interviewer ? String(e.data.interviewer) : undefined,
      date: String(e.data.date ?? ""),
      summary: String(e.data.summary ?? ""),
      cover: e.data.image
        ? getPhoto(
            String(e.data.image),
            e.data.alt ? String(e.data.alt) : `Cover art for ${String(e.data.title ?? "")}`,
          )
        : undefined,
      link: resolveUrl(e.data.link ? String(e.data.link) : undefined) ?? "",
      embed: e.data.embed ? String(e.data.embed) : undefined,
      body: e.body,
    }))
    .sort((a, b) => b.episode - a.episode);

/**
 * Reads a `gallery:` list of `{ image, alt }` entries from frontmatter, keeping
 * only the photos that actually exist in public/images. An item with no gallery
 * (or with filenames not dropped in yet) simply renders without one.
 */
const resolveGallery = (raw: unknown, fallbackAlt: string): Photo[] => {
  if (!Array.isArray(raw)) return [];
  return raw.flatMap((entry) => {
    if (typeof entry !== "object" || entry === null) return [];
    const { image, alt } = entry as { image?: unknown; alt?: unknown };
    if (!image) return [];
    const photo = getPhoto(String(image), alt ? String(alt) : fallbackAlt);
    return photo ? [photo] : [];
  });
};

export type EventItem = {
  slug: string;
  title: string;
  date: string;
  displayDate?: string;
  status: "upcoming" | "past";
  location: string;
  summary: string;
  image?: string;
  alt?: string;
  /** The whole album: the `image:` photo first, then the `gallery:` ones. */
  photos: Photo[];
  link?: string;
  linkLabel?: string;
  cardsForKids: boolean;
  body: string;
};

export const getEvents = (): EventItem[] =>
  readCollection("events")
    .map((e) => {
      const title = String(e.data.title ?? "");
      const alt = e.data.alt ? String(e.data.alt) : undefined;
      const lead = e.data.image
        ? getPhoto(String(e.data.image), alt ?? `Photo from ${title}`)
        : undefined;
      return {
        slug: e.slug,
        title,
        date: String(e.data.date ?? ""),
        displayDate: e.data.displayDate ? String(e.data.displayDate) : undefined,
        status: (e.data.status === "upcoming" ? "upcoming" : "past") as "upcoming" | "past",
        location: String(e.data.location ?? ""),
        summary: String(e.data.summary ?? ""),
        image: lead?.src,
        alt,
        photos: [
          ...(lead ? [lead] : []),
          ...resolveGallery(e.data.gallery, `Photo from ${title || "the event"}`),
        ],
        link: resolveUrl(e.data.link ? String(e.data.link) : undefined),
        linkLabel: e.data.linkLabel ? String(e.data.linkLabel) : undefined,
        cardsForKids: Boolean(e.data.cards_for_kids ?? false),
        body: e.body,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

/** One multiple-choice question. `answer` indexes into `options`. */
export type QuizQuestion = { question: string; options: string[]; answer: number };

/** Reads a `quiz:` list, dropping malformed entries rather than half-rendering. */
const resolveQuiz = (raw: unknown): QuizQuestion[] => {
  if (!Array.isArray(raw)) return [];
  return raw.flatMap((entry) => {
    if (typeof entry !== "object" || entry === null) return [];
    const { question, options, answer } = entry as Record<string, unknown>;
    if (!question || !Array.isArray(options) || options.length < 2) return [];
    const index = Number(answer);
    if (!Number.isInteger(index) || index < 0 || index >= options.length) return [];
    return [{ question: String(question), options: options.map(String), answer: index }];
  });
};

export type Poster = {
  slug: string;
  title: string;
  summary: string;
  image?: string;
  alt?: string;
  pdf?: string;
  credit?: string;
  category?: string;
  quiz: QuizQuestion[];
  order: number;
  body: string;
};

export const getPosters = (): Poster[] =>
  readCollection("posters")
    .map((e) => ({
      slug: e.slug,
      title: String(e.data.title ?? ""),
      summary: String(e.data.summary ?? ""),
      image: resolveImage(e.data.image ? String(e.data.image) : undefined),
      alt: e.data.alt ? String(e.data.alt) : undefined,
      pdf: resolveUrl(e.data.pdf ? String(e.data.pdf) : undefined),
      credit: e.data.credit ? String(e.data.credit) : undefined,
      category: e.data.category ? String(e.data.category) : undefined,
      quiz: resolveQuiz(e.data.quiz),
      order: Number(e.data.order ?? 99),
      body: e.body,
    }))
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));

export type Stat = { value: string; label: string };

export const getStats = (): Stat[] => {
  const file = path.join(CONTENT_DIR, "site", "stats.md");
  if (!fs.existsSync(file)) return [];
  const { data } = matter(fs.readFileSync(file, "utf8"));
  return ((data.stats as Stat[]) ?? []).map((s) => ({
    value: String(s.value),
    label: String(s.label),
  }));
};

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/**
 * Content layer for ProjectPatho.
 *
 * Every list on the site (team, podcast, events, posters) is a folder of
 * markdown files under /content. A non-coder adds an item by copying the
 * folder's `_TEMPLATE.md` to a new file — no code changes. These helpers read
 * those folders at build time (static export).
 */

const CONTENT_DIR = path.join(process.cwd(), "content");

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
      image: e.data.image ? String(e.data.image) : undefined,
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
  image?: string;
  alt?: string;
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
      image: e.data.image ? String(e.data.image) : undefined,
      alt: e.data.alt ? String(e.data.alt) : undefined,
      link: String(e.data.link ?? ""),
      embed: e.data.embed ? String(e.data.embed) : undefined,
      body: e.body,
    }))
    .sort((a, b) => b.episode - a.episode);

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
  link?: string;
  cardsForKids: boolean;
  body: string;
};

export const getEvents = (): EventItem[] =>
  readCollection("events")
    .map((e) => ({
      slug: e.slug,
      title: String(e.data.title ?? ""),
      date: String(e.data.date ?? ""),
      displayDate: e.data.displayDate ? String(e.data.displayDate) : undefined,
      status: (e.data.status === "upcoming" ? "upcoming" : "past") as "upcoming" | "past",
      location: String(e.data.location ?? ""),
      summary: String(e.data.summary ?? ""),
      image: e.data.image ? String(e.data.image) : undefined,
      alt: e.data.alt ? String(e.data.alt) : undefined,
      link: e.data.link ? String(e.data.link) : undefined,
      cardsForKids: Boolean(e.data.cards_for_kids ?? false),
      body: e.body,
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));

export type Poster = {
  slug: string;
  title: string;
  summary: string;
  image?: string;
  alt?: string;
  pdf?: string;
  credit?: string;
  category?: string;
  quiz?: string;
  order: number;
  body: string;
};

export const getPosters = (): Poster[] =>
  readCollection("posters")
    .map((e) => ({
      slug: e.slug,
      title: String(e.data.title ?? ""),
      summary: String(e.data.summary ?? ""),
      image: e.data.image ? String(e.data.image) : undefined,
      alt: e.data.alt ? String(e.data.alt) : undefined,
      pdf: e.data.pdf ? String(e.data.pdf) : undefined,
      credit: e.data.credit ? String(e.data.credit) : undefined,
      category: e.data.category ? String(e.data.category) : undefined,
      quiz: e.data.quiz ? String(e.data.quiz) : undefined,
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

"use client";

import { useMemo, useState } from "react";
import { HelpCircle } from "lucide-react";
import type { Poster } from "@/lib/content";
import { Cell } from "@/components/organic/cell";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

/**
 * Client-side Info Posters gallery. Owns the category filter (real <button>s
 * with aria-pressed + a visible active state) and the responsive <ul> of
 * poster cards. The real posters are the team's own artwork and aren't in the
 * repo yet, so each card renders a deliberate, labelled placeholder frame —
 * never a broken image. Behaviour is driven entirely by the poster data.
 */

const ALL = "All";

// Rotate saturated Cell fills so a grid of placeholders reads as one set.
const cellColors = ["brand", "moss", "clay", "marigold"] as const;
const cellVariants = [0, 1, 2] as const;

type PosterCardProps = {
  poster: Poster;
  /** Position in the list — rotates the decorative placeholder colour. */
  index?: number;
};

export const PosterCard = ({ poster, index = 0 }: PosterCardProps): React.ReactElement => {
  const color = cellColors[index % cellColors.length];
  const variant = cellVariants[index % cellVariants.length];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_18px_40px_-20px_rgba(44,33,23,0.35)]">
      {/* Portrait placeholder frame — the team's own poster artwork is coming soon */}
      <div className="relative aspect-[3/4] overflow-hidden bg-surface-2">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <Cell
            color={color}
            variant={variant}
            animate="breathe"
            opacity={0.9}
            className="absolute -top-10 -right-8 h-56 w-56"
          />
          <Cell
            color="marigold-soft"
            variant={((variant + 1) % 3) as 0 | 1 | 2}
            animate="drift-slow"
            opacity={0.5}
            className="absolute -bottom-14 -left-10 h-52 w-52"
          />
        </div>

        <div className="relative flex h-full flex-col justify-between p-6">
          {poster.category ? (
            <span className="inline-flex w-fit items-center rounded-full bg-background/85 px-3 py-1 font-display text-xs font-semibold tracking-wide text-brand-deep uppercase">
              {poster.category}
            </span>
          ) : (
            <span aria-hidden="true" />
          )}

          <div>
            <p className="font-display text-2xl leading-tight font-semibold text-ink drop-shadow-sm sm:text-3xl">
              {poster.title}
            </p>
            <p className="mt-3 text-sm font-medium text-ink-soft">
              Poster artwork by {poster.credit ?? "the Project Patho team"} — coming soon
            </p>
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-xl leading-snug font-semibold text-ink">
          {poster.title}
        </h3>

        <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{poster.summary}</p>

        {poster.quiz ? (
          <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-marigold px-3.5 py-1.5 text-sm font-semibold text-ink">
            <HelpCircle aria-hidden="true" className="h-4 w-4" />
            {poster.quiz}
          </span>
        ) : null}

        {poster.credit ? (
          <p className="mt-5 text-sm text-ink-soft">Infographic by {poster.credit}</p>
        ) : null}
      </div>
    </article>
  );
};

type PosterGalleryProps = {
  posters: Poster[];
};

export const PosterGallery = ({ posters }: PosterGalleryProps): React.ReactElement => {
  const [active, setActive] = useState<string>(ALL);

  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(posters.map((p) => p.category).filter((c): c is string => Boolean(c))),
    );
    return [ALL, ...unique];
  }, [posters]);

  const visible = useMemo(
    () => (active === ALL ? posters : posters.filter((p) => p.category === active)),
    [posters, active],
  );

  return (
    <div>
      {/* Category filter */}
      <div
        role="group"
        aria-label="Filter posters by category"
        className="flex flex-wrap justify-center gap-2.5"
      >
        {categories.map((category) => {
          const isActive = active === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(category)}
              className={cn(
                "inline-flex items-center rounded-full border px-4 py-2 font-display text-sm font-semibold transition-all duration-200 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ring",
                isActive
                  ? "border-brand bg-brand text-primary-foreground shadow-[0_2px_0_var(--brand-deep)]"
                  : "border-border bg-surface text-ink-soft hover:-translate-y-0.5 hover:border-brand/40 hover:text-ink",
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Poster grid */}
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((poster, i) => (
          <Reveal as="li" key={poster.slug} delay={i * 60} className="h-full">
            <PosterCard poster={poster} index={i} />
          </Reveal>
        ))}
      </ul>
    </div>
  );
};

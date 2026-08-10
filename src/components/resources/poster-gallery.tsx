"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { Poster } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Client-side Info Posters gallery. Owns the category filter (real <button>s
 * with aria-pressed and a visible active state) and the responsive <ul> of
 * posters. A poster without artwork renders a labelled placeholder tile rather
 * than a broken image.
 */

const ALL = "All";

export const PosterCard = ({ poster }: { poster: Poster }): React.ReactElement => (
  <article className="flex h-full flex-col">
    {poster.image ? (
      <a
        href={poster.image}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open the full ${poster.title} poster`}
        className="group relative block aspect-[3/4] overflow-hidden bg-pink-soft focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring"
      >
        <Image
          src={poster.image}
          alt={poster.alt || `Info poster about ${poster.title}`}
          fill
          sizes="(max-width: 768px) 90vw, 30vw"
          className="object-cover object-top"
        />
        <span className="absolute right-0 bottom-0 bg-brand px-3 py-1.5 text-sm font-semibold text-primary-foreground">
          View full poster
        </span>
      </a>
    ) : (
      <div className="flex aspect-[3/4] items-center justify-center bg-pink-soft p-6 text-center">
        <span className="text-sm text-ink-soft">Artwork on its way</span>
      </div>
    )}

    <div className="flex flex-1 flex-col pt-5">
      <h3 className="font-display text-xl leading-snug font-semibold text-ink">{poster.title}</h3>

      {poster.category ? <p className="mt-1 text-sm text-ink-soft">{poster.category}</p> : null}

      <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{poster.summary}</p>

      {poster.quiz.length > 0 ? (
        <a
          href={`#quiz-${poster.slug}`}
          className="mt-4 w-fit font-semibold text-brand underline underline-offset-4 hover:text-brand-deep"
        >
          Take the {poster.title} quiz
        </a>
      ) : (
        <p className="mt-4 text-sm text-ink-soft">Quiz coming soon</p>
      )}

      {poster.credit ? (
        <p className="mt-3 text-sm text-ink-soft">Infographic by {poster.credit}</p>
      ) : null}
    </div>
  </article>
);

export const PosterGallery = ({ posters }: { posters: Poster[] }): React.ReactElement => {
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
      <div
        role="group"
        aria-label="Filter posters by category"
        className="flex flex-wrap gap-x-6 gap-y-2 border-b border-border pb-4"
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
                "text-sm underline-offset-[6px] transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                isActive ? "font-semibold text-brand underline" : "text-ink-soft",
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      <ul className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((poster) => (
          <li key={poster.slug} className="h-full">
            <PosterCard poster={poster} />
          </li>
        ))}
      </ul>
    </div>
  );
};

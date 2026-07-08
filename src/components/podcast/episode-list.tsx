import { Mic } from "lucide-react";
import type { Episode } from "@/lib/content";
import { buttonVariants } from "@/components/ui/button";
import { Cell } from "@/components/organic/cell";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

/**
 * PathoTalks episode list. Each episode is a card with a generated "blob" art
 * placeholder (episode art files don't exist yet), metadata, and a link out to
 * Spotify. Placeholder colors rotate across a warm, organic palette.
 */

const CELL_COLORS = ["brand", "moss", "marigold", "clay", "marigold-soft"] as const;
const CELL_VARIANTS = [0, 1, 2] as const;

type EpisodeCardProps = {
  episode: Episode;
  index: number;
};

export const EpisodeCard = ({ episode, index }: EpisodeCardProps): React.ReactElement => {
  const color = CELL_COLORS[index % CELL_COLORS.length];
  const variant = CELL_VARIANTS[index % CELL_VARIANTS.length];
  const numberOnDark = color === "marigold-soft";

  return (
    <li className="h-full list-none">
      <Reveal
        as="article"
        delay={(index % 3) * 80}
        className="group flex h-full flex-col gap-6 rounded-[2rem] border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(44,33,23,0.35)] focus-within:-translate-y-1 sm:flex-row sm:items-start sm:p-7"
      >
        {/* Placeholder art: organic blob + episode number + mic */}
        <div className="relative flex h-28 w-28 shrink-0 items-center justify-center sm:h-32 sm:w-32">
          <Cell
            color={color}
            variant={variant}
            animate="breathe"
            className="absolute inset-0 h-full w-full"
          />
          <span
            className={cn(
              "relative font-display text-4xl font-semibold sm:text-5xl",
              numberOnDark ? "text-moss-deep" : "text-[#F3EAD7]",
            )}
          >
            {episode.episode}
          </span>
          <Mic
            aria-hidden="true"
            className={cn(
              "absolute bottom-2 right-2 h-5 w-5",
              numberOnDark ? "text-moss-deep" : "text-[#F3EAD7]",
            )}
          />
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col">
          <span className="font-display text-xs font-semibold tracking-wide text-brand-deep uppercase">
            Episode {episode.episode}
          </span>
          <h3 className="mt-2 font-display text-xl leading-snug font-semibold text-ink sm:text-2xl">
            {episode.title}
          </h3>

          {(episode.guest || episode.specialty) && (
            <p className="mt-2 text-base font-medium text-moss-deep">
              {episode.guest}
              {episode.guest && episode.specialty ? " — " : ""}
              {episode.specialty && (
                <span className="font-normal text-ink-soft">{episode.specialty}</span>
              )}
            </p>
          )}

          {episode.interviewer && (
            <p className="mt-1 text-sm text-ink-soft">Hosted by {episode.interviewer}</p>
          )}

          {episode.summary && (
            <p className="mt-3 text-base leading-relaxed text-ink-soft">{episode.summary}</p>
          )}

          {episode.link && (
            <div className="mt-auto pt-5">
              <a
                href={episode.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Listen to Episode ${episode.episode}, ${episode.title}, on Spotify (opens in a new tab)`}
                className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}
              >
                <Mic aria-hidden="true" className="h-4 w-4" />
                Listen on Spotify
              </a>
            </div>
          )}
        </div>
      </Reveal>
    </li>
  );
};

export const EpisodeList = ({ episodes }: { episodes: Episode[] }): React.ReactElement => (
  <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2">
    {episodes.map((episode, index) => (
      <EpisodeCard key={episode.slug} episode={episode} index={index} />
    ))}
  </ul>
);

import Image from "next/image";
import type { Episode } from "@/lib/content";

/**
 * PathoTalks episodes as a ruled list. The episode number is set large in the
 * display face and doubles as the artwork slot — cover images are used when a
 * content file supplies one.
 */

export const EpisodeCard = ({ episode }: { episode: Episode }): React.ReactElement => (
  <li className="border-t border-border">
    <article className="flex flex-col gap-5 py-8 sm:flex-row sm:gap-8">
      {episode.image ? (
        <div className="relative h-24 w-24 shrink-0 overflow-hidden bg-pink-soft">
          <Image
            src={episode.image}
            alt={episode.alt || `Cover art for Episode ${episode.episode}: ${episode.title}`}
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>
      ) : (
        <span
          aria-hidden="true"
          className="flex h-24 w-24 shrink-0 items-center justify-center bg-pink-soft font-display text-4xl font-semibold text-brand"
        >
          {episode.episode}
        </span>
      )}

      <div className="flex flex-1 flex-col">
        <p className="eyebrow">Episode {episode.episode}</p>
        <h3 className="mt-2 font-display text-xl leading-snug font-semibold text-ink sm:text-2xl">
          {episode.title}
        </h3>

        {(episode.guest || episode.specialty) && (
          <p className="mt-2 text-ink">
            <span className="font-semibold">{episode.guest}</span>
            {episode.guest && episode.specialty ? " — " : ""}
            {episode.specialty ? <span className="text-ink-soft">{episode.specialty}</span> : null}
          </p>
        )}

        {episode.interviewer && (
          <p className="mt-1 text-sm text-ink-soft">Hosted by {episode.interviewer}</p>
        )}

        {episode.summary && <p className="mt-3 leading-relaxed text-ink-soft">{episode.summary}</p>}

        {episode.link && (
          <a
            href={episode.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Listen to Episode ${episode.episode}, ${episode.title}, on Spotify (opens in a new tab)`}
            className="mt-4 w-fit font-semibold text-brand underline-offset-4 hover:underline"
          >
            Listen on Spotify ↗
          </a>
        )}
      </div>
    </article>
  </li>
);

export const EpisodeList = ({ episodes }: { episodes: Episode[] }): React.ReactElement => (
  <ul className="grid gap-x-12 lg:grid-cols-2">
    {episodes.map((episode) => (
      <EpisodeCard key={episode.slug} episode={episode} />
    ))}
  </ul>
);

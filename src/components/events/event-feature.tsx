import { ArrowUpRight } from "lucide-react";
import type { EventItem } from "@/lib/content";
import { PhotoStrip } from "@/components/media/photo-strip";

/**
 * A full past event: date and location, title, summary, then every photo from
 * that event — the same "heading, then the whole album" shape the team uses on
 * projectpatho.org.
 */

type EventFeatureProps = {
  event: EventItem;
};

export const EventFeature = ({ event }: EventFeatureProps): React.ReactElement => {
  return (
    <article className="border-t border-border pt-8">
      <h3 className="font-display text-3xl leading-tight font-semibold text-ink">{event.title}</h3>

      <p className="mt-2 text-sm text-ink-soft">
        {event.displayDate ?? event.date} · {event.location}
      </p>

      <p className="mt-4 max-w-3xl leading-relaxed text-ink-soft">{event.summary}</p>

      {event.link ? (
        <a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 font-semibold text-brand underline-offset-4 hover:underline"
        >
          {event.linkLabel ?? `More about ${event.title}`}
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </a>
      ) : null}

      <PhotoStrip photos={event.photos} columns={3} className="mt-8" />
    </article>
  );
};

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
  const photos = [
    ...(event.image ? [{ src: event.image, alt: event.alt ?? `Photo from ${event.title}` }] : []),
    ...event.gallery,
  ];

  return (
    <article className="border-t border-border pt-8">
      <p className="eyebrow">
        {event.displayDate ?? event.date} · {event.location}
      </p>

      <h3 className="mt-4 font-display text-3xl leading-tight font-semibold text-ink">
        {event.title}
      </h3>

      <p className="mt-3 max-w-3xl leading-relaxed text-ink-soft">{event.summary}</p>

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

      {/* A lone image is the event's flyer, not a snapshot — show it whole. */}
      <PhotoStrip
        photos={photos}
        columns={3}
        fit={photos.length === 1 ? "contain" : "cover"}
        className="mt-8"
      />
    </article>
  );
};

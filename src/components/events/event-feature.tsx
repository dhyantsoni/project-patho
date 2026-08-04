import { ArrowUpRight, MapPin } from "lucide-react";
import type { EventItem } from "@/lib/content";
import { buttonVariants } from "@/components/ui/button";
import { PhotoStrip } from "@/components/media/photo-strip";
import { cn } from "@/lib/utils";

/**
 * A full past event: date, title, location, summary, then every photo from
 * that event — the same "heading, then the whole album" shape the team uses on
 * projectpatho.org, in this site's typography.
 */

const chipStyles = [
  "bg-marigold-soft text-ink",
  "bg-brand text-primary-foreground",
  "bg-moss text-secondary-foreground",
] as const;

type EventFeatureProps = {
  event: EventItem;
  /** Position in the list — rotates the date chip colour. */
  index?: number;
};

export const EventFeature = ({ event, index = 0 }: EventFeatureProps): React.ReactElement => {
  const chip = chipStyles[index % chipStyles.length];
  const photos = [
    ...(event.image ? [{ src: event.image, alt: event.alt ?? `Photo from ${event.title}` }] : []),
    ...event.gallery,
  ];

  return (
    <article className="border-t border-border pt-10">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
        <span
          className={cn(
            "inline-flex w-fit items-center rounded-full px-3.5 py-1.5 font-display text-sm font-semibold tracking-wide",
            chip,
          )}
        >
          {event.displayDate ?? event.date}
        </span>
        <p className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-deep">
          <MapPin aria-hidden="true" className="h-4 w-4 shrink-0" />
          <span>{event.location}</span>
        </p>
      </div>

      <h3 className="mt-4 font-display text-3xl leading-tight font-semibold text-ink">
        {event.title}
      </h3>

      <p className="mt-3 max-w-3xl leading-relaxed text-ink-soft">{event.summary}</p>

      {event.link ? (
        <a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline", size: "sm" }), "mt-5 w-fit")}
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

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { EventItem } from "@/lib/content";

/**
 * A compact event listing used for upcoming events: photo, date and location,
 * title, summary, and an optional info/sign-up link.
 */

type EventCardProps = {
  event: EventItem;
};

export const EventCard = ({ event }: EventCardProps): React.ReactElement => (
  <article className="flex h-full flex-col border-t border-border pt-6">
    {event.image ? (
      <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden bg-pink-soft">
        <Image
          src={event.image}
          alt={event.alt || `Photo from ${event.title}`}
          fill
          sizes="(max-width: 768px) 90vw, 30vw"
          className="object-cover"
        />
      </div>
    ) : null}

    <h3 className="font-display text-2xl leading-snug font-semibold text-ink">{event.title}</h3>

    <p className="mt-2 text-sm text-ink-soft">
      {event.displayDate ?? event.date} · {event.location}
    </p>

    <p className="mt-4 flex-1 leading-relaxed text-ink-soft">{event.summary}</p>

    {event.link ? (
      <a
        href={event.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex w-fit items-center gap-1.5 font-semibold text-brand underline-offset-4 hover:underline"
      >
        {event.linkLabel ?? `More about ${event.title}`}
        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
      </a>
    ) : null}
  </article>
);

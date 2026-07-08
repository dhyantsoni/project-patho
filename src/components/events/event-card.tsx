import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { EventItem } from "@/lib/content";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * A single warm event card: a date chip, Fraunces title, location with a
 * MapPin, a short summary, and an optional info/sign-up link. Behaviour is
 * driven entirely by the event data — no boolean-prop toggles. Rotates a
 * decorative chip colour by `index` so a grid of cards reads as a set.
 */

const chipStyles = [
  "bg-marigold-soft text-ink",
  "bg-brand text-primary-foreground",
  "bg-moss text-secondary-foreground",
] as const;

type EventCardProps = {
  event: EventItem;
  /** Position in the list — rotates the date chip colour. */
  index?: number;
};

export const EventCard = ({ event, index = 0 }: EventCardProps): React.ReactElement => {
  const chip = chipStyles[index % chipStyles.length];

  return (
    <article className="group flex h-full flex-col rounded-[1.75rem] border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_18px_40px_-20px_rgba(44,33,23,0.35)]">
      {event.image ? (
        <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-2xl">
          <Image
            src={event.image}
            alt={event.alt || `Photo from ${event.title}`}
            fill
            sizes="(max-width: 768px) 90vw, 30vw"
            className="object-cover"
          />
        </div>
      ) : null}

      <span
        className={cn(
          "inline-flex w-fit items-center rounded-full px-3.5 py-1.5 font-display text-sm font-semibold tracking-wide",
          chip,
        )}
      >
        {event.displayDate ?? event.date}
      </span>

      <h3 className="mt-5 font-display text-2xl leading-snug font-semibold text-ink">
        {event.title}
      </h3>

      <p className="mt-3 inline-flex items-start gap-1.5 text-sm font-medium text-brand-deep">
        <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
        <span>{event.location}</span>
      </p>

      <p className="mt-4 flex-1 leading-relaxed text-ink-soft">{event.summary}</p>

      {event.link ? (
        <a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline", size: "sm" }), "mt-6 w-fit")}
        >
          {`More about ${event.title}`}
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </a>
      ) : null}
    </article>
  );
};

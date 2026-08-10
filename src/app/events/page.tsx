import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getEvents } from "@/lib/content";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { EventCard } from "@/components/events/event-card";
import { EventFeature } from "@/components/events/event-feature";
import { PhotoStrip } from "@/components/media/photo-strip";

export const metadata = pageMeta({
  title: "Events",
  description:
    "Workshops, club meets, and community events where ProjectPatho brings warm, hands-on science to kids — plus our ongoing Cards for Hospitalized Kids program.",
  path: "/events",
});

const EventsPage = (): React.ReactElement => {
  const events = getEvents();
  const upcoming = events.filter((e) => e.status === "upcoming" && !e.cardsForKids);
  const past = events.filter((e) => e.status === "past" && !e.cardsForKids);
  const cardsForKids = events.find((e) => e.cardsForKids);

  return (
    <>
      {/* ===== Masthead ===== */}
      <section className="pt-8 pb-12">
        <Container>
          <h1 className="rule-heavy pt-5 font-display text-5xl leading-[1.05] font-semibold text-ink sm:text-6xl">
            Events
          </h1>
          <p className="dateline mt-3 border-t border-border pt-3">
            <span>{past.length + upcoming.length} so far</span>
            <span>Libraries, schools, and hospitals across San Diego</span>
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
            We take science off the page and into libraries, classrooms, and community spaces —
            hands-on workshops where kids build first aid kits, explore the brain, and learn how
            their bodies work. Here&apos;s where we&apos;ve been, and where you can find us next.
          </p>
        </Container>
      </section>

      {/* ===== Upcoming ===== */}
      <section id="upcoming" aria-labelledby="upcoming-heading" className="scroll-mt-20 pb-14">
        <Container>
          <h2 id="upcoming-heading" className="font-display text-xl font-semibold text-ink">
            Upcoming events
          </h2>

          {upcoming.length > 0 ? (
            <ul className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {upcoming.map((event) => (
                <li key={event.slug} className="h-full">
                  <EventCard event={event} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-6 max-w-2xl border-t border-border pt-6">
              <p className="leading-relaxed text-ink-soft">
                We&apos;re busy planning our next workshops. Follow us on Instagram or join the team
                to be the first to hear when new events go live.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants())}
                >
                  Follow {site.instagramHandle}
                </a>
                <Link href="/join" className={cn(buttonVariants({ variant: "ghost" }))}>
                  Join the team
                </Link>
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* ===== Cards for Hospitalized Kids ===== */}
      {cardsForKids ? (
        <section
          id="cards-for-kids"
          aria-labelledby="cards-heading"
          className="scroll-mt-20 bg-brand-deep py-16 text-[#FDF4F2] sm:py-20"
        >
          <Container>
            <h2 id="cards-heading" className="font-display text-3xl font-semibold sm:text-4xl">
              {cardsForKids.title}
            </h2>
            <p className="mt-2 text-[#F0D5D9]">
              An ongoing program · {cardsForKids.location}
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#F0D5D9]">
              {cardsForKids.summary}
            </p>

            <div className="mt-4 max-w-3xl space-y-4 leading-relaxed text-[#F0D5D9]">
              {cardsForKids.body
                .split(/\n{2,}/)
                .map((para) => para.trim())
                .filter(Boolean)
                .map((para) => (
                  <p key={para.slice(0, 32)}>{para}</p>
                ))}
            </div>

            <PhotoStrip className="mt-10" columns={4} photos={cardsForKids.photos} />

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              {cardsForKids.link ? (
                <a
                  href={cardsForKids.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "onDark" }))}
                >
                  About Brushstrokes for Biodiversity
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
              ) : null}
              <Link
                href="/join"
                className="font-semibold text-pink underline-offset-4 hover:text-white hover:underline"
              >
                Volunteer with us
              </Link>
            </div>
          </Container>
        </section>
      ) : null}

      {/* ===== Past events ===== */}
      <section id="past" aria-labelledby="past-heading" className="scroll-mt-20 py-16 sm:py-20">
        <Container>
          <h2
            id="past-heading"
            className="font-display text-4xl leading-tight font-semibold text-ink sm:text-5xl"
          >
            Where we&apos;ve been
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
            Every workshop and gathering we&apos;ve run across San Diego — from the 4s Ranch Library
            to Ronald McDonald House Charities — with all the photos from each.
          </p>

          {/* Every event keeps its whole album, newest first — same as the
              team's own past-events page. */}
          <ul className="mt-12 space-y-16">
            {past.map((event) => (
              <li key={event.slug}>
                <EventFeature event={event} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ===== Join CTA ===== */}
      <section aria-labelledby="events-join-heading" className="border-t border-border py-16">
        <Container>
          <div className="max-w-2xl">
            <h2
              id="events-join-heading"
              className="font-display text-3xl font-semibold text-ink sm:text-4xl"
            >
              Bring a ProjectPatho event to your community
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Want to host a workshop, or help run the next one? We&apos;d love to hear from you.
            </p>
            <Link href="/join" className={cn(buttonVariants({ size: "lg" }), "mt-8")}>
              Get involved
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default EventsPage;

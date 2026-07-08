import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, HeartHandshake, Instagram, MapPin } from "lucide-react";
import { getEvents } from "@/lib/content";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { Cell } from "@/components/organic/cell";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import { EventCard } from "@/components/events/event-card";

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
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden pt-10 pb-14 sm:pt-16 sm:pb-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <Cell
            color="marigold-soft"
            variant={0}
            animate="drift-slow"
            opacity={0.5}
            className="absolute -top-20 -right-16 h-80 w-80"
          />
          <Cell
            color="moss"
            variant={2}
            animate="drift"
            opacity={0.12}
            className="absolute top-32 -left-24 h-72 w-72"
          />
        </div>

        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="font-display text-sm font-semibold tracking-wide text-brand-deep uppercase">
                Out in the community
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-3 font-display text-5xl leading-[1.03] font-semibold tracking-tight text-ink sm:text-6xl">
                Events
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
                We take science off the page and into libraries, classrooms, and community spaces —
                hands-on workshops where kids build first aid kits, explore the brain, and learn how
                their bodies work. Here&apos;s where we&apos;ve been, and where you can find us next.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <nav aria-label="Jump to a section" className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href="#upcoming"
                  className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                >
                  Upcoming
                </a>
                <a
                  href="#cards-for-kids"
                  className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                >
                  Cards for Hospitalized Kids
                </a>
                <a href="#past" className={cn(buttonVariants({ variant: "outline", size: "sm" }))}>
                  Past events
                </a>
              </nav>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ===== Upcoming ===== */}
      <section id="upcoming" aria-labelledby="upcoming-heading" className="scroll-mt-24 pb-16">
        <Container>
          <Reveal>
            <h2
              id="upcoming-heading"
              className="font-display text-3xl font-semibold text-ink sm:text-4xl"
            >
              Upcoming events
            </h2>
          </Reveal>

          {upcoming.length > 0 ? (
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {upcoming.map((event, i) => (
                <Reveal as="li" key={event.slug} delay={i * 70} className="h-full">
                  <EventCard event={event} index={i} />
                </Reveal>
              ))}
            </ul>
          ) : (
            <Reveal>
              <div className="relative mt-8 overflow-hidden rounded-[2rem] border border-border bg-surface-2 px-6 py-12 text-center sm:px-12 sm:py-16">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0">
                  <Cell
                    color="marigold"
                    variant={1}
                    animate="breathe"
                    opacity={0.16}
                    className="absolute -top-14 -right-10 h-56 w-56"
                  />
                </div>
                <div className="relative mx-auto max-w-xl">
                  <h3 className="font-display text-2xl font-semibold text-ink">
                    No upcoming events right now
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">
                    We&apos;re busy planning our next workshops. Follow us on Instagram or join the
                    team to be the first to hear when new events go live.
                  </p>
                  <div className="mt-7 flex flex-wrap justify-center gap-3">
                    <a
                      href={site.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(buttonVariants({ variant: "primary", size: "md" }))}
                    >
                      <Instagram aria-hidden="true" className="h-5 w-5" />
                      Follow {site.instagramHandle}
                    </a>
                    <Link href="/join" className={cn(buttonVariants({ variant: "outline", size: "md" }))}>
                      Join the team
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          )}
        </Container>
      </section>

      {/* ===== Cards for Hospitalized Kids feature ===== */}
      {cardsForKids ? (
        <section
          id="cards-for-kids"
          aria-labelledby="cards-heading"
          className="scroll-mt-24 py-4"
        >
          <Container>
            <Reveal>
              <div className="relative overflow-hidden rounded-[2.5rem] bg-moss-deep px-6 py-14 text-[#F3EAD7] sm:px-12 sm:py-16">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0">
                  <Cell
                    color="marigold"
                    variant={0}
                    animate="breathe"
                    opacity={0.14}
                    className="absolute -top-16 -right-12 h-72 w-72"
                  />
                  <Cell
                    color="brand"
                    variant={2}
                    animate="drift-slow"
                    opacity={0.16}
                    className="absolute -bottom-24 -left-16 h-72 w-72"
                  />
                </div>

                <div className="relative mx-auto max-w-3xl">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#F3EAD7]/15 px-3.5 py-1.5 font-display text-sm font-semibold tracking-wide text-marigold-soft">
                    <HeartHandshake aria-hidden="true" className="h-4 w-4" />
                    Ongoing program
                  </span>

                  <h2
                    id="cards-heading"
                    className="mt-5 font-display text-3xl font-semibold sm:text-4xl"
                  >
                    {cardsForKids.title}
                  </h2>

                  <p className="mt-3 inline-flex items-start gap-1.5 text-sm font-medium text-marigold-soft">
                    <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{cardsForKids.location}</span>
                  </p>

                  <p className="mt-5 text-lg leading-relaxed text-[#E4D9BE]">
                    {cardsForKids.summary}
                  </p>

                  <div className="mt-5 space-y-4 leading-relaxed text-[#E4D9BE]">
                    {cardsForKids.body
                      .split(/\n{2,}/)
                      .map((para) => para.trim())
                      .filter(Boolean)
                      .map((para) => (
                        <p key={para.slice(0, 32)}>{para}</p>
                      ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    {cardsForKids.link ? (
                      <a
                        href={cardsForKids.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          buttonVariants({ variant: "primary", size: "md" }),
                          "h-auto min-h-12 w-full whitespace-normal py-3 text-center sm:w-auto",
                        )}
                      >
                        Learn about Brushstrokes for Biodiversity
                        <ArrowUpRight aria-hidden="true" className="h-5 w-5 shrink-0" />
                      </a>
                    ) : null}
                    <Link
                      href="/join"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "md" }),
                        "w-full border-[#F3EAD7] text-[#F3EAD7] hover:bg-[#F3EAD7] hover:text-moss-deep sm:w-auto",
                      )}
                    >
                      Volunteer with us
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>
      ) : null}

      {/* ===== Past events ===== */}
      <section id="past" aria-labelledby="past-heading" className="scroll-mt-24 py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2
              id="past-heading"
              className="font-display text-3xl font-semibold text-ink sm:text-4xl"
            >
              Past events
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">
              A look back at the workshops and gatherings we&apos;ve run across San Diego — from the
              4s Ranch Library to Ronald McDonald House Charities.
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {past.map((event, i) => (
              <Reveal as="li" key={event.slug} delay={i * 60} className="h-full">
                <EventCard event={event} index={i} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* ===== Join CTA band ===== */}
      <section aria-labelledby="events-join-heading" className="pb-16 sm:pb-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-surface-2 px-6 py-14 text-center sm:px-12">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0">
              <Cell
                color="brand"
                variant={1}
                animate="breathe"
                opacity={0.12}
                className="absolute -top-16 -right-10 h-64 w-64"
              />
            </div>
            <div className="relative mx-auto max-w-xl">
              <h2
                id="events-join-heading"
                className="font-display text-3xl font-semibold text-ink sm:text-4xl"
              >
                Bring a ProjectPatho event to your community
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Want to host a workshop, or help run the next one? We&apos;d love to hear from you.
              </p>
              <Link
                href="/join"
                className={cn(buttonVariants({ variant: "primary", size: "lg" }), "mt-8")}
              >
                Get involved
                <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default EventsPage;

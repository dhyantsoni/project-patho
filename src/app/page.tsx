import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, Mic, Users, HeartHandshake } from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { Cell } from "@/components/organic/cell";
import { PhotoFrame } from "@/components/organic/photo-frame";
import { Reveal } from "@/components/motion/reveal";
import { PhotoStrip } from "@/components/media/photo-strip";
import { getEvents, getStats } from "@/lib/content";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const pathways = [
  {
    href: "/resources",
    label: "Info Posters",
    desc: "Friendly, kid-first guides to conditions like epilepsy, sickle cell, and more — made for ages 7–11.",
    icon: BookOpen,
    color: "text-brand-deep",
  },
  {
    href: "/podcast",
    label: "PathoTalks Podcast",
    desc: "Ten conversations with real doctors and scientists about the work they do and why it matters.",
    icon: Mic,
    color: "text-moss-deep",
  },
  {
    href: "/events",
    label: "Events",
    desc: "Workshops, care-package drives, and community days that bring science to life.",
    icon: Calendar,
    color: "text-brand-deep",
  },
  {
    href: "/team",
    label: "Meet the Team",
    desc: "The student leaders behind ProjectPatho, and what they care about.",
    icon: Users,
    color: "text-moss-deep",
  },
];

const HomePage = (): React.ReactElement => {
  const stats = getStats();
  const events = getEvents().filter((e) => !e.cardsForKids && e.image);
  // The event-flyer slot: the next event when one is scheduled, otherwise the
  // most recent one — so the poster the team made always has a home here.
  const featured = events.find((e) => e.status === "upcoming") ?? events[0];

  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden pt-10 pb-20 sm:pt-16 sm:pb-28">
        {/* Signature drifting cell backdrop (decorative) */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <Cell
            color="marigold-soft"
            variant={0}
            animate="drift-slow"
            opacity={0.5}
            className="absolute -top-16 -right-16 h-80 w-80"
          />
          <Cell
            color="moss"
            variant={1}
            animate="drift"
            opacity={0.14}
            className="absolute top-40 -left-24 h-72 w-72"
          />
          <Cell
            color="brand"
            variant={2}
            animate="breathe"
            opacity={0.1}
            className="absolute -bottom-24 right-1/4 h-64 w-64"
          />
        </div>

        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-surface px-4 py-1.5 text-sm font-semibold text-brand-deep">
                <span className="h-2 w-2 rounded-full bg-marigold" aria-hidden="true" />
                {site.tagline}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-5xl leading-[1.02] font-semibold tracking-tight text-ink sm:text-6xl md:text-7xl">
                Understanding disease,
                <span className="block text-brand">one young mind at a time.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
                We help elementary and middle schoolers understand rare and misunderstood conditions
                — to reduce stigma, grow empathy, and spark a lifelong love of science.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/resources" className={cn(buttonVariants({ size: "lg" }))}>
                  Explore our posters
                  <ArrowRight aria-hidden="true" className="h-5 w-5" />
                </Link>
                <Link
                  href="/podcast"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
                >
                  Listen to PathoTalks
                </Link>
              </div>
              <p className="mt-5 text-sm text-ink-soft">
                Infographics designed for students aged 7–11.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ===== Mission — photo left, text right, as on projectpatho.org ===== */}
      {/* overflow-hidden: the decorative Cell sits past the right edge on narrow screens. */}
      <section id="about" className="scroll-mt-24 overflow-hidden pb-20 sm:pb-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative mx-auto w-full max-w-md lg:mx-0">
                <Cell
                  color="marigold-soft"
                  variant={2}
                  animate="drift-slow"
                  opacity={0.6}
                  aria-hidden="true"
                  className="absolute -top-8 -left-6 -z-10 h-40 w-40"
                />
                <PhotoFrame
                  src="/images/home-rmhc-team.webp"
                  alt="ProjectPatho members sitting with the Ronald McDonald statue outside Ronald McDonald House Charities"
                  shape={0}
                  ratio="landscape"
                  priority
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative">
                <span className="font-display text-sm font-semibold tracking-wide text-brand-deep uppercase">
                  Our mission
                </span>
                <h2 className="mt-3 font-display text-4xl leading-tight font-semibold text-ink sm:text-5xl">
                  Big science, made small enough to love.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-ink-soft">{site.mission}</p>
                <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                  We teach medical and biological concepts through posters, workshops, a podcast,
                  and social media — making complex topics accessible, accurate, and genuinely fun.
                </p>
                <ul className="mt-7 flex flex-wrap gap-2.5">
                  {[
                    { v: "Reduce", l: "stigma" },
                    { v: "Inspire", l: "empathy" },
                    { v: "Spark", l: "curiosity" },
                    { v: "Teach", l: "science" },
                  ].map((item) => (
                    <li
                      key={item.l}
                      className="rounded-full border border-border bg-surface px-4 py-2 text-sm"
                    >
                      <span className="font-semibold text-brand-deep">{item.v}</span>{" "}
                      <span className="text-ink-soft">{item.l}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/join" className={cn(buttonVariants({ variant: "secondary" }), "mt-8")}>
                  <HeartHandshake aria-hidden="true" className="h-5 w-5" />
                  Get involved
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ===== Where to start — text left, workshop photo right ===== */}
      <section aria-labelledby="start-heading" className="pb-20 sm:pb-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <h2
                  id="start-heading"
                  className="font-display text-3xl leading-snug font-semibold text-ink sm:text-4xl"
                >
                  Check out our upcoming event information below, or our infographics for students
                  aged 7–11.
                </h2>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/events" className={cn(buttonVariants({ variant: "primary" }))}>
                    See our events
                    <ArrowRight aria-hidden="true" className="h-5 w-5" />
                  </Link>
                  <Link href="/resources" className={cn(buttonVariants({ variant: "outline" }))}>
                    Browse the info posters
                  </Link>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <figure>
                <div className="relative aspect-[16/9] overflow-hidden rounded-[1.75rem] shadow-[0_22px_60px_-34px_rgba(44,33,23,0.65)]">
                  <Image
                    src="/images/home-workshop-library.webp"
                    alt="Children gathered around a ProjectPatho volunteer at the 4s Library as she walks them through a first aid scenario on screen"
                    fill
                    sizes="(max-width: 1024px) 92vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-ink-soft">
                  A ProjectPatho workshop at the 4s Ranch Library.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ===== Event flyer ===== */}
      {featured?.image ? (
        <section aria-labelledby="flyer-heading" className="pb-20 sm:pb-24">
          <Container>
            <Reveal>
              <h2
                id="flyer-heading"
                className="text-center font-display text-3xl font-semibold text-brand sm:text-4xl"
              >
                {featured.status === "upcoming"
                  ? "Upcoming event information!"
                  : "Our most recent event"}
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <Link
                href="/events"
                className="group mx-auto mt-8 block w-full max-w-xl rounded-[1.75rem] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-surface-2 shadow-[0_22px_60px_-34px_rgba(44,33,23,0.6)]">
                  <Image
                    src={featured.image}
                    alt={featured.alt ?? `Flyer for ${featured.title}`}
                    fill
                    sizes="(max-width: 768px) 92vw, 576px"
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <p className="mt-4 text-center text-ink-soft">
                  <span className="font-semibold text-ink">{featured.title}</span>
                  {featured.displayDate ? ` · ${featured.displayDate}` : null}
                  {featured.location ? ` · ${featured.location}` : null}
                </p>
                <span className="mt-2 block text-center font-semibold text-brand-deep group-hover:underline">
                  See all our events
                </span>
              </Link>
            </Reveal>
          </Container>
        </section>
      ) : null}

      {/* ===== Impact band ===== */}
      <section aria-labelledby="impact-heading" className="relative">
        <Container>
          <div className="overflow-hidden rounded-[2.5rem] bg-moss-deep px-6 py-14 text-[#F3EAD7] sm:px-12">
            <h2 id="impact-heading" className="text-center font-display text-3xl font-semibold">
              Our impact so far
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-[#E4D9BE]">
              A student team, a growing community, and a lot of curiosity.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
              {stats.map((stat, i) => (
                <Reveal as="div" key={stat.label} delay={i * 60} className="text-center">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-4xl font-semibold text-marigold-soft sm:text-5xl">
                      {stat.value}
                    </span>
                    <span className="mt-2 block text-sm font-medium text-[#E4D9BE]">
                      {stat.label}
                    </span>
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* ===== Two photos under the stats, as on projectpatho.org ===== */}
      <section aria-labelledby="community-heading" className="py-16 sm:py-20">
        <Container>
          <h2 id="community-heading" className="sr-only">
            ProjectPatho out in the community
          </h2>
          <Reveal>
            <PhotoStrip
              columns={2}
              photos={[
                {
                  src: "/images/home-rmhc-donations.webp",
                  alt: "Team members holding the treats and care package items they donated to Ronald McDonald House Charities",
                },
                {
                  src: "/images/home-team-lineup.webp",
                  alt: "Five ProjectPatho members wearing hand-lettered name tags, standing in front of a wall of children's artwork",
                },
              ]}
            />
          </Reveal>
        </Container>
      </section>

      {/* ===== Pathways ===== */}
      <section aria-labelledby="explore-heading" className="pb-24">
        <Container>
          <Reveal>
            <h2
              id="explore-heading"
              className="font-display text-3xl font-semibold text-ink sm:text-4xl"
            >
              Where would you like to start?
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {pathways.map((p, i) => (
              <Reveal as="article" key={p.href} delay={i * 70}>
                <Link
                  href={p.href}
                  className="group relative flex h-full flex-col rounded-[1.75rem] border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_18px_40px_-20px_rgba(44,33,23,0.35)] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-2">
                    <p.icon aria-hidden="true" className={cn("h-7 w-7", p.color)} />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-ink">{p.label}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-ink-soft">{p.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-brand-deep">
                    Explore
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomePage;

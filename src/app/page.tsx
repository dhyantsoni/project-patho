import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { Photo } from "@/components/media/photo";
import { PhotoStrip } from "@/components/media/photo-strip";
import { getEvents, getPhoto, getStats } from "@/lib/content";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const pathways = [
  {
    href: "/resources",
    label: "Info Posters",
    desc: "Friendly, kid-first guides to conditions like epilepsy, sickle cell, and more — made for ages 7–11.",
  },
  {
    href: "/podcast",
    label: "PathoTalks Podcast",
    desc: "Conversations with real doctors and scientists about the work they do and why it matters.",
  },
  {
    href: "/events",
    label: "Events",
    desc: "Workshops, care-package drives, and community days that bring science to life.",
  },
  {
    href: "/team",
    label: "Meet the Team",
    desc: "The student leaders behind ProjectPatho, and what they care about.",
  },
];

const missionPoints = ["Reduce stigma", "Inspire empathy", "Spark curiosity", "Teach science"];

const HomePage = (): React.ReactElement => {
  const stats = getStats();
  // Measured from the files so the wide RMHC group shot keeps everyone in frame.
  const communityPhotos = [
    getPhoto(
      "home-rmhc-donations.webp",
      "Six ProjectPatho members holding the treats and care package items they donated to Ronald McDonald House Charities",
    ),
    getPhoto(
      "home-team-lineup.webp",
      "Eight ProjectPatho members at the 4s Ranch Library for the Cardiovascular System event, standing around the presentation screen and workshop table",
    ),
  ].filter((p) => p !== undefined);
  const events = getEvents().filter((e) => !e.cardsForKids && e.image);
  // The event-flyer slot: the next event when one is scheduled, otherwise the
  // most recent one — so the poster the team made always has a home here.
  const featured = events.find((e) => e.status === "upcoming") ?? events[0];

  return (
    <>
      {/* ===== Hero ===== */}
      <section className="py-16 sm:py-24">
        <Container>
          <p className="eyebrow">{site.tagline}</p>
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-4">
            <h1 className="font-display text-6xl leading-[1.02] font-semibold tracking-tight text-ink sm:text-7xl md:text-8xl">
              Project<span className="text-brand">Patho</span>
            </h1>
            {/* Decorative: the heading beside it already says the name. */}
            <Image
              src="/images/logo.png"
              alt=""
              width={112}
              height={112}
              priority
              className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24"
            />
          </div>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            We help elementary and middle schoolers understand rare and misunderstood conditions —
            to reduce stigma, grow empathy, and spark a lifelong love of science.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link href="/resources" className={cn(buttonVariants({ size: "lg" }))}>
              Explore our posters
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link href="/podcast" className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}>
              Listen to PathoTalks
            </Link>
          </div>
        </Container>
      </section>

      {/* ===== Mission — photo left, text right, as on projectpatho.org ===== */}
      <section id="about" className="scroll-mt-20 border-t border-border py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Photo
              src="/images/home-rmhc-team.webp"
              alt="ProjectPatho members sitting with the Ronald McDonald statue outside Ronald McDonald House Charities"
              priority
            />
            <div>
              <p className="eyebrow">Our mission</p>
              <h2 className="mt-4 font-display text-4xl leading-tight font-semibold text-ink sm:text-5xl">
                What we do.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">{site.mission}</p>
              <p className="mt-4 leading-relaxed text-ink-soft">
                We teach medical and biological concepts through posters, workshops, a podcast, and
                social media — making complex topics accessible, accurate, and genuinely fun.
              </p>
              <ul className="mt-8 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {missionPoints.map((point) => (
                  <li key={point} className="border-t border-border pt-2 text-ink">
                    {point}
                  </li>
                ))}
              </ul>
              <Link href="/join" className={cn(buttonVariants({ variant: "outline" }), "mt-8")}>
                Get involved
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== Where to start — text left, workshop photo right ===== */}
      <section aria-labelledby="start-heading" className="border-t border-border py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2
                id="start-heading"
                className="font-display text-3xl leading-snug font-semibold text-ink sm:text-4xl"
              >
                Check out our upcoming event information below, or our infographics for students
                aged 7–11.
              </h2>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link href="/events" className={cn(buttonVariants())}>
                  See our events
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
                <Link href="/resources" className={cn(buttonVariants({ variant: "ghost" }))}>
                  Browse the info posters
                </Link>
              </div>
            </div>
            <Photo
              src="/images/home-workshop-library.webp"
              alt="Children gathered around a ProjectPatho volunteer at the 4s Library as she walks them through a first aid scenario on screen"
              ratio="wide"
              caption="Our first aid workshop at the 4s Ranch Library."
            />
          </div>
        </Container>
      </section>

      {/* ===== Event flyer ===== */}
      {featured?.image ? (
        <section aria-labelledby="flyer-heading" className="border-t border-border py-16 sm:py-20">
          <Container>
            <h2
              id="flyer-heading"
              className="text-center font-display text-3xl font-semibold text-brand sm:text-4xl"
            >
              {featured.status === "upcoming"
                ? "Upcoming event information"
                : "Our most recent event"}
            </h2>
            <Link
              href="/events"
              className="group mx-auto mt-10 block w-full max-w-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-pink-soft">
                <Image
                  src={featured.image}
                  alt={featured.alt ?? `Flyer for ${featured.title}`}
                  fill
                  sizes="(max-width: 768px) 92vw, 512px"
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-center text-ink-soft">
                <span className="font-semibold text-ink">{featured.title}</span>
                {featured.displayDate ? ` · ${featured.displayDate}` : null}
                {featured.location ? ` · ${featured.location}` : null}
              </p>
              <span className="mt-2 block text-center font-semibold text-brand underline-offset-4 group-hover:underline">
                See all our events
              </span>
            </Link>
          </Container>
        </section>
      ) : null}

      {/* ===== Impact band ===== */}
      <section aria-labelledby="impact-heading" className="bg-brand-deep py-16 text-[#FDF4F2]">
        <Container>
          <h2 id="impact-heading" className="font-display text-3xl font-semibold sm:text-4xl">
            Our impact so far
          </h2>
          <p className="mt-3 max-w-xl text-[#F0D5D9]">
            A student team, a growing community, and a lot of curiosity.
          </p>
          <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="border-t border-white/25 pt-4">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-4xl font-semibold text-pink sm:text-5xl">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-sm text-[#F0D5D9]">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ===== Two photos under the stats, as on projectpatho.org ===== */}
      <section aria-labelledby="community-heading" className="py-16 sm:py-20">
        <Container>
          <h2 id="community-heading" className="sr-only">
            ProjectPatho out in the community
          </h2>
          <PhotoStrip columns={2} photos={communityPhotos} />
        </Container>
      </section>

      {/* ===== Pathways ===== */}
      <section aria-labelledby="explore-heading" className="border-t border-border py-16 sm:py-20">
        <Container>
          <h2
            id="explore-heading"
            className="font-display text-3xl font-semibold text-ink sm:text-4xl"
          >
            Where would you like to start?
          </h2>
          <ul className="mt-10 grid gap-x-16 sm:grid-cols-2">
            {pathways.map((p) => (
              <li key={p.href} className="border-t border-border">
                <Link
                  href={p.href}
                  className="group block py-7 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <h3 className="flex items-center gap-2 font-display text-2xl font-semibold text-ink group-hover:text-brand">
                    {p.label}
                    <ArrowRight
                      aria-hidden="true"
                      className="h-5 w-5 text-brand transition-transform group-hover:translate-x-1"
                    />
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{p.desc}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
};

export default HomePage;

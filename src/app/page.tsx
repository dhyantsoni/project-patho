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
    desc: "Six illustrated guides to conditions like epilepsy and sickle cell, written for ages 7–11 — each with a quiz.",
  },
  {
    href: "/podcast",
    label: "PathoTalks",
    desc: "Twelve conversations with doctors and scientists, from anesthesiology to the ICU.",
  },
  {
    href: "/events",
    label: "Events",
    desc: "Library workshops, care-package drives, and club meets across San Diego.",
  },
  {
    href: "/team",
    label: "The Team",
    desc: "Ten student officers and two interns, and what each of them works on.",
  },
];

const HomePage = (): React.ReactElement => {
  const stats = getStats();
  // The headline figure carries the section; the rest run underneath it.
  const lead = stats.find((s) => s.label === "Students Reached") ?? stats[0];
  const rest = stats.filter((s) => s !== lead);

  const events = getEvents().filter((e) => !e.cardsForKids && e.image);
  // The event-flyer slot: the next event when one is scheduled, otherwise the
  // most recent one — so the poster the team made always has a home here.
  const featured = events.find((e) => e.status === "upcoming") ?? events[0];

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

  return (
    <>
      {/* ===== Masthead ===== */}
      <section className="pt-8 pb-14">
        <Container>
          <div className="rule-heavy flex flex-wrap items-end justify-between gap-x-8 gap-y-4 pt-5">
            <h1 className="font-display text-6xl leading-[0.95] font-semibold tracking-tight text-ink sm:text-7xl md:text-8xl">
              Project<span className="text-brand">Patho</span>
            </h1>
            {/* Decorative: the masthead beside it already says the name. */}
            <Image
              src="/images/logo.png"
              alt=""
              width={112}
              height={112}
              priority
              className="mb-1 h-14 w-14 rounded-sm sm:h-20 sm:w-20"
            />
          </div>
          <p className="dateline mt-3 border-t border-border pt-3">
            <span>Student-run nonprofit</span>
            <span>San Diego, California</span>
            <span>Fiscally sponsored by {site.fiscalSponsor.name}</span>
          </p>

          <p className="mt-10 max-w-3xl font-display text-2xl leading-snug text-ink sm:text-3xl">
            We teach elementary and middle schoolers what diseases actually are — in libraries, on
            posters, and on a podcast — so the words stop being frightening.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link href="/resources" className={cn(buttonVariants({ size: "lg" }))}>
              Read the posters
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link href="/podcast" className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}>
              Listen to PathoTalks
            </Link>
          </div>
        </Container>
      </section>

      {/* ===== Mission — photo left, text right, as on projectpatho.org ===== */}
      <section id="about" className="scroll-mt-20 border-t border-border py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Photo
              src="/images/home-rmhc-team.webp"
              alt="ProjectPatho members sitting with the Ronald McDonald statue outside Ronald McDonald House Charities"
              priority
            />
            <div>
              <h2 className="font-display text-4xl leading-[1.05] font-semibold text-ink sm:text-5xl">
                What we do.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">{site.mission}</p>
              <p className="mt-4 leading-relaxed text-ink-soft">
                We teach medical and biological concepts through posters, workshops, a podcast, and
                social media — making complex topics accessible, accurate, and genuinely fun.
              </p>
              <Link href="/join" className={cn(buttonVariants({ variant: "outline" }), "mt-8")}>
                Get involved
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== Where to start — text left, workshop photo right ===== */}
      <section aria-labelledby="start-heading" className="pb-16 sm:pb-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2
                id="start-heading"
                className="font-display text-2xl leading-snug font-semibold text-ink sm:text-3xl"
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
        <section aria-labelledby="flyer-heading" className="border-t border-border py-14">
          <Container>
            <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center lg:gap-16">
              <div>
                <h2
                  id="flyer-heading"
                  className="font-display text-3xl leading-tight font-semibold text-ink sm:text-4xl"
                >
                  {featured.status === "upcoming"
                    ? "Our next event"
                    : "Our most recent event"}
                </h2>
                <p className="mt-4 text-lg text-ink-soft">
                  <span className="font-semibold text-ink">{featured.title}</span>
                  {featured.displayDate ? ` · ${featured.displayDate}` : null}
                  {featured.location ? ` · ${featured.location}` : null}
                </p>
                <Link
                  href="/events"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-brand underline-offset-4 hover:underline"
                >
                  See all our events
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
              <Link
                href="/events"
                aria-label={`See all our events — ${featured.title}`}
                className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden bg-pink-soft md:ml-auto">
                  <Image
                    src={featured.image}
                    alt={featured.alt ?? `Flyer for ${featured.title}`}
                    fill
                    sizes="(max-width: 768px) 92vw, 384px"
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>
          </Container>
        </section>
      ) : null}

      {/* ===== Impact ===== */}
      <section aria-labelledby="impact-heading" className="bg-brand-deep py-16 text-[#FDF4F2]">
        <Container>
          <h2 id="impact-heading" className="sr-only">
            What we have done so far
          </h2>
          <dl className="grid gap-x-12 gap-y-10 md:grid-cols-[auto_1fr] md:items-end">
            {lead ? (
              <div>
                <dd className="font-display text-7xl leading-none font-semibold text-pink sm:text-8xl">
                  {lead.value}
                </dd>
                <dt className="mt-3 text-lg text-[#F0D5D9]">{lead.label.toLowerCase()}</dt>
              </div>
            ) : null}
            <div className="grid grid-cols-2 gap-x-8 sm:grid-cols-3">
              {rest.map((stat) => (
                <div key={stat.label} className="border-t border-white/25 py-3">
                  <dd className="font-display text-2xl font-semibold text-[#FDF4F2]">
                    {stat.value}
                  </dd>
                  <dt className="text-sm text-[#F0D5D9]">{stat.label.toLowerCase()}</dt>
                </div>
              ))}
            </div>
          </dl>
        </Container>
      </section>

      {/* ===== Two photos, as on projectpatho.org ===== */}
      <section aria-labelledby="community-heading" className="py-14">
        <Container>
          <h2 id="community-heading" className="sr-only">
            ProjectPatho out in the community
          </h2>
          <PhotoStrip columns={2} photos={communityPhotos} />
        </Container>
      </section>

      {/* ===== Index ===== */}
      <section aria-labelledby="explore-heading" className="border-t border-border pt-10 pb-24">
        <Container>
          <h2 id="explore-heading" className="font-display text-xl font-semibold text-ink">
            Elsewhere on this site
          </h2>
          <ol className="mt-6">
            {pathways.map((p, i) => (
              <li key={p.href} className="border-t border-border">
                <Link
                  href={p.href}
                  className="group grid grid-cols-[2.5rem_1fr] items-baseline gap-x-4 py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:grid-cols-[3rem_14rem_1fr]"
                >
                  <span
                    aria-hidden="true"
                    className="font-display text-sm text-brand tabular-nums"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-ink group-hover:text-brand sm:text-xl">
                    {p.label}
                  </h3>
                  <p className="col-start-2 mt-1 leading-relaxed text-ink-soft sm:col-start-3 sm:mt-0">
                    {p.desc}
                  </p>
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
};

export default HomePage;

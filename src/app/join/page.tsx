import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  HeartHandshake,
  Mic,
  PenTool,
  Share2,
  type LucideIcon,
} from "lucide-react";
import { site } from "@/lib/site";
import { getStats } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { Cell } from "@/components/organic/cell";
import { PhotoFrame } from "@/components/organic/photo-frame";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export const metadata = pageMeta({
  title: "Join Us",
  description:
    "Volunteer with ProjectPatho. Run workshops, make care packages, write cards for hospitalized kids, spread awareness, or help with the PathoTalks podcast — there's a place for every student.",
  path: "/join",
});

type Way = {
  icon: LucideIcon;
  title: string;
  blurb: string;
  color: "brand" | "moss" | "marigold" | "clay" | "marigold-soft";
};

const WAYS: Way[] = [
  {
    icon: Calendar,
    title: "Run events & workshops",
    blurb:
      "Help plan and lead hands-on sessions that make diseases and disorders make sense to younger kids — from setup to the final high-five.",
    color: "brand",
  },
  {
    icon: HeartHandshake,
    title: "Make care packages",
    blurb:
      "Assemble thoughtful bundles of comfort and encouragement for kids and families facing tough diagnoses.",
    color: "moss",
  },
  {
    icon: PenTool,
    title: "Cards for Hospitalized Kids",
    blurb:
      "Design and write cheerful, handmade cards that brighten the day of children spending time in the hospital.",
    color: "marigold",
  },
  {
    icon: Share2,
    title: "Spread awareness",
    blurb:
      "Share our posts, reels, and stories on social media to reduce stigma and reach families who need clear, kind information.",
    color: "clay",
  },
  {
    icon: Mic,
    title: "PathoTalks podcast",
    blurb:
      "Research topics, interview guests, or help edit episodes of our podcast that unpacks the science of pathology for everyone.",
    color: "marigold-soft",
  },
  {
    icon: BookOpen,
    title: "Make info posters",
    blurb:
      "Turn complicated conditions into friendly, accurate posters and resources that teachers and families can actually use.",
    color: "moss",
  },
];

const embedSrc = site.interestForm.replace("/viewform", "/viewform?embedded=true");

const JoinPage = (): React.ReactElement => {
  const stats = getStats();

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
            className="absolute -top-24 -right-20 h-96 w-96"
          />
          <Cell
            color="brand"
            variant={2}
            animate="drift"
            opacity={0.1}
            className="absolute top-28 -left-24 h-72 w-72"
          />
        </div>

        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="font-display text-sm font-semibold tracking-wide text-brand-deep uppercase">
                Get involved
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-3 font-display text-5xl leading-[1.03] font-semibold tracking-tight text-ink sm:text-6xl">
                Join ProjectPatho
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
                Whether you&apos;re a student who loves science or a volunteer who wants to make a
                difference, there&apos;s a place for you here. Help us teach kids about health,
                reduce stigma, and spark a little wonder along the way.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={site.interestForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
                >
                  Fill out our interest form
                  <ArrowRight aria-hidden="true" className="h-5 w-5" />
                </a>
                <Link
                  href="/contact"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
                >
                  Have a question?
                </Link>
              </div>
            </Reveal>
          </div>

          {stats.length > 0 && (
            <Reveal delay={320}>
              <ul className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat) => (
                  <li
                    key={stat.label}
                    className="rounded-3xl border border-border bg-surface px-4 py-6 text-center"
                  >
                    <span className="block font-display text-3xl font-semibold text-brand-deep sm:text-4xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-sm text-ink-soft">{stat.label}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </Container>
      </section>

      {/* ===== Photo band ===== */}
      <section className="pb-4">
        <Container>
          <Reveal>
            <div className="grid items-center gap-8 rounded-[2.5rem] bg-surface p-6 sm:grid-cols-2 sm:p-10">
              <div className="mx-auto w-full max-w-sm sm:max-w-none">
                <PhotoFrame
                  src="/images/classroom-workshop.webp"
                  alt="Young children working together on a colorful art and science activity at a classroom table"
                  shape={1}
                  sizes="(max-width: 768px) 80vw, 45vw"
                />
              </div>
              <div>
                <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                  Every volunteer makes a classroom brighter
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                  From library workshops to care-package drives, our volunteers turn big, scary
                  medical words into something kids can understand — and feel good about. You bring
                  the curiosity; we&apos;ll show you the rest.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ===== Ways to get involved ===== */}
      <section aria-labelledby="ways-heading" className="py-8 sm:py-12">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <h2
                id="ways-heading"
                className="font-display text-3xl font-semibold text-ink sm:text-4xl"
              >
                Ways to get involved
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-4 text-ink-soft">
                Pick what fits you best — every role helps a kid somewhere understand their body a
                little better.
              </p>
            </Reveal>
          </div>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WAYS.map((way, i) => {
              const Icon = way.icon;
              return (
                <Reveal as="li" key={way.title} delay={i * 60}>
                  <article className="group relative h-full overflow-hidden rounded-[2rem] border border-border bg-surface p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(60,40,20,0.28)]">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    >
                      <Cell color={way.color} variant={i % 3 === 0 ? 0 : i % 3 === 1 ? 1 : 2} opacity={0.16} />
                    </div>
                    <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-2 text-brand-deep">
                      <Icon aria-hidden="true" className="h-7 w-7" />
                    </span>
                    <h3 className="relative mt-5 font-display text-xl font-semibold text-ink">
                      {way.title}
                    </h3>
                    <p className="relative mt-2 text-sm leading-relaxed text-ink-soft">
                      {way.blurb}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* ===== Interest form CTA + embed ===== */}
      <section aria-labelledby="form-heading" className="py-16 sm:py-24">
        <Container size="narrow">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-moss-deep px-6 py-14 text-[#F3EAD7] sm:px-12">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0">
              <Cell
                color="marigold"
                variant={2}
                animate="breathe"
                opacity={0.14}
                className="absolute -top-16 -right-10 h-64 w-64"
              />
            </div>
            <div className="relative text-center">
              <h2 id="form-heading" className="font-display text-3xl font-semibold sm:text-4xl">
                Ready when you are
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[#E4D9BE]">
                Tell us a little about yourself and how you&apos;d like to help. We read every
                response and will reach out about upcoming projects.
              </p>
              <a
                href={site.interestForm}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "primary", size: "lg" }), "mt-8")}
              >
                Fill out our interest form
                <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-[2rem] border border-border bg-surface">
            <iframe
              src={embedSrc}
              title="ProjectPatho Interest Form"
              loading="lazy"
              width="100%"
              height={700}
              style={{ border: 0 }}
              className="block w-full"
            >
              Loading the interest form…
            </iframe>
          </div>
          <p className="mt-4 text-center text-sm text-ink-soft">
            Form not loading? Use the{" "}
            <a
              href={site.interestForm}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-deep underline underline-offset-2 hover:text-brand"
            >
              interest form link
            </a>{" "}
            instead, or{" "}
            <Link
              href="/contact"
              className="font-semibold text-brand-deep underline underline-offset-2 hover:text-brand"
            >
              contact us
            </Link>{" "}
            with any questions.
          </p>
        </Container>
      </section>
    </>
  );
};

export default JoinPage;

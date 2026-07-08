import type { Metadata } from "next";
import { Headphones, Play } from "lucide-react";
import { getEpisodes } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { Cell } from "@/components/organic/cell";
import { Reveal } from "@/components/motion/reveal";
import { EpisodeList } from "@/components/podcast/episode-list";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "PathoTalks Podcast",
  description:
    "PathoTalks is the ProjectPatho podcast — warm, honest conversations with real doctors and scientists about the work they do and the conditions they treat.",
};

const COMING_SOON = [
  "Colorectal surgeon",
  "Neurologist",
  "Therapist",
  "Dentist",
  "Neuroscientist",
  "Oncologist",
];

const PodcastPage = (): React.ReactElement => {
  const episodes = getEpisodes();
  const latest = episodes[0];

  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden pt-10 pb-12 sm:pt-16 sm:pb-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <Cell
            color="marigold-soft"
            variant={1}
            animate="drift-slow"
            opacity={0.5}
            className="absolute -top-24 -left-16 h-80 w-80"
          />
          <Cell
            color="brand"
            variant={2}
            animate="drift"
            opacity={0.1}
            className="absolute top-24 -right-20 h-72 w-72"
          />
        </div>

        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 font-display text-sm font-semibold tracking-wide text-brand-deep uppercase">
                <Headphones aria-hidden="true" className="h-4 w-4" />
                The ProjectPatho podcast
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-3 font-display text-5xl leading-[1.03] font-semibold tracking-tight text-ink sm:text-6xl">
                PathoTalks
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
                Welcome to PathoTalks — conversations with real doctors and scientists about the
                work they do. Every episode, our team sits down with a specialist to hear how they
                help people and what makes their field fascinating.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ===== Featured latest episode ===== */}
      {latest && (
        <section aria-labelledby="featured-heading" className="pb-14 sm:pb-20">
          <Container>
            <Reveal>
              <div className="relative overflow-hidden rounded-[2.5rem] bg-moss-deep px-6 py-10 text-[#F3EAD7] sm:px-10 sm:py-12">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0">
                  <Cell
                    color="marigold"
                    variant={0}
                    animate="breathe"
                    opacity={0.14}
                    className="absolute -top-20 -right-12 h-72 w-72"
                  />
                </div>
                <div className="relative flex flex-col items-center gap-7 sm:flex-row sm:items-center">
                  {/* Episode art placeholder */}
                  <div
                    aria-hidden="true"
                    className="relative flex h-40 w-40 shrink-0 items-center justify-center"
                  >
                    <Cell color="marigold" variant={2} animate="breathe" className="absolute inset-0" />
                    <span className="relative font-display text-5xl font-semibold text-moss-deep">
                      {latest.episode}
                    </span>
                  </div>
                  <div className="text-center sm:text-left">
                    <span className="font-display text-xs font-semibold tracking-wide text-marigold-soft uppercase">
                      Latest episode · Episode {latest.episode}
                    </span>
                    <h2
                      id="featured-heading"
                      className="mt-3 font-display text-2xl font-semibold sm:text-3xl"
                    >
                      {latest.title}
                    </h2>
                    {(latest.guest || latest.specialty) && (
                      <p className="mt-2 text-[#E4D9BE]">
                        {latest.guest}
                        {latest.guest && latest.specialty ? " — " : ""}
                        {latest.specialty}
                      </p>
                    )}
                    <p className="mt-3 max-w-xl text-[#E4D9BE]">{latest.summary}</p>
                    <a
                      href={latest.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(buttonVariants({ size: "md" }), "mt-6")}
                    >
                      <Play aria-hidden="true" className="h-5 w-5" />
                      Listen on Spotify
                      <span className="sr-only"> — {latest.title}</span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>
      )}

      {/* ===== All episodes ===== */}
      <section aria-labelledby="episodes-heading" className="pb-16 sm:pb-24">
        <Container>
          <Reveal>
            <h2
              id="episodes-heading"
              className="font-display text-3xl font-semibold text-ink sm:text-4xl"
            >
              All episodes
            </h2>
            <p className="mt-3 max-w-2xl text-base text-ink-soft">
              Ten conversations and counting. Pick a specialty that sparks your curiosity and press
              play.
            </p>
          </Reveal>
          <div className="mt-10">
            <EpisodeList episodes={episodes} />
          </div>
        </Container>
      </section>

      {/* ===== Coming soon ===== */}
      <section aria-labelledby="coming-soon-heading" className="pb-20 sm:pb-28">
        <Container>
          <Reveal>
            <div className="rounded-[2.5rem] border border-border bg-surface-2 px-6 py-10 sm:px-10 sm:py-12">
              <h2
                id="coming-soon-heading"
                className="font-display text-2xl font-semibold text-ink sm:text-3xl"
              >
                Coming soon to PathoTalks
              </h2>
              <p className="mt-3 max-w-2xl text-base text-ink-soft">
                We&apos;re recording new conversations with specialists across medicine and science.
                Here&apos;s a peek at who we&apos;re talking to next.
              </p>
              <ul className="mt-7 flex flex-wrap gap-3">
                {COMING_SOON.map((specialty) => (
                  <li key={specialty}>
                    <span className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-brand-deep">
                      {specialty}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
};

export default PodcastPage;

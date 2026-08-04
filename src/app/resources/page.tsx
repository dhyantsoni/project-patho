import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getPosters } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { Cell } from "@/components/organic/cell";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import { PosterGallery } from "@/components/resources/poster-gallery";

export const metadata = pageMeta({
  title: "Resources — Info Posters",
  description:
    "Friendly, accurate info posters that teach kids ages 7–11 about diseases and disorders — reducing stigma and growing empathy, one condition at a time.",
  path: "/resources",
});

const ResourcesPage = (): React.ReactElement => {
  const posters = getPosters();

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
            variant={1}
            animate="drift"
            opacity={0.12}
            className="absolute top-32 -left-24 h-72 w-72"
          />
        </div>

        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="font-display text-sm font-semibold tracking-wide text-brand-deep uppercase">
                Learn with us
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-3 font-display text-5xl leading-[1.03] font-semibold tracking-tight text-ink sm:text-6xl">
                Info Posters
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
                Our info posters are friendly, carefully-checked guides that help kids ages 7–11
                understand diseases and disorders. Each one turns a big medical topic into something
                clear and kind — so younger readers can trade fear and stigma for curiosity and
                empathy.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ===== Poster gallery ===== */}
      <section aria-labelledby="posters-heading" className="pb-8">
        <Container>
          <h2 id="posters-heading" className="sr-only">
            Browse info posters
          </h2>
          <PosterGallery posters={posters} />
          <Reveal>
            <p className="mt-8 text-center text-sm text-ink-soft">
              Every poster is researched, written, and illustrated by a Project Patho student.
              Select a poster to open it full size.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ===== Get involved CTA band ===== */}
      <section aria-labelledby="resources-cta-heading" className="py-16 sm:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-moss-deep px-6 py-14 text-center text-[#F3EAD7] sm:px-12">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0">
              <Cell
                color="marigold"
                variant={2}
                animate="breathe"
                opacity={0.14}
                className="absolute -top-16 -left-10 h-64 w-64"
              />
            </div>
            <div className="relative mx-auto max-w-xl">
              <h2
                id="resources-cta-heading"
                className="font-display text-3xl font-semibold sm:text-4xl"
              >
                Want to help make science kinder?
              </h2>
              <p className="mt-4 text-[#E4D9BE]">
                We&apos;re always looking for students to research, write, and illustrate the next
                poster. If you love making hard topics feel welcoming, there&apos;s a place for you.
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

export default ResourcesPage;

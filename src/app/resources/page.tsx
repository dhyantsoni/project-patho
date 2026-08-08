import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { getPosters } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
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
      <section className="py-16 sm:py-20">
        <Container>
          <p className="eyebrow">Learn with us</p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] font-semibold text-ink sm:text-6xl">
            Info Posters
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Our info posters are friendly, carefully-checked guides that help kids ages 7–11
            understand diseases and disorders. Each one turns a big medical topic into something
            clear and kind — so younger readers can trade fear and stigma for curiosity and empathy.
          </p>
        </Container>
      </section>

      {/* ===== Poster gallery ===== */}
      <section aria-labelledby="posters-heading" className="pb-16">
        <Container>
          <h2 id="posters-heading" className="sr-only">
            Browse info posters
          </h2>
          <PosterGallery posters={posters} />
          <p className="mt-12 max-w-2xl text-sm text-ink-soft">
            Every poster is researched, written, and illustrated by a ProjectPatho student. Select a
            poster to open it full size.
          </p>
        </Container>
      </section>

      {/* ===== CTA ===== */}
      <section aria-labelledby="resources-cta-heading" className="bg-brand-deep py-16 text-[#FDF4F2]">
        <Container>
          <div className="max-w-2xl">
            <h2
              id="resources-cta-heading"
              className="font-display text-3xl font-semibold sm:text-4xl"
            >
              Help make the next poster
            </h2>
            <p className="mt-4 text-[#F0D5D9]">
              We&apos;re always looking for students to research, write, and illustrate the next
              poster. If you love making hard topics feel welcoming, there&apos;s a place for you.
            </p>
            <Link
              href="/join"
              className={cn(buttonVariants({ variant: "onDark", size: "lg" }), "mt-8")}
            >
              Get involved
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ResourcesPage;

import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { getPosters } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PosterGallery } from "@/components/resources/poster-gallery";
import { PosterQuiz } from "@/components/resources/poster-quiz";

export const metadata = pageMeta({
  title: "Resources — Info Posters",
  description:
    "Info posters that teach kids ages 7–11 about diseases and disorders, written and illustrated by ProjectPatho students.",
  path: "/resources",
});

const ResourcesPage = (): React.ReactElement => {
  const posters = getPosters();
  const quizzes = posters.filter((p) => p.quiz.length > 0);

  return (
    <>
      {/* ===== Masthead ===== */}
      <section className="pt-8 pb-12">
        <Container>
          <h1 className="rule-heavy pt-5 font-display text-5xl leading-[1.05] font-semibold text-ink sm:text-6xl">
            Info Posters
          </h1>
          <p className="dateline mt-3 border-t border-border pt-3">
            <span>{posters.length} posters</span>
            <span>{quizzes.length} quizzes</span>
            <span>Written for ages 7–11</span>
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Our info posters are friendly, carefully-checked guides that help kids ages 7–11
            understand diseases and disorders. Each one turns a big medical topic into something
            clear and kind, so younger readers can trade fear and stigma for curiosity and empathy.
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

      {/* ===== Quizzes ===== */}
      {quizzes.length > 0 ? (
        <section id="quizzes" aria-labelledby="quizzes-heading" className="border-t border-border py-16">
          <Container>
            <h2
              id="quizzes-heading"
              className="font-display text-3xl font-semibold text-ink sm:text-4xl"
            >
              Quiz yourself
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">
              Read a poster, then check what you remember. Answers are marked on this page, nothing
              is sent anywhere, and you can retake a quiz as many times as you like.
            </p>

            <ul className="mt-12 space-y-16">
              {quizzes.map((poster) => (
                <li
                  key={poster.slug}
                  id={`quiz-${poster.slug}`}
                  className="scroll-mt-20 border-t border-border pt-8"
                >
                  <h3 className="font-display text-2xl font-semibold text-ink">{poster.title}</h3>
                  {poster.credit ? (
                    <p className="mt-1 text-sm text-ink-soft">Quiz by {poster.credit}</p>
                  ) : null}
                  <div className="mt-6 max-w-2xl">
                    <PosterQuiz questions={poster.quiz} title={poster.title} />
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {/* ===== CTA ===== */}
      <section aria-labelledby="resources-cta-heading" className="bg-brand-deep py-16 text-[#FDF4F2]">
        <Container>
          <div className="max-w-2xl">
            <h2
              id="resources-cta-heading"
              className="font-display text-3xl font-semibold sm:text-4xl"
            >
              Want to help?
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

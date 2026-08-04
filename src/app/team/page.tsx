import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getTeam } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { Cell } from "@/components/organic/cell";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import { TeamGrid } from "@/components/team/team-grid";

export const metadata = pageMeta({
  title: "Meet the Team",
  description:
    "Meet the student leaders behind ProjectPatho — the young people making science warm, honest, and welcoming for kids everywhere.",
  path: "/team",
});

/** Interns are credited by name and school; they don't have bios or headshots. */
const INTERNS = [
  { name: "Jisha Jain", role: "Media Intern", school: "Canyon Crest Academy" },
  { name: "Azita Newman", role: "Podcast Intern", school: "Del Norte High School" },
  { name: "Vedika Gurushankar", role: "Event Intern", school: "Scripps Ranch High School" },
] as const;

const TeamPage = (): React.ReactElement => {
  const members = getTeam();

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
                Our people
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-3 font-display text-5xl leading-[1.03] font-semibold tracking-tight text-ink sm:text-6xl">
                Meet the Team
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
                ProjectPatho is built by students — curious, driven young people who believe science
                belongs to everyone. Meet the leaders behind the posters, the podcast, and every
                workshop we run.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ===== Team grid ===== */}
      <section aria-labelledby="team-heading" className="pb-8">
        <Container>
          <h2 id="team-heading" className="sr-only">
            Team members
          </h2>
          <TeamGrid members={members} />
        </Container>
      </section>

      {/* ===== Interns ===== */}
      <section aria-labelledby="interns-heading" className="pt-12">
        <Container>
          <Reveal>
            <div className="rounded-[2rem] border border-border bg-surface-2 px-6 py-8 sm:px-10">
              <h2 id="interns-heading" className="font-display text-2xl font-semibold text-ink">
                Our interns
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                {INTERNS.map((intern) => (
                  <li key={intern.name} className="leading-relaxed text-ink-soft">
                    <span className="font-semibold text-ink">{intern.name}</span>
                    <span className="block text-sm">
                      {intern.role} · {intern.school}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ===== Join CTA band ===== */}
      <section aria-labelledby="join-heading" className="py-16 sm:py-24">
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
            <div className="relative">
              <h2 id="join-heading" className="font-display text-3xl font-semibold sm:text-4xl">
                Want to join the team?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[#E4D9BE]">
                We&apos;re always looking for curious students who want to help make science kinder
                and clearer for younger kids. There&apos;s a place for you here.
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

export default TeamPage;

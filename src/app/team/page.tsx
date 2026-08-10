import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { getTeam } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
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
  { name: "Azita Newman", role: "Podcast Intern", school: "Del Norte High School" },
  { name: "Vedika Gurushankar", role: "Event Intern", school: "Scripps Ranch High School" },
] as const;

const TeamPage = (): React.ReactElement => {
  const members = getTeam();

  return (
    <>
      {/* ===== Masthead ===== */}
      <section className="pt-8 pb-12">
        <Container>
          <h1 className="rule-heavy pt-5 font-display text-5xl leading-[1.05] font-semibold text-ink sm:text-6xl">
            The Team
          </h1>
          <p className="dateline mt-3 border-t border-border pt-3">
            <span>{members.length} officers</span>
            <span>{INTERNS.length} interns</span>
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
            ProjectPatho is built by students — curious, driven young people who believe science
            belongs to everyone. Meet the leaders behind the posters, the podcast, and every workshop
            we run.
          </p>
        </Container>
      </section>

      {/* ===== Team grid ===== */}
      <section aria-labelledby="team-heading" className="border-t border-border pt-12 pb-16">
        <Container>
          <h2 id="team-heading" className="sr-only">
            Team members
          </h2>
          <TeamGrid members={members} />
        </Container>
      </section>

      {/* ===== Interns ===== */}
      <section aria-labelledby="interns-heading" className="border-t border-border py-14">
        <Container>
          <h2 id="interns-heading" className="font-display text-2xl font-semibold text-ink">
            Our interns
          </h2>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INTERNS.map((intern) => (
              <li key={intern.name}>
                <span className="font-semibold text-ink">{intern.name}</span>
                <span className="mt-1 block text-sm text-ink-soft">
                  {intern.role} · {intern.school}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ===== Join CTA ===== */}
      <section aria-labelledby="join-heading" className="bg-brand-deep py-16 text-[#FDF4F2]">
        <Container>
          <div className="max-w-2xl">
            <h2 id="join-heading" className="font-display text-3xl font-semibold sm:text-4xl">
              Want to join the team?
            </h2>
            <p className="mt-4 text-[#F0D5D9]">
              We&apos;re always looking for curious students who want to help make science kinder and
              clearer for younger kids. There&apos;s a place for you here.
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

export default TeamPage;

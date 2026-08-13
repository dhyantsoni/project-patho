import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import {
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
import { Photo } from "@/components/media/photo";
import { cn } from "@/lib/utils";

export const metadata = pageMeta({
  title: "Join Us",
  description:
    "Volunteer with ProjectPatho. Run workshops, make care packages, write cards for hospitalized kids, spread awareness, or help with the PathoTalks podcast. There's a place for every student.",
  path: "/join",
});

const WAYS: { icon: LucideIcon; title: string; blurb: string }[] = [
  {
    icon: Calendar,
    title: "Run events & workshops",
    blurb:
      "Help plan and lead hands-on sessions that make diseases and disorders make sense to younger kids, from setup to the final high-five.",
  },
  {
    icon: HeartHandshake,
    title: "Make care packages",
    blurb:
      "Assemble thoughtful bundles of comfort and encouragement for kids and families facing tough diagnoses.",
  },
  {
    icon: PenTool,
    title: "Cards for Hospitalized Kids",
    blurb:
      "Design and write cheerful, handmade cards that brighten the day of children spending time in the hospital.",
  },
  {
    icon: Share2,
    title: "Spread awareness",
    blurb:
      "Share our posts, reels, and stories on social media to reduce stigma and reach families who need clear, kind information.",
  },
  {
    icon: Mic,
    title: "PathoTalks podcast",
    blurb:
      "Research topics, interview guests, or help edit episodes of our podcast that unpacks the science of pathology for everyone.",
  },
  {
    icon: BookOpen,
    title: "Make info posters",
    blurb:
      "Turn complicated conditions into friendly, accurate posters and resources that teachers and families can actually use.",
  },
];

const JoinPage = (): React.ReactElement => {
  const stats = getStats();

  return (
    <>
      {/* ===== Masthead ===== */}
      <section className="pt-8 pb-12">
        <Container>
          <h1 className="rule-heavy pt-5 font-display text-5xl leading-[1.05] font-semibold text-ink sm:text-6xl">
            Join us
          </h1>
          <p className="dateline mt-3 border-t border-border pt-3">
            <span>{WAYS.length} ways to help</span>
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Whether you&apos;re a student who loves science or a volunteer who wants to make a
            difference, there&apos;s a place for you here. Help us teach kids about health, reduce
            stigma, and spark a little wonder along the way.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={site.interestForm}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Fill out our interest form
            </a>
            <Link href="/contact" className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}>
              Have a question?
            </Link>
          </div>

          {stats.length > 0 && (
            <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="border-t border-border pt-4">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-3xl font-semibold text-brand sm:text-4xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-sm text-ink-soft">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </Container>
      </section>

      {/* ===== Photo + copy ===== */}
      <section className="border-t border-border py-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Photo
              src="/images/event-club-rush-02.webp"
              alt="ProjectPatho members behind their Club Rush table at Del Norte High School, talking with students who want to join"
            />
            <div>
              <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                What our volunteers do
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                From library workshops to care-package drives, our volunteers turn big, scary medical
                words into something kids can understand, and feel good about. You bring the
                curiosity; we&apos;ll show you the rest.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== Ways to get involved ===== */}
      <section aria-labelledby="ways-heading" className="border-t border-border py-16">
        <Container>
          <h2
            id="ways-heading"
            className="font-display text-4xl leading-tight font-semibold text-ink sm:text-5xl"
          >
            Ways to get involved
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft">
            Pick whichever fits you best. Every role helps a kid somewhere understand their body a
            little better.
          </p>

          <ul className="mt-10 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {WAYS.map((way) => {
              const Icon = way.icon;
              return (
                <li key={way.title} className="border-t border-border py-6">
                  {/* Pink line art in a maroon roundel, after the logo on our card. */}
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-deep">
                    <Icon aria-hidden="true" strokeWidth={1.5} className="h-6 w-6 text-pink" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">{way.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{way.blurb}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* ===== Interest form CTA ===== */}
      <section aria-labelledby="form-heading" className="bg-brand-deep py-16 text-[#FDF4F2]">
        <Container>
          <div className="max-w-2xl">
            <h2 id="form-heading" className="font-display text-3xl font-semibold sm:text-4xl">
              Sign up
            </h2>
            <p className="mt-4 text-[#F0D5D9]">
              Tell us a little about yourself and how you&apos;d like to help. We read every response
              and will reach out about upcoming projects.
            </p>
            <a
              href={site.interestForm}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "onDark", size: "lg" }), "mt-8")}
            >
              Fill out our interest form
            </a>
            <p className="mt-5 text-sm text-[#F0D5D9]">
              The form opens in a new tab. Prefer to ask first?{" "}
              <Link href="/contact" className="font-semibold text-pink underline underline-offset-4">
                Contact us
              </Link>{" "}
              with any questions.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default JoinPage;

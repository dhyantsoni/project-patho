import { pageMeta } from "@/lib/seo";
import { getEpisodes } from "@/lib/content";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { EpisodeList } from "@/components/podcast/episode-list";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = pageMeta({
  title: "PathoTalks Podcast",
  description:
    "PathoTalks is the ProjectPatho podcast — warm, honest conversations with real doctors and scientists about the work they do and the conditions they treat.",
  path: "/podcast",
});

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
      {/* ===== Masthead ===== */}
      <section className="pt-8 pb-12">
        <Container>
          <h1 className="rule-heavy pt-5 font-display text-5xl leading-[1.05] font-semibold text-ink sm:text-6xl">
            PathoTalks
          </h1>
          <p className="dateline mt-3 border-t border-border pt-3">
            <span>{episodes.length} episodes</span>
            <span>Interviewed and hosted by students</span>
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Conversations with real doctors and scientists about the work they do. Every episode, our
            team sits down with a specialist to hear how they help people and what makes their field
            fascinating.
          </p>
          {site.podcastShow ? (
            <a
              href={site.podcastShow}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants(), "mt-8")}
            >
              Follow PathoTalks on Spotify
            </a>
          ) : null}
        </Container>
      </section>

      {/* ===== Latest episode ===== */}
      {latest && (
        <section aria-labelledby="featured-heading" className="bg-brand-deep py-14 text-[#FDF4F2]">
          <Container>
            <h2
              id="featured-heading"
              className="max-w-3xl font-display text-3xl font-semibold sm:text-4xl"
            >
              {latest.title}
            </h2>
            <p className="mt-2 text-[#F0D5D9]">Episode {latest.episode}, out now</p>
            {(latest.guest || latest.specialty) && (
              <p className="mt-3 text-[#F0D5D9]">
                {latest.guest}
                {latest.guest && latest.specialty ? " — " : ""}
                {latest.specialty}
              </p>
            )}
            <p className="mt-4 max-w-2xl leading-relaxed text-[#F0D5D9]">{latest.summary}</p>
            {/* Newly-published episodes sit here before their Spotify link exists. */}
            {latest.link ? (
              <a
                href={latest.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "onDark" }), "mt-7")}
              >
                Listen on Spotify
                <span className="sr-only"> — {latest.title}</span>
              </a>
            ) : null}
          </Container>
        </section>
      )}

      {/* ===== All episodes ===== */}
      <section aria-labelledby="episodes-heading" className="py-16 sm:py-20">
        <Container>
          <h2 id="episodes-heading" className="font-display text-xl font-semibold text-ink">
            Every episode
          </h2>
          <div className="mt-8">
            <EpisodeList episodes={episodes} />
          </div>
        </Container>
      </section>

      {/* ===== Coming soon ===== */}
      <section aria-labelledby="coming-soon-heading" className="border-t border-border py-14">
        <Container>
          <h2 id="coming-soon-heading" className="font-display text-xl font-semibold text-ink">
            Who we&apos;re recording next
          </h2>
          <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-ink">
            {COMING_SOON.map((specialty) => (
              <li key={specialty}>{specialty}</li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
};

export default PodcastPage;

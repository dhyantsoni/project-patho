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
      {/* ===== Hero ===== */}
      <section className="py-16 sm:py-20">
        <Container>
          <p className="eyebrow">The ProjectPatho podcast</p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] font-semibold text-ink sm:text-6xl">
            PathoTalks
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
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
            <p className="text-xs font-semibold tracking-[0.14em] text-pink uppercase">
              Latest episode · {latest.episode}
            </p>
            <h2
              id="featured-heading"
              className="mt-4 max-w-3xl font-display text-3xl font-semibold sm:text-4xl"
            >
              {latest.title}
            </h2>
            {(latest.guest || latest.specialty) && (
              <p className="mt-3 text-[#F0D5D9]">
                {latest.guest}
                {latest.guest && latest.specialty ? " — " : ""}
                {latest.specialty}
              </p>
            )}
            <p className="mt-4 max-w-2xl leading-relaxed text-[#F0D5D9]">{latest.summary}</p>
            <a
              href={latest.link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "onDark" }), "mt-7")}
            >
              Listen on Spotify
              <span className="sr-only"> — {latest.title}</span>
            </a>
          </Container>
        </section>
      )}

      {/* ===== All episodes ===== */}
      <section aria-labelledby="episodes-heading" className="py-16 sm:py-20">
        <Container>
          <h2
            id="episodes-heading"
            className="font-display text-3xl font-semibold text-ink sm:text-4xl"
          >
            All episodes
          </h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            Pick a specialty that sparks your curiosity and press play.
          </p>
          <div className="mt-10">
            <EpisodeList episodes={episodes} />
          </div>
        </Container>
      </section>

      {/* ===== Coming soon ===== */}
      <section aria-labelledby="coming-soon-heading" className="border-t border-border py-14">
        <Container>
          <h2
            id="coming-soon-heading"
            className="font-display text-2xl font-semibold text-ink sm:text-3xl"
          >
            Coming soon to PathoTalks
          </h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            We&apos;re recording new conversations with specialists across medicine and science.
            Here&apos;s a peek at who we&apos;re talking to next.
          </p>
          <ul className="mt-7 flex flex-wrap gap-x-8 gap-y-2 text-ink">
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

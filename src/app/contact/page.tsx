import { pageMeta } from "@/lib/seo";
import { ArrowRight, Instagram, Mail } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { Cell } from "@/components/organic/cell";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export const metadata = pageMeta({
  title: "Contact",
  description:
    "Have a question for ProjectPatho? Reach us by email or on Instagram — we'd love to hear from students, teachers, and families.",
  path: "/contact",
});

const ContactPage = (): React.ReactElement => {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden pt-10 pb-14 sm:pt-16 sm:pb-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <Cell
            color="moss"
            variant={1}
            animate="drift-slow"
            opacity={0.14}
            className="absolute -top-24 -left-20 h-96 w-96"
          />
          <Cell
            color="marigold-soft"
            variant={0}
            animate="drift"
            opacity={0.5}
            className="absolute top-24 -right-24 h-72 w-72"
          />
        </div>

        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="font-display text-sm font-semibold tracking-wide text-brand-deep uppercase">
                Say hello
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-3 font-display text-5xl leading-[1.03] font-semibold tracking-tight text-ink sm:text-6xl">
                Any Questions?
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
                We&apos;re always happy to hear from students, teachers, and families. Whether
                you&apos;re curious about our work, want to collaborate, or just want to say hi,
                reach out any time.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ===== Contact cards ===== */}
      <section aria-labelledby="reach-heading" className="py-4 sm:py-8">
        <Container size="narrow">
          <h2 id="reach-heading" className="sr-only">
            Ways to reach us
          </h2>
          <ul className="grid gap-5 sm:grid-cols-2">
            <Reveal as="li">
              <a
                href={`mailto:${site.email}`}
                className="group relative flex h-full flex-col items-start gap-4 overflow-hidden rounded-[2rem] border border-border bg-surface p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(60,40,20,0.28)] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  <Cell color="brand" variant={0} opacity={0.16} />
                </div>
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-2 text-brand-deep">
                  <Mail aria-hidden="true" className="h-7 w-7" />
                </span>
                <span className="relative">
                  <span className="block font-display text-xl font-semibold text-ink">Email us</span>
                  <span className="mt-1 block break-all text-ink-soft">{site.email}</span>
                </span>
              </a>
            </Reveal>

            <Reveal as="li" delay={80}>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col items-start gap-4 overflow-hidden rounded-[2rem] border border-border bg-surface p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(60,40,20,0.28)] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  <Cell color="marigold" variant={1} opacity={0.16} />
                </div>
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-2 text-brand-deep">
                  <Instagram aria-hidden="true" className="h-7 w-7" />
                </span>
                <span className="relative">
                  <span className="block font-display text-xl font-semibold text-ink">
                    Follow on Instagram
                  </span>
                  <span className="mt-1 block text-ink-soft">{site.instagramHandle}</span>
                </span>
              </a>
            </Reveal>
          </ul>
        </Container>
      </section>

      {/* ===== Join CTA ===== */}
      <section aria-labelledby="join-cta-heading" className="py-12 sm:py-16">
        <Container size="narrow">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-moss-deep px-6 py-12 text-center text-[#F3EAD7] sm:px-12">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0">
              <Cell
                color="marigold"
                variant={2}
                animate="breathe"
                opacity={0.14}
                className="absolute -bottom-16 -left-10 h-64 w-64"
              />
            </div>
            <div className="relative">
              <h2 id="join-cta-heading" className="font-display text-2xl font-semibold sm:text-3xl">
                Want to get involved?
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-[#E4D9BE]">
                If you&apos;re a student or volunteer ready to help, our interest form is the fastest
                way to reach us.
              </p>
              <a
                href={site.interestForm}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "primary", size: "lg" }), "mt-6")}
              >
                Fill out our interest form
                <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== Fiscal sponsor note ===== */}
      <section aria-labelledby="partner-heading" className="pb-20 sm:pb-28">
        <Container size="narrow">
          <Reveal>
            <div className="rounded-[2rem] border border-border bg-surface-2 p-8 text-center">
              <h2
                id="partner-heading"
                className="font-display text-lg font-semibold text-brand-deep"
              >
                Our fiscal sponsor
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
                {site.fiscalSponsor.note} Learn more about our partner,{" "}
                <a
                  href={site.fiscalSponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-deep underline underline-offset-2 hover:text-brand"
                >
                  {site.fiscalSponsor.name}
                </a>
                .
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
};

export default ContactPage;

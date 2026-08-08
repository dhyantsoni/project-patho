import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = pageMeta({
  title: "Contact",
  description:
    "Have a question for ProjectPatho? Reach us by email or on Instagram — we'd love to hear from students, teachers, and families.",
  path: "/contact",
});

const ContactPage = (): React.ReactElement => (
  <>
    {/* ===== Hero ===== */}
    <section className="py-16 sm:py-20">
      <Container>
        <p className="eyebrow">Say hello</p>
        <h1 className="mt-5 font-display text-5xl leading-[1.05] font-semibold text-ink sm:text-6xl">
          Any questions?
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          We&apos;re always happy to hear from students, teachers, and families. Whether you&apos;re
          curious about our work, want to collaborate, or just want to say hi, reach out any time.
        </p>
      </Container>
    </section>

    {/* ===== Ways to reach us ===== */}
    <section aria-labelledby="reach-heading" className="pb-16">
      <Container>
        <h2 id="reach-heading" className="sr-only">
          Ways to reach us
        </h2>
        <dl className="grid gap-x-16 gap-y-8 sm:grid-cols-2">
          <div className="border-t border-border pt-5">
            <dt className="eyebrow">Email</dt>
            <dd className="mt-2">
              <a
                href={`mailto:${site.email}`}
                className="font-display text-xl font-semibold break-all text-brand underline-offset-4 hover:underline"
              >
                {site.email}
              </a>
            </dd>
          </div>
          <div className="border-t border-border pt-5">
            <dt className="eyebrow">Instagram</dt>
            <dd className="mt-2">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-xl font-semibold text-brand underline-offset-4 hover:underline"
              >
                {site.instagramHandle}
              </a>
            </dd>
          </div>
        </dl>
      </Container>
    </section>

    {/* ===== Join CTA ===== */}
    <section aria-labelledby="join-cta-heading" className="bg-brand-deep py-14 text-[#FDF4F2]">
      <Container>
        <div className="max-w-2xl">
          <h2 id="join-cta-heading" className="font-display text-3xl font-semibold sm:text-4xl">
            Want to get involved?
          </h2>
          <p className="mt-4 text-[#F0D5D9]">
            If you&apos;re a student or volunteer ready to help, our interest form is the fastest way
            to reach us.
          </p>
          <a
            href={site.interestForm}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "onDark", size: "lg" }), "mt-8")}
          >
            Fill out our interest form
          </a>
        </div>
      </Container>
    </section>

    {/* ===== Fiscal sponsor ===== */}
    <section aria-labelledby="partner-heading" className="py-14">
      <Container>
        <div className="max-w-2xl border-t border-border pt-6">
          <h2 id="partner-heading" className="eyebrow">
            Our fiscal sponsor
          </h2>
          <p className="mt-3 leading-relaxed text-ink-soft">
            {site.fiscalSponsor.note} Learn more about our partner,{" "}
            <a
              href={site.fiscalSponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand underline underline-offset-4"
            >
              {site.fiscalSponsor.name}
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  </>
);

export default ContactPage;

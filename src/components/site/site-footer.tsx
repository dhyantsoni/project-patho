import Link from "next/link";
import { Instagram, Mail } from "lucide-react";
import { nav, site } from "@/lib/site";

export const SiteFooter = (): React.ReactElement => {
  const year = 2026;
  return (
    <footer className="relative mt-24 overflow-hidden bg-moss-deep text-[#F3EAD7]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-semibold">
              Project<span className="text-marigold-soft">Patho</span>
            </p>
            <p className="mt-4 max-w-sm text-[0.98rem] leading-relaxed text-[#E4D9BE]">
              A student-led nonprofit teaching young learners about diseases and disorders — to
              reduce stigma, inspire empathy, and spark a love of science.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-marigold-soft"
                aria-label="ProjectPatho on Instagram"
              >
                <Instagram aria-hidden="true" className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-marigold-soft"
                aria-label={`Email ${site.name}`}
              >
                <Mail aria-hidden="true" className="h-5 w-5" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-display text-lg font-semibold text-marigold-soft">Explore</h2>
            <ul className="mt-4 space-y-2.5 text-[0.98rem]">
              {nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#E4D9BE] underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-marigold-soft"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-[#E4D9BE] underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-marigold-soft"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-lg font-semibold text-marigold-soft">Get in touch</h2>
            <ul className="mt-4 space-y-2.5 text-[0.98rem]">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-[#E4D9BE] underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-marigold-soft"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E4D9BE] underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-marigold-soft"
                >
                  {site.instagramHandle}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={site.fiscalSponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E4D9BE] underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-marigold-soft"
                >
                  {site.fiscalSponsor.name} ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-[#CDBF9E] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. {site.fiscalSponsor.note}
          </p>
        </div>
      </div>
    </footer>
  );
};

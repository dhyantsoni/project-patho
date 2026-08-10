import Link from "next/link";
import { nav, site } from "@/lib/site";

const linkClass =
  "text-[#F0D5D9] underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink";

export const SiteFooter = (): React.ReactElement => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-brand-deep text-[#FDF4F2]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-semibold">
              Project<span className="text-pink">Patho</span>
            </p>
            <p className="mt-4 max-w-sm leading-relaxed text-[#F0D5D9]">
              A student-led nonprofit that teaches elementary and middle school students about
              diseases and disorders.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-display text-lg font-semibold text-pink">Explore</h2>
            <ul className="mt-4 space-y-2.5">
              {nav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className={linkClass}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-lg font-semibold text-pink">Get in touch</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href={`mailto:${site.email}`} className={linkClass}>
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {site.instagramHandle}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={site.fiscalSponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {site.fiscalSponsor.name} ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t border-white/15 pt-6 text-sm text-[#E0C0C6]">
          © {year} {site.name}. {site.fiscalSponsor.note}
        </p>
      </div>
    </footer>
  );
};

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const SiteHeader = (): React.ReactElement => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change.
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll + close on Escape when the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href !== "/" && !href.startsWith("/#") && pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 shadow-[0_1px_0_var(--border)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8"
      >
        <Link
          href="/"
          className="group flex items-center gap-2.5 rounded-full focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <span className="relative flex h-9 w-9 items-center justify-center">
            <svg viewBox="-80 -80 160 160" aria-hidden="true" className="h-9 w-9 text-brand">
              <path
                d="M43.3,-56.8C55.1,-47.6,62.8,-33.3,66.3,-18C69.8,-2.7,69.1,13.6,62.4,26.9C55.7,40.2,43,50.5,28.9,57.3C14.8,64.1,-0.7,67.4,-16.9,64.6C-33.1,61.8,-50,52.9,-59.6,39.2C-69.2,25.5,-71.5,7,-68.1,-9.9C-64.7,-26.8,-55.6,-42.1,-42.8,-51.2C-30,-60.3,-15,-63.2,0.9,-64.4C16.8,-65.6,33.6,-66,43.3,-56.8Z"
                fill="currentColor"
              />
              <circle cx="-6" cy="-4" r="15" className="fill-marigold" />
            </svg>
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-ink">
            Project<span className="text-brand">Patho</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors hover:bg-surface-2 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ring",
                  isActive(link.href) ? "text-brand-deep" : "text-ink-soft hover:text-ink",
                )}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={site.interestForm}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "sm" }), "hidden sm:inline-flex")}
          >
            Get involved
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-surface-2 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ring lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-[4.5rem] z-40 bg-background/98 backdrop-blur-md lg:hidden"
        >
          <ul className="flex flex-col gap-1 px-5 py-6">
            {nav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-2xl px-4 py-3.5 font-display text-2xl font-medium text-ink hover:bg-surface-2 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-4">
              <a
                href={site.interestForm}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: "lg" }), "w-full")}
              >
                Get involved
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

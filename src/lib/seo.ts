import type { Metadata } from "next";
import { site } from "./site";

/**
 * Builds per-page metadata with a SELF-REFERENTIAL canonical and page-specific
 * Open Graph / Twitter tags. Without this, subpages would inherit the layout's
 * homepage canonical/og:url and be treated as duplicates of the homepage.
 *
 * `path` is the route (e.g. "/team"); it resolves against metadataBase.
 */
export const pageMeta = ({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata => {
  const ogTitle = `${title} · ${site.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: ogTitle,
      description,
      url: path,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: ["/og.png"],
    },
  };
};

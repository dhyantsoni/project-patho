import type { Metadata } from "next";
import { Fraunces, Epilogue } from "next/font/google";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { StructuredData } from "@/components/site/structured-data";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
});

const epilogue = Epilogue({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-epilogue",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Student-run nonprofit organization`,
    template: `%s · ${site.name}`,
  },
  description: site.mission,
  keywords: [
    "Project Patho",
    "science education for kids",
    "disease awareness",
    "pathology for kids",
    "nonprofit",
    "reduce stigma",
    "empathy",
    "health education",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — Student-run nonprofit organization`,
    description: site.mission,
    url: site.url,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${site.name}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Student-run nonprofit organization`,
    description: site.mission,
    images: ["/og.png"],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

const RootLayout = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  return (
    <html lang="en" className={`${fraunces.variable} ${epilogue.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <StructuredData />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
};

export default RootLayout;

import { site } from "@/lib/site";

/**
 * JSON-LD structured data for the organization + website. Helps search engines
 * and social platforms understand the nonprofit. Rendered once in the layout.
 */
export const StructuredData = (): React.ReactElement => {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["NGO", "EducationalOrganization"],
        "@id": `${site.url}/#organization`,
        name: site.name,
        alternateName: site.shortName,
        url: site.url,
        email: site.email,
        description: site.mission,
        sameAs: [site.instagram],
        slogan: "Understanding disease, one young mind at a time.",
        parentOrganization: {
          "@type": "NGO",
          name: site.fiscalSponsor.name,
          url: site.fiscalSponsor.url,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        publisher: { "@id": `${site.url}/#organization` },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

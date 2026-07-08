import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const sitemap = (): MetadataRoute.Sitemap => {
  const routes = ["", "/team", "/resources", "/events", "/podcast", "/join", "/contact"];
  return routes.map((route) => ({
    // Trailing slash to match the self-referential canonicals (trailingSlash: true).
    url: `${site.url}${route}/`,
    changeFrequency: route === "" || route === "/events" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
};

export default sitemap;

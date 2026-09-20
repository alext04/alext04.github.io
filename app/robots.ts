import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Nothing here is private, but the generated OG endpoint and the raw PDF
      // add nothing to search results and only dilute the single real page.
      disallow: ["/opengraph-image", "/resume.pdf"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

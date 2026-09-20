import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Single-page site, so the sitemap has one entry. It exists mainly so that
 * crawlers get an explicit lastmod and there is a canonical place to add
 * further routes (e.g. /writing) without touching robots.txt.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

/**
 * Site-level SEO configuration.
 *
 * `SITE_URL` must be absolute for metadataBase, canonical URLs, OG images, and
 * the sitemap to resolve correctly. Override it with NEXT_PUBLIC_SITE_URL when a
 * custom domain is attached — no code change required.
 *
 * Resolve any host migration with a single redirect rather than removing the
 * old deployment, so existing links and resumes in circulation keep working.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://alext04-github-io.vercel.app"
).replace(/\/$/, "");

export const SITE_NAME = "Alex Thuruthel";

export const SITE_DESCRIPTION =
  "Software Engineer at Bridgera building backend systems and AI infrastructure — event-driven orchestration on AWS, multi-tenant data modelling, and validated structured extraction.";

/** Keywords kept deliberately narrow; broad keyword lists add noise, not rank. */
export const SITE_KEYWORDS = [
  "Alex Thuruthel",
  "Software Engineer",
  "Backend Engineer",
  "Distributed Systems",
  "AI Infrastructure",
  "AWS",
  "FastAPI",
  "IIIT Hyderabad",
];

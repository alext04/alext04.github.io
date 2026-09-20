/**
 * Domain types for the portfolio content layer.
 *
 * These describe the *shape* of the data only. All actual content lives in
 * `content/profile.ts`, which is the single source of truth for the site.
 * Keeping the two separate means a resume sync is a content edit, never a
 * component edit.
 */

/** A named link to an external profile or resource. */
export interface ProfileLink {
  /** Human-readable label, also used as the accessible name for icon-only links. */
  label: string;
  href: string;
  /** When false the link opens in the same tab (e.g. mailto:, tel:). */
  external?: boolean;
}

/** Contact details, split so the public page can omit anything sensitive. */
export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  links: ProfileLink[];
}

/** Top-level identity and positioning copy used by the hero and metadata. */
export interface Profile {
  name: string;
  /** Short role label, e.g. "Software Engineer". */
  role: string;
  /** Where the person works and studied — the one-line identity summary. */
  currently: string;
  /** One-line positioning statement used as the <title> and OG description. */
  headline: string;
  /** Hero sub-headline, rendered as the large accent heading. */
  tagline: string;
  /** Hero supporting paragraph. Deliberately short. */
  summary: string;
  /** Longer-form prose for the About section, one string per paragraph. */
  about: string[];
  /** Path to the downloadable resume, served from /public. */
  resumePath: string;
  contact: ContactInfo;
}

/** A single role in the Experience section. */
export interface Experience {
  company: string;
  title: string;
  location: string;
  /** Display string, e.g. "Jul 2026 – Present". Avoids Date parsing entirely. */
  period: string;
  /** Used for <time> semantics; must be YYYY-MM. */
  startDate: string;
  /** Omit for current roles. Must be YYYY-MM. */
  endDate?: string;
  /** Impact-led bullet points. Keep these verbatim from the resume. */
  highlights: string[];
  /** Technologies emphasised in this role, rendered as inline tags. */
  stack: string[];
}

/**
 * A project card.
 *
 * Research work and built projects share one card type so they can live in a
 * single section: a research item is simply a project whose `kind` is
 * "research", which brings `field`, `problem`, `approach`, and `reportUrl`
 * into play and renders it with a badge and a report link.
 */
export interface Project {
  title: string;
  /** One-line summary. Kept short — this is the card's lede. */
  summary: string;
  /** Optional longer note for built work. */
  description?: string;
  /** "research" adds the research badge and report affordances. */
  kind: "project" | "research";
  /** Display string, e.g. "Mar 2025 – Apr 2025". */
  period: string;
  tech: string[];
  /** Research only: the field of study shown under the title. */
  field?: string;
  /** Research only: open question the work addresses. */
  problem?: string;
  /** Research only: what was actually built or modelled. */
  approach?: string[];
  /** Research only: link to a public write-up or report. */
  reportUrl?: string;
  /** Optional source link; omit when there is no public repository. */
  repo?: string;
}

/** A single grouping of skills, e.g. "Languages" or "Cloud & AI". */
export interface SkillGroup {
  label: string;
  /** Short explanation of how these are applied, shown under the label. */
  note: string;
  skills: string[];
}

/** A formal education entry. */
export interface Education {
  institution: string;
  location: string;
  credential: string;
  period: string;
  startDate: string;
  endDate: string;
  details: string[];
}

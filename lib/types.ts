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
  /** One-line positioning statement used as the <title> and OG description. */
  headline: string;
  /** Hero sub-headline, rendered as the large secondary heading. */
  tagline: string;
  /** Hero supporting paragraph. */
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
  /** Used for <time> semantics and JSON-LD; must be YYYY-MM. */
  startDate: string;
  /** Omit for current roles. Must be YYYY-MM. */
  endDate?: string;
  /** Impact-led bullet points. Keep these verbatim from the resume. */
  highlights: string[];
  /** Technologies emphasised in this role, rendered as inline tags. */
  stack: string[];
}

/** A research project or investigation, rendered in the Research section. */
export interface ResearchItem {
  title: string;
  /** Field of study, e.g. "Game Theory · Mechanism Design". */
  field: string;
  status: "Ongoing" | "Completed";
  /** Free-text period label. */
  period: string;
  /** What problem the work addresses. */
  problem: string;
  /** What was actually built or modelled. */
  approach: string[];
  /** Methods and tooling, rendered as tags. */
  techniques: string[];
}

/** A project, rendered either as a flagship card or an archive row. */
export interface Project {
  title: string;
  /** One-line summary shown in the archive list. */
  summary: string;
  /** Longer impact-led description shown on flagship cards. */
  description: string;
  /**
   * Featured projects render as full-width cards with full descriptions.
   * Non-featured projects collapse into the compact archive list.
   */
  featured: boolean;
  period: string;
  tech: string[];
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

/** An award or honour worth surfacing alongside education. */
export interface Award {
  title: string;
  issuer: string;
  year: string;
}

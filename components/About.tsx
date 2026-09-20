import Section from "@/components/Section";
import Reveal from "@/components/motion/Reveal";
import { profile, sectionIndex } from "@/content/profile";

/**
 * Compact facts rendered alongside the prose.
 *
 * Kept deliberately plain — where he works and where he studied, nothing more
 * specific. No duplication of the hero pill: that one leads with the role, this
 * one with the employer.
 */
const FACTS = [
  { label: "Work", value: "Software Engineer at Bridgera" },
  { label: "Education", value: "B.Tech CSE, IIIT Hyderabad" },
  { label: "Based in", value: profile.contact.location },
] as const;

export default function About() {
  return (
    <Section id="about" index={sectionIndex("about")} title="About">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="space-y-5 md:col-span-3">
          {profile.about.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.06} from="none">
              <p className="text-[0.95rem] leading-relaxed text-ink-muted">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} from="right" className="md:col-span-2">
          <dl className="space-y-4 rounded-card border border-line bg-surface/60 p-6">
            {FACTS.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-[0.7rem] uppercase tracking-wider text-ink-subtle">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}

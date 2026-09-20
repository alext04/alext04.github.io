import Section from "@/components/Section";
import Reveal from "@/components/motion/Reveal";
import { sectionIndex, skillGroups } from "@/content/profile";

/**
 * Skills.
 *
 * Grouping now mirrors the resume exactly (Languages / Backend & Data /
 * Cloud & AI). The previous version listed Django, TensorFlow, Flutter, and
 * Dart, none of which the resume claims — a mismatch that is easy for an
 * interviewer to catch and expensive to be asked about.
 */
export default function Skills() {
  return (
    <Section
      id="skills"
      index={sectionIndex("skills")}
      title="Skills"
      wide
      description="Technologies I use in production, grouped by where they sit in the stack."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.label} delay={index * 0.07}>
            <div className="h-full rounded-card border border-line bg-surface/60 p-6">
              <h3 className="text-sm font-semibold text-ink">{group.label}</h3>
              <p className="mt-1 text-xs text-ink-subtle">{group.note}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded border border-line bg-surface-raised px-2.5 py-1.5 text-xs text-ink-muted transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

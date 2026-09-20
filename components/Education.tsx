import { FaTrophy } from "react-icons/fa";
import Section from "@/components/Section";
import Reveal from "@/components/motion/Reveal";
import { awards, education, sectionIndex } from "@/content/profile";
import { splitPeriod } from "@/lib/dates";

export default function Education() {
  return (
    <Section
      id="education"
      index={sectionIndex("education")}
      title="Education"
      description="Formal background, plus the recognition worth mentioning."
    >
      <ol className="space-y-8">
        {education.map((entry, index) => {
          const { start, end } = splitPeriod(entry.period);
          return (
            <Reveal as="li" key={entry.institution} delay={index * 0.07}>
              <article className="rounded-card border border-line bg-surface/60 p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="text-base font-semibold text-ink">
                    {entry.institution}
                  </h3>
                  <p className="font-mono text-xs text-ink-subtle">
                    <time dateTime={entry.startDate}>{start}</time>
                    {end ? (
                      <>
                        <span aria-hidden="true"> – </span>
                        <span className="sr-only">to</span>
                        <time dateTime={entry.endDate}>{end}</time>
                      </>
                    ) : null}
                  </p>
                </div>

                <p className="mt-1.5 text-sm text-accent">{entry.credential}</p>
                <p className="mt-0.5 text-xs text-ink-subtle">{entry.location}</p>

                {entry.details.length > 0 ? (
                  <ul className="mt-4 space-y-1.5">
                    {entry.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex gap-2.5 text-sm text-ink-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="select-none text-accent/70"
                        >
                          ▹
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            </Reveal>
          );
        })}
      </ol>

      {awards.length > 0 ? (
        <div className="mt-12">
          <Reveal from="none">
            <h3 className="mb-5 font-mono text-xs uppercase tracking-wider text-ink-subtle">
              Awards
            </h3>
          </Reveal>

          <ul className="space-y-3">
            {awards.map((award, index) => (
              <Reveal
                as="li"
                key={award.title}
                delay={index * 0.06}
                from="left"
                className="flex items-start gap-3 rounded-card border border-line bg-surface/60 p-4"
              >
                <FaTrophy
                  size={14}
                  aria-hidden
                  className="mt-0.5 shrink-0 text-accent"
                />
                <div>
                  <p className="text-sm font-medium text-ink">{award.title}</p>
                  <p className="mt-0.5 text-xs text-ink-subtle">
                    {award.issuer} · {award.year}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      ) : null}
    </Section>
  );
}

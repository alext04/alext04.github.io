import Section from "@/components/Section";
import Reveal from "@/components/motion/Reveal";
import { experiences, sectionIndex } from "@/content/profile";
import { splitPeriod } from "@/lib/dates";

/**
 * Renders "Jul 2026 – Present" as a pair of <time> elements, using the
 * machine-readable YYYY-MM values from the content layer for the datetime
 * attributes.
 */
function DateRange({
  period,
  startDate,
  endDate,
}: {
  period: string;
  startDate: string;
  endDate?: string;
}) {
  const { start, end } = splitPeriod(period);

  return (
    <p className="mt-1 font-mono text-xs text-ink-subtle">
      <time dateTime={startDate}>{start}</time>
      <span aria-hidden="true"> – </span>
      <span className="sr-only">to</span>
      {endDate ? (
        <time dateTime={endDate}>{end ?? period}</time>
      ) : (
        <span className="text-emerald-400">Present</span>
      )}
    </p>
  );
}

export default function Experience() {
  return (
    <Section
      id="experience"
      index={sectionIndex("experience")}
      title="Experience"
      wide
    >
      <ol className="space-y-12">
        {experiences.map((job, index) => {
          const isCurrent = job.endDate === undefined;

          return (
            <Reveal
              as="li"
              key={`${job.company}-${job.startDate}`}
              delay={index * 0.06}
            >
              <article className="grid gap-6 md:grid-cols-12">
                {/* Left rail: company, dates, location */}
                <div className="md:col-span-4">
                  <h3 className="text-lg font-semibold text-ink">{job.company}</h3>
                  <DateRange
                    period={job.period}
                    startDate={job.startDate}
                    endDate={job.endDate}
                  />
                  <p className="mt-1 text-xs text-ink-subtle">{job.location}</p>
                </div>

                {/* Right rail: role detail on a timeline thread */}
                <div className="relative md:col-span-8 md:border-l md:border-line md:pl-6">
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[4.5px] top-2 hidden h-2 w-2 rounded-full md:block ${
                      isCurrent ? "bg-accent" : "bg-line-strong"
                    }`}
                  />
                  <h4 className="font-medium text-accent">{job.title}</h4>

                  <ul className="mt-4 space-y-3">
                    {job.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm leading-relaxed text-ink-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="select-none text-accent/70"
                        >
                          ▹
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {job.stack.length > 0 ? (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {job.stack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded border border-line bg-surface px-2 py-1 font-mono text-[0.7rem] text-ink-muted"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}

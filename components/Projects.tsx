import { FaFlask, FaRegFilePdf } from "react-icons/fa";
import Section from "@/components/Section";
import Reveal from "@/components/motion/Reveal";
import { projects, sectionIndex } from "@/content/profile";

/**
 * Projects.
 *
 * Every entry gets its own card. Research work lives here too rather than in a
 * separate section — a research entry is a project with `kind: "research"`,
 * which adds the badge, the field label, the problem/approach blocks, and a
 * link to the published report. One card type, one grid, one section.
 *
 * Built work shows `description` (the fuller note); research shows `summary`
 * plus its problem/approach blocks. The two branches are deliberate: a research
 * card has more to say and needs the extra structure.
 */
export default function Projects() {
  return (
    <Section
      id="projects"
      index={sectionIndex("projects")}
      title="Projects"
      wide
    >
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => {
          const isResearch = project.kind === "research";

          return (
            <Reveal as="li" key={project.title} delay={index * 0.05}>
              <article
                className={`flex h-full flex-col rounded-card border bg-surface/60 p-6 transition-colors ${
                  isResearch
                    ? "border-accent/25 hover:border-accent/50"
                    : "border-line hover:border-line-strong"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base font-semibold leading-snug text-ink">
                    {project.title}
                  </h3>
                  <span className="shrink-0 font-mono text-[0.7rem] text-ink-subtle">
                    {project.period}
                  </span>
                </div>

                {isResearch ? (
                  <p className="mt-2 flex items-center gap-2 font-mono text-[0.7rem] text-accent">
                    <FaFlask size={11} aria-hidden />
                    {project.field}
                  </p>
                ) : null}

                {isResearch ? (
                  <>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {project.summary}
                    </p>

                    {project.problem ? (
                      <div className="mt-4">
                        <h4 className="font-mono text-[0.68rem] uppercase tracking-wider text-ink-subtle">
                          Problem
                        </h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                          {project.problem}
                        </p>
                      </div>
                    ) : null}

                    {project.approach ? (
                      <div className="mt-4">
                        <h4 className="font-mono text-[0.68rem] uppercase tracking-wider text-ink-subtle">
                          Approach
                        </h4>
                        <ul className="mt-1.5 space-y-2">
                          {project.approach.map((line, i) => (
                            <li
                              key={i}
                              className="flex gap-2.5 text-sm leading-relaxed text-ink-muted"
                            >
                              <span
                                aria-hidden="true"
                                className="select-none text-accent/70"
                              >
                                ▹
                              </span>
                              <span>{line}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </>
                ) : (
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {project.description ?? project.summary}
                  </p>
                )}

                {project.reportUrl ? (
                  <a
                    href={project.reportUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-fit items-center gap-2 rounded border border-accent/50 px-3 py-1.5 font-mono text-[0.7rem] text-accent transition-colors hover:bg-accent-dim"
                  >
                    <FaRegFilePdf size={11} aria-hidden />
                    Final report
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ) : null}

                <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded bg-accent-dim px-2 py-1 font-mono text-[0.7rem] text-accent"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}

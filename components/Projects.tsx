import Section from "@/components/Section";
import Reveal from "@/components/motion/Reveal";
import { projects, sectionIndex } from "@/content/profile";

/**
 * Projects, split into flagship work and an archive.
 *
 * Previously all nine projects rendered as identical cards, which gave a
 * three-month-old coursework project the same visual weight as a production
 * financial platform — a reader had no way to tell what the author considered
 * their best work. Flagship projects now get full descriptions; the rest are a
 * scannable list.
 */
export default function Projects() {
  const flagship = projects.filter((project) => project.featured);
  const archive = projects.filter((project) => !project.featured);

  return (
    <Section
      id="projects"
      index={sectionIndex("projects")}
      title="Projects"
      wide
      description="Selected builds across backend platforms, developer tooling, and systems programming."
    >
      {/* Flagship */}
      <ul className="grid gap-6 lg:grid-cols-2">
        {flagship.map((project, index) => (
          <Reveal
            as="li"
            key={project.title}
            delay={index * 0.07}
            // Let the first card span both columns as the lead item.
            className={index === 0 ? "lg:col-span-2" : undefined}
          >
            <article className="group flex h-full flex-col rounded-card border border-line bg-surface/60 p-6 transition-colors hover:border-accent/40 sm:p-7">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold text-ink sm:text-xl">
                  {project.title}
                </h3>
                <span className="shrink-0 font-mono text-[0.7rem] text-ink-subtle">
                  {project.period}
                </span>
              </div>

              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted">
                {project.description}
              </p>

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
        ))}
      </ul>

      {/* Archive */}
      <div className="mt-14">
        <Reveal from="none">
          <h3 className="mb-5 font-mono text-xs uppercase tracking-wider text-ink-subtle">
            Also built
          </h3>
        </Reveal>

        <ul className="divide-y divide-line/70 border-y border-line/70">
          {archive.map((project, index) => (
            <Reveal as="li" key={project.title} delay={index * 0.04} from="left">
              <div className="flex flex-col gap-2 py-4 sm:flex-row sm:items-baseline sm:gap-6">
                <h4 className="shrink-0 text-sm font-medium text-ink sm:w-56">
                  {project.title}
                </h4>
                <p className="flex-grow text-sm leading-relaxed text-ink-muted">
                  {project.summary}
                </p>
                <span className="shrink-0 font-mono text-[0.7rem] text-ink-subtle">
                  {project.period}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}

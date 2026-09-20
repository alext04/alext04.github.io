import { FaFlask } from "react-icons/fa";
import Section from "@/components/Section";
import Reveal from "@/components/motion/Reveal";
import { research, sectionIndex } from "@/content/profile";

/**
 * Research section.
 *
 * Two projects on the resume are genuinely research work rather than product
 * work, and were previously buried in a nine-card project grid where their
 * framing (problem → approach → method) was flattened into a one-line blurb.
 * They get their own section with the structure that work deserves.
 */
export default function Research() {
  return (
    <Section
      id="research"
      index={sectionIndex("research")}
      title="Research"
      wide
      description="Independent research in privacy-preserving distributed training and the mechanism design of AI financial advice."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {research.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <article className="flex h-full flex-col rounded-card border border-line bg-surface/60 p-6 transition-colors hover:border-accent/40">
              <div className="mb-4 flex items-start justify-between gap-4">
                <span
                  aria-hidden="true"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded border border-accent/30 bg-accent-dim text-accent"
                >
                  <FaFlask size={14} />
                </span>
                <span
                  className={`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wide ${
                    item.status === "Ongoing"
                      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-400"
                      : "border-line-strong bg-surface-raised text-ink-subtle"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <h3 className="text-lg font-semibold leading-snug text-ink">
                {item.title}
              </h3>
              <p className="mt-1.5 font-mono text-[0.7rem] text-accent/80">
                {item.field}
              </p>
              <p className="mt-1 font-mono text-[0.7rem] text-ink-subtle">
                {item.period}
              </p>

              <div className="mt-5">
                <h4 className="font-mono text-[0.7rem] uppercase tracking-wider text-ink-subtle">
                  Problem
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {item.problem}
                </p>
              </div>

              <div className="mt-5">
                <h4 className="font-mono text-[0.7rem] uppercase tracking-wider text-ink-subtle">
                  Approach
                </h4>
                <ul className="mt-2 space-y-2.5">
                  {item.approach.map((line, i) => (
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

              <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                {item.techniques.map((technique) => (
                  <li
                    key={technique}
                    className="rounded bg-accent-dim px-2 py-1 font-mono text-[0.7rem] text-accent"
                  >
                    {technique}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

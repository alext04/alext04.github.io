import type { ReactNode } from "react";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/SectionHeading";

interface SectionProps {
  id: string;
  index: number;
  title: string;
  children: ReactNode;
  /** Widen the container for grid-heavy sections. */
  wide?: boolean;
}

/**
 * Layout shell shared by every section.
 *
 * Wraps content in a labelled <section> with a `<SectionHeading>` and a single
 * <Reveal>. Keeping this in one place is what let the per-section animation
 * boilerplate and repeated max-width/padding classes be deleted.
 */
export default function Section({
  id,
  index,
  title,
  children,
  wide = false,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-24 border-t border-line/60 px-6 py-20 sm:py-24"
    >
      <div className={`mx-auto w-full ${wide ? "max-w-6xl" : "max-w-4xl"}`}>
        <Reveal from="none">
          <div id={`${id}-heading`}>
            <SectionHeading index={index} title={title} />
          </div>
        </Reveal>
        <Reveal delay={0.05}>{children}</Reveal>
      </div>
    </section>
  );
}

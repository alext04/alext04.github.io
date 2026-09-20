import { FaArrowRight, FaFilePdf } from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";
import { linkIcons, ICON_SIZE } from "@/components/linkIcons";
import { profile } from "@/content/profile";

/**
 * Hero.
 *
 * Server Component: everything here is static markup. The only client code is
 * the <Reveal> wrappers and the `.bg-grid` CSS, so this above-the-fold section
 * ships essentially no JavaScript of its own.
 */
export default function Hero() {
  const currentRole = "Software Engineer @ Bridgera";

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 pb-16"
    >
      {/* Decorative backdrop, hidden from assistive tech. */}
      <div
        aria-hidden="true"
        className="bg-grid bg-grid-mask pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-4xl">
        <Reveal from="none">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1.5 font-mono text-xs text-ink-muted">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-emerald-400"
            />
            {currentRole}
          </p>
        </Reveal>

        <Reveal delay={0.05} from="none">
          <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-6xl">
            {profile.name}
          </h1>
        </Reveal>

        <Reveal delay={0.1} from="none">
          <p className="mt-4 text-2xl font-semibold tracking-tight text-accent sm:text-4xl">
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.15} from="none">
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {profile.summary}
          </p>
        </Reveal>

        <Reveal delay={0.2} from="none">
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={profile.resumePath}
              className="inline-flex items-center gap-2 rounded bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-soft"
            >
              <FaFilePdf size={15} aria-hidden />
              Download Resume
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded border border-line-strong px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent/60 hover:text-accent"
            >
              Get in touch
              <FaArrowRight
                size={13}
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>

            <ul className="ml-1 flex items-center gap-1">
              {profile.contact.links.map((link) => {
                const Icon = linkIcons[link.label];
                if (!Icon) return null;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      aria-label={
                        link.external
                          ? `${link.label} (opens in a new tab)`
                          : link.label
                      }
                      className="grid h-11 w-11 place-items-center rounded text-ink-subtle transition-colors hover:bg-surface hover:text-accent"
                    >
                      <Icon size={ICON_SIZE} aria-hidden />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FaBars, FaLinkedin, FaTimes } from "react-icons/fa";
import { profile, sections } from "@/content/profile";

const NAV_ITEMS = sections.filter((s) => s.id !== "contact");
const SECTION_IDS = sections.map((s) => s.id);

/**
 * Tracks which section is currently in view.
 *
 * Uses a single IntersectionObserver over all section elements rather than a
 * scroll listener that calls getBoundingClientRect on every frame. A band is
 * carved out of the middle of the viewport (rootMargin) so the active item
 * changes when a section genuinely owns the screen, not when it merely edges
 * into view — and the final section is forced active once the page is scrolled
 * to the bottom, which an observer alone cannot detect.
 */
function useActiveSection() {
  const [active, setActive] = useState<string>(SECTION_IDS[0] ?? "");

  useEffect(() => {
    const elements = SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio);
          } else {
            visible.delete(entry.target.id);
          }
        }

        if (visible.size > 0) {
          // Pick whichever visible section occupies the most of the band.
          const [topId] = [...visible.entries()].sort((a, b) => b[1] - a[1])[0];
          setActive(topId);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));

    const handleBottom = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) setActive(SECTION_IDS[SECTION_IDS.length - 1] ?? "");
    };

    window.addEventListener("scroll", handleBottom, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleBottom);
    };
  }, []);

  return active;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile sheet on Escape, and lock body scroll while it is open.
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen]);

  return (
    <nav
      aria-label="Primary"
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || isOpen
          ? "border-b border-line bg-canvas/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-ink"
        >
          <span className="grid h-7 w-7 place-items-center rounded border border-accent/40 bg-accent-dim text-xs text-accent">
            AT
          </span>
          <span className="hidden text-ink-muted transition-colors group-hover:text-ink sm:inline">
            alexthuruthel
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item, index) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`relative rounded px-3 py-2 font-mono text-xs transition-colors ${
                  isActive ? "text-accent" : "text-ink-muted hover:text-ink"
                }`}
              >
                <span className="mr-1.5 text-accent/70 tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.label}
                {isActive ? (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-px h-px bg-accent"
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 380, damping: 30 }
                    }
                  />
                ) : null}
              </a>
            );
          })}

          <a
            href={profile.resumePath}
            className="ml-3 rounded border border-accent/50 px-3 py-1.5 font-mono text-xs text-accent transition-colors hover:bg-accent-dim"
          >
            Resume
          </a>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <a
            href={profile.contact.links[1]?.href ?? "#contact"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in a new tab)"
            className="grid h-10 w-10 place-items-center rounded text-ink-muted transition-colors hover:text-accent"
          >
            <FaLinkedin size={18} aria-hidden />
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="grid h-10 w-10 place-items-center rounded text-ink-muted transition-colors hover:text-ink"
          >
            {isOpen ? <FaTimes size={20} aria-hidden /> : <FaBars size={20} aria-hidden />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="mobile-menu"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }
            }
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.22 }}
            className="overflow-hidden border-t border-line bg-canvas md:hidden"
          >
            <div className="space-y-1 px-6 py-4">
              {NAV_ITEMS.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  aria-current={active === item.id ? "true" : undefined}
                  className={`block rounded px-3 py-3 font-mono text-sm transition-colors ${
                    active === item.id
                      ? "bg-accent-dim text-accent"
                      : "text-ink-muted hover:bg-surface hover:text-ink"
                  }`}
                >
                  <span className="mr-2 text-accent/70 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </a>
              ))}
              <a
                href={profile.resumePath}
                onClick={() => setIsOpen(false)}
                className="mt-3 block rounded border border-accent/50 px-3 py-3 text-center font-mono text-sm text-accent"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}

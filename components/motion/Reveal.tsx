"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  /** Seconds to wait before animating. Use for simple stagger within a group. */
  delay?: number;
  className?: string;
  /** Direction the element travels in from. */
  from?: "bottom" | "left" | "right" | "none";
  /** Render as a list item / section where semantics require it. */
  as?: "div" | "li" | "section" | "article";
}

const OFFSET = 18;

/**
 * Scroll-reveal wrapper.
 *
 * Two deliberate constraints shape this implementation:
 *
 * 1. **Content must never depend on JavaScript.** The server-rendered HTML is
 *    fully visible; the hidden/animate cycle only begins after mount. If the JS
 *    bundle fails to load, or a visitor has JS disabled, the page renders as
 *    plain readable content rather than a series of blank sections. Starting
 *    from `opacity: 0` on the server would make everything below the hero
 *    invisible without JS.
 *
 * 2. **No flash of already-visible content.** `mounted` flips in a layout-free
 *    effect, and `whileInView` only attaches on the following frame, so the
 *    element is hidden and animated within the same frame.
 *
 * All motion state is *derived* during render rather than written back into an
 * effect, which keeps this to a single render pass per phase.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  from = "bottom",
  as = "div",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    // Subscribing to a one-shot frame is the external-system side effect; the
    // resulting state flips are the animation trigger, not derived data.
    const frame = requestAnimationFrame(() => {
      setMounted(true);
      setArmed(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  // Reduced motion, or not yet mounted: render plain, fully visible markup.
  // This branch is also what the server renders, so no-JS is covered.
  if (shouldReduceMotion || !mounted) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const offset =
    from === "none"
      ? { x: 0, y: 0 }
      : from === "left"
        ? { x: -OFFSET, y: 0 }
        : from === "right"
          ? { x: OFFSET, y: 0 }
          : { x: 0, y: OFFSET };

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      {...(armed
        ? { whileInView: "visible", viewport: { once: true, margin: "-60px" } }
        : {})}
    >
      {children}
    </MotionTag>
  );
}

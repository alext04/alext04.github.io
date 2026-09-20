"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Seconds to wait before animating. Use for simple stagger within a group. */
  delay?: number;
  className?: string;
  /** Direction the element travels in from. */
  from?: "bottom" | "left" | "right" | "none";
  /** Render as a list item / span instead of a div where semantics require it. */
  as?: "div" | "li" | "section" | "article";
}

const OFFSET = 18;

/**
 * Single shared scroll-reveal primitive.
 *
 * Previously every section duplicated its own
 * `initial / whileInView / viewport / transition` block — six copies that had
 * to be kept in sync by hand. They now all route through here.
 *
 * Honours the OS "reduce motion" setting by collapsing to a plain fade with no
 * travel, which motion's own `reducedMotion="user"` does not fully cover for
 * custom variants.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  from = "bottom",
  as = "div",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const offset =
    from === "none"
      ? { x: 0, y: 0 }
      : from === "left"
        ? { x: -OFFSET, y: 0 }
        : from === "right"
          ? { x: OFFSET, y: 0 }
          : { x: 0, y: OFFSET };

  const variants: Variants = {
    hidden: { opacity: 0, ...(shouldReduceMotion ? { x: 0, y: 0 } : offset) },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.001 : 0.5,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </MotionTag>
  );
}

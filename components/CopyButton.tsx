"use client";

import { useEffect, useRef, useState } from "react";
import { FaCheck, FaRegCopy } from "react-icons/fa";

/**
 * Copy-to-clipboard button with a transient confirmation state.
 *
 * Falls back to a hidden-textarea copy when the async Clipboard API is
 * unavailable, which is still the case on non-HTTPS origins and some in-app
 * browsers. The live region announces the result to screen readers, and the
 * timeout is cleared on unmount so it cannot fire against a stale component.
 */
export default function CopyButton({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const copy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = value;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access denied — the address is visible on screen regardless.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? `${label} copied to clipboard` : `Copy ${label}`}
      className="grid h-9 w-9 shrink-0 place-items-center rounded border border-line text-ink-subtle transition-colors hover:border-accent/50 hover:text-accent"
    >
      {copied ? (
        <FaCheck size={12} aria-hidden className="text-emerald-400" />
      ) : (
        <FaRegCopy size={12} aria-hidden />
      )}
      <span aria-live="polite" className="sr-only">
        {copied ? "Copied" : ""}
      </span>
    </button>
  );
}

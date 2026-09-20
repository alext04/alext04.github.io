import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { sections } from "@/content/profile";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

/**
 * Custom 404.
 *
 * The default Next.js 404 is unstyled and offers no way back into the site.
 * This keeps the visitor inside the design and routes them to a real section.
 */
export default function NotFound() {
  return (
    <main
      id="main"
      className="flex min-h-screen flex-col items-center justify-center px-6 py-32 text-center"
    >
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted">
        The link may be outdated, or the page may have moved. Everything on this
        site lives on the home page.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-soft"
      >
        <FaArrowLeft size={13} aria-hidden />
        Back home
      </Link>

      <nav aria-label="Site sections" className="mt-12">
        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                href={`/#${section.id}`}
                className="text-xs text-ink-subtle transition-colors hover:text-accent"
              >
                {section.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}

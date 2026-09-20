import { linkIcons, ICON_SIZE } from "@/components/linkIcons";
import { profile, sections } from "@/content/profile";

/**
 * Site footer.
 *
 * Carries the navigation the navbar hides on small screens, so every section
 * stays reachable without the mobile menu. The copyright year is computed at
 * build time on the server rather than in a component body, which avoids the
 * hydration mismatch `new Date()` inside a client component would risk.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-sm text-ink">{profile.name}</p>
          <p className="mt-1 text-xs text-ink-subtle">
            {profile.contact.location}
          </p>
        </div>

        <nav aria-label="Footer" className="sm:order-last">
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-xs text-ink-subtle transition-colors hover:text-accent"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex items-center gap-1">
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
                  className="grid h-9 w-9 place-items-center rounded text-ink-subtle transition-colors hover:text-accent"
                >
                  <Icon size={ICON_SIZE} aria-hidden />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-line pt-6">
        <p className="font-mono text-[0.7rem] text-ink-subtle">
          © {year} {profile.name}. Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

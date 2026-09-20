import { FaEnvelope, FaFilePdf, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Section from "@/components/Section";
import Reveal from "@/components/motion/Reveal";
import CopyButton from "@/components/CopyButton";
import { linkIcons, ICON_SIZE } from "@/components/linkIcons";
import { profile, sectionIndex } from "@/content/profile";

export default function Contact() {
  const { email, phone, location, links } = profile.contact;

  return (
    <Section
      id="contact"
      index={sectionIndex("contact")}
      title="Contact"
      description="Open to conversations about backend engineering, distributed systems, and applied AI. The fastest way to reach me is email."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {/* Direct details */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 rounded-card border border-line bg-surface/60 p-4">
            <FaEnvelope size={ICON_SIZE} aria-hidden className="shrink-0 text-accent" />
            <a
              href={`mailto:${email}`}
              className="flex-grow break-all text-sm text-ink transition-colors hover:text-accent"
            >
              {email}
            </a>
            <CopyButton value={email} label="email address" />
          </div>

          <div className="flex items-center gap-3 rounded-card border border-line bg-surface/60 p-4">
            <FaPhone size={ICON_SIZE} aria-hidden className="shrink-0 text-accent" />
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="flex-grow text-sm text-ink transition-colors hover:text-accent"
            >
              {phone}
            </a>
            <CopyButton value={phone} label="phone number" />
          </div>

          <div className="flex items-center gap-3 rounded-card border border-line bg-surface/60 p-4">
            <FaMapMarkerAlt
              size={ICON_SIZE}
              aria-hidden
              className="shrink-0 text-accent"
            />
            <span className="text-sm text-ink">{location}</span>
          </div>
        </div>

        {/* Profiles + resume */}
        <div className="rounded-card border border-line bg-surface/60 p-6">
          <h3 className="font-mono text-xs uppercase tracking-wider text-ink-subtle">
            Elsewhere
          </h3>

          <ul className="mt-4 space-y-2">
            {links.map((link) => {
              const Icon = linkIcons[link.label];
              if (!Icon) return null;
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex items-center gap-3 rounded px-2 py-2.5 text-sm text-ink-muted transition-colors hover:bg-surface-raised hover:text-accent"
                  >
                    <Icon size={ICON_SIZE} aria-hidden />
                    <span>{link.label}</span>
                    {link.external ? (
                      <span className="sr-only">(opens in a new tab)</span>
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ul>

          <Reveal from="none" className="mt-6 border-t border-line pt-6">
            <a
              href={profile.resumePath}
              className="inline-flex items-center gap-2 rounded bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-soft"
            >
              <FaFilePdf size={15} aria-hidden />
              Download Resume
            </a>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

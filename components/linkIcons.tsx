import type { ComponentType } from "react";
import {
  FaEnvelope,
  FaFilePdf,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

/**
 * Maps a link label to its icon.
 *
 * Centralised so Hero, Navbar, Contact, and the footer render the same glyph for
 * the same destination, and so `profile.links` in the content layer can stay
 * pure serialisable data with no component references in it.
 */
export const linkIcons: Record<
  string,
  ComponentType<{ size?: number; className?: string; "aria-hidden"?: boolean }>
> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Email: FaEnvelope,
  Phone: FaPhone,
  Resume: FaFilePdf,
};

/** Shared icon size for social rows and inline contact links. */
export const ICON_SIZE = 18;

import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { profile } from "@/content/profile";
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/site";

/**
 * The homepage title uses `absolute` so the layout's "%s | Alex Thuruthel"
 * template does not produce a doubled name. If this page ever splits into
 * sub-routes, those should use plain titles and inherit the template.
 */
export const metadata: Metadata = {
  title: {
    absolute: `${profile.name} — ${profile.role}`,
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: SITE_URL },
};

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}

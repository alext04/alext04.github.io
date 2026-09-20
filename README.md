# alexthuruthel — personal site

Personal portfolio for Alex Thuruthel, Software Engineer. Next.js 16 (App Router),
React 19, Tailwind CSS v4, TypeScript, Framer Motion.

Live: <https://alext04-github-io.vercel.app>

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Script              | Purpose                                             |
| ------------------- | --------------------------------------------------- |
| `npm run dev`       | Development server with Fast Refresh                |
| `npm run build`     | Production build                                    |
| `npm start`         | Serve the production build                          |
| `npm run lint`      | ESLint (`eslint-config-next`, core-web-vitals + TS) |
| `npm run typecheck` | `tsc --noEmit`                                      |
| `npm run verify`    | typecheck → lint → build; run before pushing        |

## Architecture

The governing rule: **content is data, components are presentation.** No component
hard-codes copy.

```
app/
  layout.tsx            Fonts, metadata, JSON-LD Person schema, nav + footer
  page.tsx              Composes the sections in order
  globals.css           Design tokens (@theme), base styles, print + reduced-motion
  opengraph-image.tsx   Social card, generated at request time
  sitemap.ts robots.ts  Crawler surface
  not-found.tsx         Custom 404
  icon.svg              Favicon

content/
  profile.ts            ← SINGLE SOURCE OF TRUTH for all site content

lib/
  types.ts              Domain types for the content layer
  site.ts               Canonical URL, title, description, keywords
  dates.ts              The one place that knows the "Jul 2026 – Present" format

components/
  Section.tsx           Shared section shell (heading + reveal + container)
  SectionHeading.tsx    Heading with auto-derived ordinal
  motion/Reveal.tsx     The only scroll-reveal implementation
  Navbar.tsx            Client: active-section tracking, mobile menu
  Hero.tsx  About.tsx  Experience.tsx  Research.tsx
  Projects.tsx  Skills.tsx  Education.tsx  Contact.tsx  Footer.tsx
  CopyButton.tsx        Client: clipboard with fallback
  linkIcons.tsx         Label → icon map
```

### Updating content from a new resume

Edit `content/profile.ts`. That is the whole procedure — components read from it
and render whatever is there. Adding a section means adding one entry to the
`sections` array; the `01.` / `02.` ordinals are derived from array position, so
they renumber themselves.

If the resume changes, also replace `public/resume.pdf`.

### Server vs. client components

Only four components are client components: `Navbar` (mobile menu, scroll spy),
`Reveal` (scroll animation), `CopyButton` (clipboard), and the OG image route.
Every section is a Server Component, so the page content itself ships no
JavaScript. Framer Motion is confined to the small `Reveal` leaf rather than
wrapping whole sections, which is what keeps the client bundle small.

`Reveal` also collapses to a plain fade when the OS "reduce motion" setting is
on, and `globals.css` carries a CSS-level fallback.

## Design tokens

Defined once in `app/globals.css` under `@theme` and consumed by semantic name
(`bg-surface`, `text-ink-muted`, `border-line-strong`) rather than raw Tailwind
palette values. Changing the accent colour is a one-line edit.

## SEO

- `metadataBase` + canonical URL, resolved from `NEXT_PUBLIC_SITE_URL`
- Open Graph and Twitter cards with a generated 1200×630 image
- `sitemap.xml` and `robots.txt`
- JSON-LD `Person` schema built from the same content layer as the page, so it
  cannot drift out of sync

### Setting a custom domain

Set `NEXT_PUBLIC_SITE_URL` in the Vercel project (see `.env.example`). Everything
downstream — canonical, OG image URL, sitemap, robots — follows automatically.
Keep a redirect from the old host so links already in circulation keep working.

## Deployment

Vercel builds `main` on push. The repository is also named `alext04.github.io`,
but GitHub Pages should stay disabled (**Settings → Pages → Source: None**) —
that host previously served the raw README as a page.

## Accessibility

Skip link, semantic landmarks, `aria-current` on the active nav item,
`aria-expanded` / `aria-controls` on the mobile menu, `aria-label` on every
icon-only link, visible `:focus-visible` rings, a `prefers-reduced-motion`
path, and a print stylesheet.

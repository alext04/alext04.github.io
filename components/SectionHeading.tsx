interface SectionHeadingProps {
  /** 1-based position, normally derived from the `sections` array. */
  index: number;
  title: string;
}

/**
 * Section heading with an auto-derived ordinal.
 *
 * The "01." / "02." labels used to be hand-written into each section, which
 * meant inserting a section in the middle silently desynced every label below
 * it. The number is now passed in from the ordered `sections` array.
 *
 * This is a Server Component — it has no interactivity and ships no JS.
 */
export default function SectionHeading({ index, title }: SectionHeadingProps) {
  const ordinal = String(index).padStart(2, "0");

  return (
    <header className="mb-14">
      <div className="flex items-center gap-4">
        <span
          aria-hidden="true"
          className="font-mono text-sm text-accent tabular-nums"
        >
          {ordinal}
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
        <span aria-hidden="true" className="h-px flex-grow bg-line-strong" />
      </div>
    </header>
  );
}

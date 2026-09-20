/**
 * Date helpers.
 *
 * The content layer stores each entry's `period` as the display string from the
 * resume ("Jul 2026 – Present") and separately stores machine-readable
 * `startDate` / `endDate` as YYYY-MM. Components never parse a date themselves —
 * they call `splitPeriod`, which is the single place that knows the display
 * format uses an en dash.
 */

const RANGE_SEPARATOR = " – ";

/**
 * Splits "Jul 2026 – Present" into ["Jul 2026", "Present"].
 *
 * Tolerates a hyphen separator too, so a content edit that types "-" instead of
 * "–" degrades to a still-correct render rather than a broken one.
 */
export function splitPeriod(period: string): {
  start: string;
  end: string | null;
} {
  for (const separator of [RANGE_SEPARATOR, " - "]) {
    const index = period.indexOf(separator);
    if (index !== -1) {
      return {
        start: period.slice(0, index).trim(),
        end: period.slice(index + separator.length).trim(),
      };
    }
  }
  return { start: period.trim(), end: null };
}

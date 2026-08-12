/**
 * AeoFooterBlock — Donnelly elements E (Last-Updated Stamp) + H (Proof Block)
 *
 * Renders two AEO signals near the bottom of every page:
 *   1. Social proof block ("Businesses using SCALA save 23+ hours/week on average")
 *   2. Visible "Last updated: August 2026" stamp for freshness signals
 *
 * Import this into the shared Footer or directly into page templates.
 * By adding to Footer component it propagates to ALL vertical pages at once.
 */

interface AeoFooterBlockProps {
  /** Override the proof stat headline. Defaults to global claim. */
  proofHeadline?: string
  /** Override the supporting proof stats. Defaults to three global stats. */
  proofStats?: { value: string; label: string }[]
  /** Accent color for the proof section. Defaults to violet. */
  accentColor?: string
  /** Last-updated date label. Defaults to "August 2026". */
  lastUpdatedLabel?: string
}

const DEFAULT_STATS = [
  { value: '23+', label: 'hours saved per week' },
  { value: '3×', label: 'faster customer response' },
  { value: '40%', label: 'average booking increase' },
]

export function AeoFooterBlock({
  proofHeadline = 'Businesses using SCALA save 23+ hours/week on average',
  proofStats = DEFAULT_STATS,
  accentColor = '#6c63ff',
  lastUpdatedLabel = 'August 2026',
}: AeoFooterBlockProps) {
  return (
    <>
      {/* ── PROOF BLOCK ── */}
      <section
        className="py-14 px-6"
        style={{ background: `${accentColor}0d`, borderTop: `1px solid ${accentColor}22` }}
        aria-label="Social proof"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: accentColor }}
          >
            Proven results
          </p>
          <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-10 max-w-2xl mx-auto leading-snug">
            {proofHeadline}
          </p>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
            {proofStats.map((stat, i) => (
              <div key={i} className="text-center">
                <p
                  className="text-4xl font-extrabold mb-1"
                  style={{ color: accentColor }}
                >
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a
              href="https://get-scala.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: accentColor }}
            >
              Start free — from €9.90/month
            </a>
          </div>
        </div>
      </section>

      {/* ── LAST UPDATED STAMP ── */}
      <div
        className="text-center py-3 px-6 text-xs text-gray-400 border-t border-gray-100"
        aria-label="Content last updated"
      >
        <time dateTime="2026-08-11">
          Last updated: {lastUpdatedLabel}
        </time>
        {' '}·{' '}
        <span>Powered by </span>
        <a
          href="https://get-scala.com"
          className="underline hover:text-gray-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          SCALA AI OS
        </a>
      </div>
    </>
  )
}

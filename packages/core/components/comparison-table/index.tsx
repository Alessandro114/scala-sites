/**
 * ComparisonTable — AEO/Donnelly element
 *
 * "SCALA [Vertical]OS vs Traditional Tools" comparison section.
 * Renders a visible table with 4-5 rows. Also structured with
 * role="table" for screen-reader and crawler accessibility.
 *
 * Propagates to all pages that import it from the shared layout.
 */

interface ComparisonRow {
  feature: string
  scala: string
  traditional: string
}

interface ComparisonTableProps {
  verticalName: string
  /** 4-5 rows max for readability */
  rows?: ComparisonRow[]
  accentColor?: string
  bgClassName?: string
  textClassName?: string
}

const DEFAULT_ROWS: ComparisonRow[] = [
  {
    feature: 'Booking & Availability',
    scala: 'Real-time AI booking, 24/7 via WhatsApp & web',
    traditional: 'Phone calls, manual diary, missed enquiries',
  },
  {
    feature: 'Customer Communication',
    scala: 'SARA AI responds instantly in any language',
    traditional: 'Staff answers during business hours only',
  },
  {
    feature: 'CRM & Follow-ups',
    scala: 'Automatic reminders, loyalty tracking, win-back flows',
    traditional: 'Spreadsheets or no CRM at all',
  },
  {
    feature: 'Analytics & Reporting',
    scala: 'Live dashboard: revenue, occupancy, conversion rate',
    traditional: 'End-of-month manual reports, always lagging',
  },
  {
    feature: 'Setup & Running Cost',
    scala: 'From €97/month, live same day, no IT needed',
    traditional: '€500-2,000/month across 5+ fragmented tools',
  },
]

export function ComparisonTable({
  verticalName,
  rows = DEFAULT_ROWS,
  accentColor = '#6c63ff',
  bgClassName = 'bg-white',
  textClassName = 'text-gray-900',
}: ComparisonTableProps) {
  return (
    <section className={`${bgClassName} py-16 px-6`} aria-labelledby="comparison-heading">
      <div className="max-w-4xl mx-auto">
        {/* Question-format H2 — Donnelly element C */}
        <h2
          id="comparison-heading"
          className={`text-2xl sm:text-3xl font-bold text-center mb-3 ${textClassName}`}
        >
          How does SCALA {verticalName} compare to traditional tools?
        </h2>
        <p className="text-center text-gray-500 mb-10 text-sm">
          See why businesses switch from fragmented software to one AI platform.
        </p>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table
            className="w-full text-sm"
            role="table"
            aria-label={`SCALA ${verticalName} vs Traditional Tools comparison`}
          >
            <thead>
              <tr className="border-b border-gray-200" style={{ background: accentColor }}>
                <th
                  className="text-left px-5 py-4 font-semibold text-white w-1/3"
                  scope="col"
                >
                  Feature
                </th>
                <th
                  className="text-left px-5 py-4 font-semibold text-white w-1/3"
                  scope="col"
                >
                  SCALA {verticalName}
                </th>
                <th
                  className="text-left px-5 py-4 font-semibold text-white w-1/3"
                  scope="col"
                >
                  Traditional Tools
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                  <td className="px-5 py-4 font-medium text-gray-900">{row.feature}</td>
                  <td className="px-5 py-4 text-gray-700">
                    <span className="flex items-start gap-2">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {row.scala}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-gray-400">
                    <span className="flex items-start gap-2">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {row.traditional}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA below table */}
        <div className="text-center mt-8">
          <a
            href="https://get-scala.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: accentColor }}
          >
            See SCALA {verticalName} in action
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

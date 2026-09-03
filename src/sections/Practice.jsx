import Reveal from '../components/Reveal'
import { site } from '../siteInfo'

const infoCards = [
  { label: 'Care', value: 'One-on-one', sub: 'you have my full attention' },
  { label: 'Where', value: 'Home · Office · Telehealth', sub: `office in ${site.neighborhood}` },
  { label: 'Hours', value: site.hours, sub: site.hoursNote },
  { label: 'Payment', value: 'Without insurance', sub: 'paid at the time of the visit' },
]

// Stacked rows with a hairline above on a phone; columns divided by a hairline
// to the left from sm up. Same fact row, laid out for the width it has.
function factClasses(i) {
  return [
    'pt-6 border-t border-line',
    i === 0 ? 'pt-0 border-t-0' : '',
    'sm:pt-0 sm:border-t-0',
    i % 2 === 1 ? 'sm:pl-6 sm:border-l sm:border-line' : '',
    'lg:pl-8 lg:border-l lg:border-line',
    i === 0 ? 'lg:pl-0 lg:border-l-0' : '',
  ].filter(Boolean).join(' ')
}

/**
 * The quiet fact row under the hero — `#glance`, not `#practice`. It carries
 * no heading, so it is not what "Practice" in the menu means: that link lands
 * on the section actually headed "The Practice", which is Gallery.jsx. (The
 * rates used to sit here too, which is why clicking "Practice" once landed a
 * visitor on a price list — they are their own section now. See Rates.jsx.)
 */
export default function Practice() {
  return (
    <section id="glance" className="bg-mist py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">

        {/* Quiet fact row — hairlines instead of boxes */}
        <Reveal>
          <div className="grid gap-y-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-0">
            {infoCards.map(({ label, value, sub }, i) => (
              <div key={label} className={factClasses(i)}>
                <p className="label mb-3">{label}</p>
                {/* min-height so the sub-lines keep one baseline across the row */}
                <p className="font-serif text-xl lg:text-[19px] text-ink leading-snug lg:min-h-[3.4rem]">{value}</p>
                {sub && <p className="font-sans text-[13px] text-ink-soft mt-1.5 leading-relaxed">{sub}</p>}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

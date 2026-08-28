import Reveal from '../components/Reveal'
import { site } from '../siteInfo'

const infoCards = [
  { label: 'Care', value: 'One-on-one', sub: 'the whole session, every session' },
  { label: 'Where', value: 'Home · Office · Telehealth', sub: `office in ${site.neighborhood}` },
  { label: 'Hours', value: site.hours, sub: site.hoursNote },
  { label: 'Model', value: 'Out-of-network', sub: 'no insurance-driven limits' },
]

// Confirmed by the practice: $250 evaluation, $200 treatment, +$50 outside the
// local area. Telehealth at $150 and the package discounts are NOT yet final —
// see CLAUDE.md before quoting them anywhere else.
const rates = [
  { name: 'Initial evaluation', price: '$250' },
  { name: 'Treatment session', price: '$200' },
  { name: 'Telehealth session', price: '$150' },
  { name: 'Travel outside the local area', price: '+$50' },
]

export default function Practice() {
  return (
    <section id="practice" className="bg-linen pt-8 pb-24 sm:pb-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">

        {/* Quiet fact row — hairlines instead of boxes */}
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
            {infoCards.map(({ label, value, sub }, i) => (
              <div
                key={label}
                className={[
                  i % 2 === 1 ? 'pl-6 border-l border-stone' : '',
                  'lg:pl-8 lg:border-l lg:border-stone',
                  i === 0 ? 'lg:pl-0 lg:border-l-0' : '',
                ].join(' ')}
              >
                <p className="label mb-3">{label}</p>
                <p className="font-serif text-xl text-umber leading-snug">{value}</p>
                {sub && <p className="font-sans text-[13px] text-umber-soft mt-1.5">{sub}</p>}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="h-px hairline my-16 sm:my-20" />

        {/* Rates */}
        <Reveal>
          <div className="max-w-2xl">
            <p className="label mb-6">Rates</p>
            <h2 className="section-heading mb-10">Simple and transparent</h2>

            <div className="divide-y divide-stone mb-8">
              {rates.map(({ name, price }) => (
                <div key={name} className="flex items-baseline justify-between gap-6 py-5 first:pt-0">
                  <p className="font-sans text-umber text-[16px]">{name}</p>
                  <p className="font-serif text-2xl text-fern shrink-0">{price}</p>
                </div>
              ))}
              <div className="flex items-baseline justify-between gap-6 py-5">
                <p className="font-sans text-umber text-[16px]">Four- and eight-session packages</p>
                <p className="font-sans text-[15px] text-umber-soft shrink-0">discounted</p>
              </div>
            </div>

            <p className="lede mb-10">
              Working outside insurance networks is what makes the full one-on-one
              session possible, and keeps the plan driven by your goals rather
              than a coverage limit.
            </p>

            <a href="#book" className="btn-primary">
              Book a free consult
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

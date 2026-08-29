import Reveal from '../components/Reveal'
import { site } from '../siteInfo'

const infoCards = [
  { label: 'Care', value: 'One-on-one', sub: 'you have my full attention' },
  { label: 'Where', value: 'Home · Office · Telehealth', sub: `office in ${site.neighborhood}` },
  { label: 'Hours', value: site.hours, sub: site.hoursNote },
  { label: 'Payment', value: 'Without insurance', sub: 'paid at the time of the visit' },
]

// Confirmed by the practice: $250 evaluation, $200 treatment, +$50 outside the
// local area. Telehealth at $150 and the package discounts are NOT yet final —
// see CLAUDE.md before quoting them anywhere else.
const rates = [
  { name: 'Initial evaluation', price: '$250' },
  { name: 'Treatment session', price: '$200' },
  { name: 'Telehealth session', price: '$150' },
  { name: 'Travel outside the local area', price: '+$50', note: 'contact for details' },
  { name: 'Four- and eight-session packages', price: 'Contact for details' },
]

// Stacked rows with a hairline above on a phone; columns divided by a hairline
// to the left from sm up. Same fact row, laid out for the width it has.
function factClasses(i) {
  return [
    'pt-6 border-t border-stone',
    i === 0 ? 'pt-0 border-t-0' : '',
    'sm:pt-0 sm:border-t-0',
    i % 2 === 1 ? 'sm:pl-6 sm:border-l sm:border-stone' : '',
    'lg:pl-8 lg:border-l lg:border-stone',
    i === 0 ? 'lg:pl-0 lg:border-l-0' : '',
  ].filter(Boolean).join(' ')
}

export default function Practice() {
  return (
    <section id="practice" className="bg-linen pt-8 pb-24 sm:pb-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">

        {/* Quiet fact row — hairlines instead of boxes */}
        <Reveal>
          <div className="grid gap-y-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-0">
            {infoCards.map(({ label, value, sub }, i) => (
              <div key={label} className={factClasses(i)}>
                <p className="label mb-3">{label}</p>
                {/* min-height so the sub-lines keep one baseline across the row */}
                <p className="font-serif text-xl lg:text-[19px] text-umber leading-snug lg:min-h-[3.4rem]">{value}</p>
                {sub && <p className="font-sans text-[13px] text-umber-soft mt-1.5 leading-relaxed">{sub}</p>}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="h-px hairline my-14 sm:my-20" />

        {/* Rates */}
        <Reveal>
          <div className="max-w-2xl">
            <p className="label mb-6">Rates</p>
            <h2 className="section-heading mb-10">What a session costs</h2>

            <div className="divide-y divide-stone mb-8">
              {rates.map(({ name, price, note }) => (
                <div key={name} className="flex items-baseline justify-between gap-4 sm:gap-6 py-5 first:pt-0">
                  <div>
                    <p className="font-sans text-[15px] sm:text-[16px] text-umber leading-snug">{name}</p>
                    {note && <p className="font-sans text-[13px] text-umber-soft mt-1.5">{note}</p>}
                  </div>
                  <p className={`shrink-0 text-right ${price.startsWith('$') || price.startsWith('+')
                    ? 'font-serif text-xl sm:text-2xl text-fern'
                    : 'font-sans text-[14px] sm:text-[15px] text-umber-soft'}`}>{price}</p>
                </div>
              ))}
            </div>

            <p className="lede mb-10">
              The practice does not bill insurance. Paying directly is what makes
              the full one-on-one session possible, and keeps your care guided by
              your goals rather than by what a plan will cover.
            </p>

            <a href="#book" className="btn-primary w-full sm:w-auto">
              Book a session
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

import Reveal from '../components/Reveal'
import { site } from '../siteInfo'

const infoCards = [
  { label: 'Care', value: 'One-on-one', sub: 'the whole session, every session' },
  { label: 'Where', value: 'Home · Office · Telehealth', sub: `office in ${site.neighborhood}` },
  { label: 'Hours', value: site.hours, sub: site.hoursNote },
  { label: 'Model', value: 'Out-of-network', sub: 'no insurance-driven limits' },
]

const included = [
  'Time to understand your story before anything is treated',
  'A full movement, strength and balance assessment',
  'Hands-on manual therapy — twelve years of it, before the doctorate',
  'A treatment plan that is both evidence-based and deeply personal',
  'A home program built around your goals, not a generic handout',
  'The knowledge and tools to take an active role in your recovery',
]

const rates = [
  { name: 'Initial evaluation', detail: '90 minutes', price: '$225' },
  { name: 'Follow-up visit', detail: '60 minutes', price: '$175' },
  { name: 'Course of six', detail: 'booked together', price: '$960' },
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

        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-14 lg:gap-20 items-start">
          {/* Included */}
          <Reveal>
            <p className="label mb-5">The practice</p>
            <h2 className="section-heading mb-7">What a session holds</h2>
            <p className="lede mb-10 max-w-lg">
              I know what it feels like to wait months for an appointment, to
              feel unheard, to leave without a clear path forward. Those
              experiences are why this practice is built the way it is.
            </p>

            <ul className="space-y-4">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-4 font-sans text-[15px] text-umber-soft leading-relaxed">
                  <span aria-hidden="true" className="mt-2 w-1.5 h-1.5 rounded-full bg-sage-deep shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Rates */}
          <Reveal delay={120}>
            <div className="soft-card sm:p-9">
              <p className="label mb-5">Rates</p>
              <div className="divide-y divide-stone">
                {rates.map(({ name, detail, price }) => (
                  <div key={name} className="flex items-baseline justify-between gap-6 py-5 first:pt-0 last:pb-0">
                    <div>
                      <p className="font-sans font-medium text-umber text-[15px]">{name}</p>
                      <p className="font-sans text-[13px] text-umber-soft mt-1">{detail}</p>
                    </div>
                    <p className="font-serif text-2xl text-fern shrink-0">{price}</p>
                  </div>
                ))}
              </div>

              <p className="font-sans text-[13px] text-umber-soft leading-relaxed mt-7 mb-8">
                Working outside insurance networks is what makes the full
                one-on-one hour possible. A superbill for your insurer comes
                after every visit, and HSA and FSA cards are welcome.
              </p>

              <a href="#book" className="btn-primary w-full">
                Book a free consult
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

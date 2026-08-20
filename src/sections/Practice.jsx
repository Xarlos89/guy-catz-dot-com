import Reveal from '../components/Reveal'
import { site } from '../siteInfo'

const infoCards = [
  { label: 'Session', value: '60 minutes', sub: 'first visit runs 90' },
  { label: 'Hours', value: site.hours, sub: site.hoursNote },
  { label: 'Studio', value: site.neighborhood, sub: 'in-home visits available' },
  { label: 'Format', value: 'One-to-one', sub: 'never double-booked' },
]

const included = [
  'A full-body movement and posture assessment',
  'Hands-on manual therapy where it helps',
  'Breathwork and nervous-system down-regulation',
  'A home practice short enough that you will do it',
  'Video walkthroughs of every exercise',
  'Text access to your therapist between visits',
  'Written notes after each session',
]

const rates = [
  { name: 'First visit', detail: '90 minutes · evaluation', price: '$225' },
  { name: 'Follow-up', detail: '60 minutes · per session', price: '$175' },
  { name: 'Course of six', detail: 'booked together · save $90', price: '$960' },
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
            <h2 className="section-heading mb-7">What an hour holds</h2>
            <p className="lede mb-10 max-w-lg">
              Every session is the same shape and never the same hour. We start
              where your week left your body, and finish with something you can
              carry home.
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
                Out-of-network. A superbill for your insurer comes after every
                visit, and HSA and FSA cards are welcome.
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

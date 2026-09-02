import Reveal from '../components/Reveal'

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

/**
 * Rates sit at the foot of the page, after everything else has been read —
 * the client's instruction, and the reason the fact row in Practice.jsx no
 * longer carries them. This is the second section of the closing `mist` band
 * (FAQ · Rates · Book), so it takes the shorter top padding and `.btn-primary`
 * is safe here: the terracotta pill only works on the light ground.
 *
 * The menu reaches it as Services → Rates.
 */
export default function Rates() {
  return (
    <section id="rates" className="bg-mist pt-8 pb-24 sm:pb-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="section-heading mb-3">Rates</h2>
            <p className="section-sub mb-10">What a session costs</p>

            <div className="divide-y divide-line mb-8">
              {rates.map(({ name, price, note }) => (
                <div key={name} className="flex items-baseline justify-between gap-4 sm:gap-6 py-5 first:pt-0">
                  <div>
                    <p className="font-sans text-[15px] sm:text-[16px] text-ink leading-snug">{name}</p>
                    {note && <p className="font-sans text-[13px] text-ink-soft mt-1.5">{note}</p>}
                  </div>
                  <p className={`shrink-0 text-right ${price.startsWith('$') || price.startsWith('+')
                    ? 'font-serif text-xl sm:text-2xl text-fern'
                    : 'font-sans text-[14px] sm:text-[15px] text-ink-soft'}`}>{price}</p>
                </div>
              ))}
            </div>

            {/* The client's own wording — say it plainly, and say what it buys
                the patient. Kept identical to the FAQ answer. */}
            <p className="lede mb-10">
              We currently do not accept insurance, and payment is due at the
              time of the visit. This ensures significantly less wait time for
              appointments, and you will receive direct one-on-one care guided
              by your goals rather than what your plan covers.
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

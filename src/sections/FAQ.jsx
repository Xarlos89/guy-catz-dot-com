import { useState } from 'react'
import Reveal from '../components/Reveal'

const faqs = [
  {
    q: 'Where do sessions take place?',
    a: 'Three options: in your own home, at the West Los Angeles office, or by telehealth. Many people mix them — an in-home evaluation, office visits for the strength work, video calls when travel gets in the way.',
  },
  {
    q: 'Do you take insurance?',
    a: 'No — the practice does not bill insurance, and payment is due at the time of the visit. Working this way is what makes the full one-on-one session possible, and keeps your care guided by your goals rather than by what a plan will cover.',
  },
  {
    q: 'Do I need a referral from a doctor?',
    a: 'No. California is a direct-access state, so you can be seen without a physician referral. If something in the evaluation needs a medical opinion, you will be told and pointed in the right direction.',
  },
  {
    q: 'How many sessions will I need?',
    a: 'Most people are seen weekly at first and taper as things settle. You will get an honest estimate after the evaluation, and it is revisited as you go.',
  },
  {
    q: 'I was just discharged from hospital. Is it too soon?',
    a: 'It is often the right time to begin. Rebuilding strength and confidence after a hospital stay is a large part of this practice, and in-home visits mean you do not have to travel to start.',
  },
  {
    q: 'What should I wear?',
    a: 'Whatever you can move in — shorts or leggings and a t-shirt work well. For an in-home visit, clear a little floor space and have any equipment you already own to hand.',
  },
  {
    q: 'What is the cancellation policy?',
    a: 'Twenty-four hours notice, no charge. Inside that window the session is billed, though genuine emergencies are always handled reasonably.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-stone last:border-0">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
      >
        <span className="font-serif text-lg sm:text-xl text-umber leading-snug group-hover:text-fern transition-colors duration-300">
          {q}
        </span>
        <span
          aria-hidden="true"
          className={`shrink-0 w-8 h-8 rounded-full border border-stone flex items-center justify-center transition-transform duration-500 ease-out ${
            open ? 'rotate-45 bg-sage/25 border-sage' : ''
          }`}
        >
          <svg className="w-3.5 h-3.5 text-umber-soft" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
            <path strokeLinecap="round" d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      {open && (
        <p className="font-sans text-[15px] text-umber-soft leading-[1.85] pb-7 pr-12 -mt-1 max-w-2xl">{a}</p>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-oat pb-24 sm:pb-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
          <Reveal>
            <p className="label mb-6">FAQ</p>
            <h2 className="section-heading">Good to know</h2>
          </Reveal>

          <Reveal delay={110}>
            <div>
              {faqs.map(({ q, a }) => (
                <FAQItem key={q} q={q} a={a} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

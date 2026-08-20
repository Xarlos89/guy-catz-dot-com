import { useState } from 'react'

const faqs = [
  {
    q: 'Do you take insurance?',
    a: 'The practice is out-of-network, which is what makes a full private hour possible. You pay at the visit and receive a superbill to submit to your insurer — many PPO plans reimburse a portion. HSA and FSA cards are accepted.',
  },
  {
    q: 'Do I need a referral from a doctor?',
    a: 'No. California is a direct-access state, so you can be seen without a physician referral. If something in the evaluation needs a medical opinion, you will be told and pointed in the right direction.',
  },
  {
    q: 'How many sessions will I need?',
    a: 'Most people are seen weekly for four to six weeks, then taper to every other week. You will get an honest estimate after the evaluation, and it gets revisited as things change.',
  },
  {
    q: 'What should I wear?',
    a: 'Whatever you can move in — shorts or leggings and a t-shirt work well. The studio has a changing area if you are coming straight from work.',
  },
  {
    q: 'Do you do in-home or virtual visits?',
    a: 'Yes to both. In-home visits are available across the east side of Los Angeles for an added travel fee, and virtual sessions are available anywhere in California.',
  },
  {
    q: 'What is the cancellation policy?',
    a: 'Twenty-four hours notice, no charge. Inside that window the session is billed, though genuine emergencies are always handled reasonably.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-sans font-semibold text-white text-sm">{q}</span>
        <svg
          className={`w-4 h-4 text-white/40 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <p className="font-sans text-sm text-white/50 leading-relaxed pb-5 -mt-1">{a}</p>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-moss py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-10">
          <p className="label mb-3">FAQ</p>
          <h2 className="section-heading-light">Good to know</h2>
        </div>

        <div className="max-w-2xl mx-auto bg-moss-light border border-white/5 rounded-2xl px-6">
          {faqs.map(({ q, a }) => (
            <FAQItem key={q} q={q} a={a} />
          ))}
        </div>
      </div>
    </section>
  )
}

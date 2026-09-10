import Reveal from '../components/Reveal'

/**
 * The client's own policy, verbatim and in his order — the same rule that
 * governs About.jsx and Approach.jsx. Don't reword the fee sentence, and
 * don't soften "will be charged the full session value fee": the whole point
 * of the section is that the terms are unambiguous before anyone books.
 *
 * It sits third in the closing `mist` band (FAQ · Rates · Cancellation ·
 * Book), directly after the rates, because "full session value fee" only
 * means something once the session values are on screen. Same continuing-
 * section padding as Rates, and no divider — the band does not change colour.
 *
 * The FAQ answer is the short version of this and links here; change one and
 * change the other, plus the `FAQPage` JSON-LD in index.html.
 */
const reasons = [
  {
    title: 'Dedicated Travel Windows',
    body: 'Your appointment blocks out specific travel time, route planning, and mileage that cannot be filled or re-allocated to another patient on short notice.',
  },
  {
    title: 'Impact on Other Patients',
    body: 'A missed slot deprives another patient on our waiting list of the opportunity to receive timely care.',
  },
  {
    title: 'Unrecoverable Overhead',
    body: 'Fuel, vehicle maintenance, and travel time are sunk costs invested specifically for your scheduled visit.',
  },
]

export default function Cancellation() {
  return (
    <section id="cancellation" className="bg-mist pt-8 pb-24 sm:pb-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="section-heading mb-3">
              Cancellation <span className="amp-plain">&amp;</span> No-Show Policy
            </h2>
            <p className="section-sub mb-10">If you need to change an appointment</p>

            <p className="lede mb-12">
              Your health and progress are important to us, and your appointment
              time is reserved exclusively for you. Because we provide
              customized, one-on-one care directly in your home, late
              cancellations and missed appointments significantly impact our
              schedule and our ability to serve other patients in need.
            </p>

            <p className="label mb-6">Our Policy</p>
            <p className="lede mb-4">
              We require at least 24 hours&rsquo; notice for any cancellations
              or rescheduling requests.
            </p>
            <p className="lede mb-12">
              Cancellations with less than 24 hours&rsquo; notice, or missed
              appointments (no-shows), will be charged the full session value
              fee.
            </p>

            <p className="label mb-6">Why We Enforce This Policy</p>
            <p className="lede mb-7">
              Unlike a traditional clinic, a mobile practice requires extensive
              logistics to bring high-quality care to your doorstep. When you
              book a session, we commit more than just the treatment hour to
              you:
            </p>

            <ul className="soft-card sm:p-9 space-y-6 mb-12">
              {reasons.map(({ title, body }) => (
                <li key={title} className="flex items-start gap-3.5">
                  <span aria-hidden="true" className="mt-2.5 w-1 h-1 rounded-full bg-terracotta-light shrink-0" />
                  <p className="font-sans text-[15px] sm:text-base text-ink-soft leading-[1.85]">
                    <span className="font-medium text-ink">{title}:</span> {body}
                  </p>
                </li>
              ))}
            </ul>

            <p className="label mb-6">Emergencies &amp; Exceptions</p>
            <p className="lede mb-10">
              We understand that sudden emergencies, acute illness, or dangerous
              weather happen. Exceptions to this policy will be considered on a
              case-by-case basis for true emergencies.
            </p>

            <p className="font-serif text-[17px] sm:text-lg text-fern leading-relaxed">
              Thank you for respecting our time and business.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

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

export default function Practice() {
  return (
    <section id="practice" className="bg-moss py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-14">

          {/* Left */}
          <div>
            <p className="label mb-3">The practice</p>
            <h2 className="section-heading-light mb-8">The essentials</h2>

            <div className="grid grid-cols-2 gap-3 mb-5">
              {infoCards.map(({ label, value, sub }) => (
                <div key={label} className="bg-moss-light border border-white/5 rounded-2xl p-5">
                  <p className="text-[10px] font-sans font-semibold tracking-[0.15em] uppercase text-white/40 mb-1">{label}</p>
                  <p className="font-sans font-semibold text-white text-sm leading-snug">{value}</p>
                  {sub && <p className="text-xs text-white/40 mt-0.5">{sub}</p>}
                </div>
              ))}
            </div>

            <div className="bg-moss-light border border-white/5 rounded-2xl p-5">
              <p className="font-sans font-semibold text-white text-sm mb-4">What every session includes</p>
              <ul className="space-y-2.5">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-white/60">
                    <svg className="w-4 h-4 text-clay-light shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-5">
            {/* Pricing card */}
            <div className="bg-moss-light border border-white/5 rounded-2xl p-6">
              <p className="label mb-3">Rates</p>
              <h3 className="font-serif font-bold text-white text-2xl mb-5 leading-tight">
                Simple &amp;<br />transparent
              </h3>

              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="text-center">
                  <p className="font-sans text-[11px] text-white/50 font-medium mb-1">First visit</p>
                  <p className="font-sans text-[10px] text-white/30 mb-2">90 min</p>
                  <p className="font-serif font-bold text-white text-2xl">$225</p>
                  <p className="font-sans text-[10px] text-white/40 mt-1">evaluation</p>
                </div>
                <div className="text-center border-x border-white/5 px-2">
                  <p className="font-sans text-[11px] text-white/50 font-medium mb-1">Follow-up</p>
                  <p className="font-sans text-[10px] text-white/30 mb-2">60 min</p>
                  <p className="font-serif font-bold text-white text-2xl">$175</p>
                  <p className="font-sans text-[10px] text-white/40 mt-1">per session</p>
                </div>
                <div className="text-center">
                  <p className="font-sans text-[11px] text-white/50 font-medium mb-1">Package</p>
                  <p className="font-sans text-[10px] text-white/30 mb-2">6 visits</p>
                  <p className="font-serif font-bold text-white text-2xl">$960</p>
                  <p className="font-sans text-[10px] text-white/40 mt-1">save $90</p>
                </div>
              </div>

              <p className="font-sans text-xs text-white/40 italic mb-5">
                Out-of-network — a superbill for your insurer is provided after
                every visit. HSA and FSA cards welcome.
              </p>

              <a href="#book" className="btn-outline-light w-full text-center tracking-widest uppercase text-xs">
                Book a free consult →
              </a>
            </div>

            {/* Map */}
            <div className="bg-moss-light border border-white/5 rounded-2xl overflow-hidden">
              <iframe
                title={`${site.name} Physical Therapy — ${site.neighborhood}, Los Angeles`}
                src="https://maps.google.com/maps?q=Silver+Lake,+Los+Angeles,+CA&z=13&output=embed"
                width="100%"
                height="200"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="px-5 py-4 border-t border-white/5">
                <p className="text-[10px] font-sans font-semibold tracking-[0.15em] uppercase text-white/40 mb-1">Studio</p>
                <p className="font-sans text-sm text-white/70 leading-snug">
                  {site.address}<br />{site.addressCity}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

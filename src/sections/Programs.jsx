const tiers = [
  {
    name: 'One-to-one therapy',
    price: '$175',
    unit: 'per 60-min session',
    blurb: 'The core of the practice. Hands-on work, movement retraining, and a home plan that fits your week.',
    points: ['Private studio, one client at a time', 'Manual therapy + loaded movement', 'Home program updated every visit'],
  },
  {
    name: 'Small-group movement',
    price: '$45',
    unit: 'per class · max 6 people',
    blurb: 'Slow, strength-based group classes for the weeks after your one-to-one work — or as a standing practice.',
    points: ['Tuesdays & Thursdays, 7am', 'Mobility, breath, and control', 'Drop-in or 10-class card'],
  },
  {
    name: 'Virtual sessions',
    price: '$120',
    unit: 'per 50-min video call',
    blurb: 'For travel weeks, out-of-town clients, and follow-ups where hands-on work is not the missing piece.',
    points: ['Same assessment, over video', 'Recorded so you can rewatch', 'Available across California'],
  },
]

export default function Programs() {
  return (
    <section id="programs" className="bg-moss py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="label mb-3">Programs</p>
          <h2 className="section-heading-light mb-4">Three ways to work together</h2>
          <p className="font-sans text-sm text-white/50 leading-relaxed">
            Most people start with a 90-minute evaluation, then settle into a
            rhythm — weekly at first, fortnightly as things hold, and group
            classes once the work is yours to keep.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {tiers.map(({ name, price, unit, blurb, points }) => (
            <div key={name} className="bg-moss-light border border-white/5 rounded-2xl p-6 flex flex-col">
              <p className="font-sans font-semibold text-white text-sm mb-3">{name}</p>
              <p className="font-serif font-bold text-white text-3xl leading-none">{price}</p>
              <p className="font-sans text-[11px] text-white/40 mt-1 mb-4">{unit}</p>
              <p className="font-sans text-sm text-white/55 leading-relaxed mb-5">{blurb}</p>
              <ul className="space-y-2 mt-auto">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-xs text-white/45">
                    <svg className="w-3.5 h-3.5 text-clay-light shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#book" className="btn-outline-light text-xs tracking-widest uppercase">
            Not sure which fits? Start with a consult →
          </a>
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M8.25 6.75h7.5M7.5 11.25h9M8.25 15.75h7.5" />
      </svg>
    ),
    title: 'Low back & spine',
    sub: 'Chronic aches, disc flare-ups, stiff mornings.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25c0-3.5 2.5-5.25 6-5.25s6 1.75 6 5.25M12 12a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" />
      </svg>
    ),
    title: 'Neck & shoulder',
    sub: 'Desk tension, headaches, overhead pain.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    title: 'Post-op recovery',
    sub: 'Knee, hip, shoulder — the full road back.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l4.5-6 3 3.5 3.5-7 4 9.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18" />
      </svg>
    ),
    title: 'Running & gait',
    sub: 'Shin splints, IT band, plantar heel pain.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9a6 6 0 1112 0c0 2.5-1.5 3.5-1.5 6a4.5 4.5 0 01-9 0C7.5 12.5 6 11.5 6 9z" />
      </svg>
    ),
    title: 'Hypermobility',
    sub: 'Building stability into loose joints.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 14.25c2.25 0 2.25-2.25 4.5-2.25s2.25 2.25 4.5 2.25 2.25-2.25 4.5-2.25 2.25 2.25 4.5 2.25M3.75 18.75c2.25 0 2.25-2.25 4.5-2.25s2.25 2.25 4.5 2.25 2.25-2.25 4.5-2.25 2.25 2.25 4.5 2.25M12 3v7.5" />
      </svg>
    ),
    title: 'Breath & stress',
    sub: 'Ribcage mechanics, tension you carry.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l2.5 5.5L20 9.5l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1L12 3z" />
      </svg>
    ),
    title: 'Return to sport',
    sub: 'Testing, not guessing, before you go back.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.5-2-7.5-5.5-7.5-10.5A7.5 7.5 0 0112 3a7.5 7.5 0 017.5 7.5C19.5 15.5 16.5 19 12 21z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 11.5l1.75 1.75L15 9.5" />
      </svg>
    ),
    title: 'Injury prevention',
    sub: 'Screening and strength before it hurts.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h3l2.25-6 3.75 12 2.25-6h3.75" />
      </svg>
    ),
    title: 'Ageing well',
    sub: 'Balance, bone loading, staying independent.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-moss py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <p className="label mb-3">What we work on</p>
          <h2 className="section-heading-light mb-4">Reasons people come in</h2>
          <p className="font-sans text-sm text-white/50 max-w-xl mx-auto leading-relaxed">
            If what you're dealing with isn't listed, ask anyway — the consult is
            free, and part of its job is telling you honestly when someone else is
            the better fit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map(({ icon, title, sub }) => (
            <div
              key={title}
              className="bg-moss-light border border-white/5 rounded-2xl p-5 flex items-start gap-4 hover:border-white/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-clay/20 flex items-center justify-center shrink-0 text-clay-light">
                {icon}
              </div>
              <div>
                <p className="font-sans font-semibold text-white text-sm mb-0.5">{title}</p>
                <p className="font-sans text-white/40 text-sm">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

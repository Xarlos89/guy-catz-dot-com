import Reveal from '../components/Reveal'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M8.25 6.75h7.5M7.5 11.25h9M8.25 15.75h7.5" />
      </svg>
    ),
    title: 'Low back & spine',
    sub: 'Chronic aches, disc flare-ups, stiff mornings.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25c0-3.5 2.5-5.25 6-5.25s6 1.75 6 5.25M12 12a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" />
      </svg>
    ),
    title: 'Neck & shoulder',
    sub: 'Desk tension, headaches, overhead pain.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-5 h-5">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5v9m4.5-4.5h-9" />
      </svg>
    ),
    title: 'Post-op recovery',
    sub: 'Knee, hip, shoulder — the full road back.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 18l4.5-6 3 3.5 3.5-7 4 9.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18" />
      </svg>
    ),
    title: 'Running & gait',
    sub: 'Shin splints, IT band, plantar heel pain.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9a6 6 0 1112 0c0 2.5-1.5 3.5-1.5 6a4.5 4.5 0 01-9 0C7.5 12.5 6 11.5 6 9z" />
      </svg>
    ),
    title: 'Hypermobility',
    sub: 'Building stability into loose joints.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 14.25c2.25 0 2.25-2.25 4.5-2.25s2.25 2.25 4.5 2.25 2.25-2.25 4.5-2.25 2.25 2.25 4.5 2.25M3.75 18.75c2.25 0 2.25-2.25 4.5-2.25s2.25 2.25 4.5 2.25 2.25-2.25 4.5-2.25 2.25 2.25 4.5 2.25M12 3v7.5" />
      </svg>
    ),
    title: 'Breath & stress',
    sub: 'Ribcage mechanics, tension you carry.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.5l2.4 5.2 5.6 1-4 4 1 5.8-5-2.9-5 2.9 1-5.8-4-4 5.6-1L12 3.5z" />
      </svg>
    ),
    title: 'Return to sport',
    sub: 'Testing, not guessing, before you go back.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.5-2-7.5-5.5-7.5-10.5A7.5 7.5 0 0112 3a7.5 7.5 0 017.5 7.5C19.5 15.5 16.5 19 12 21z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 11.5l1.75 1.75L15 9.5" />
      </svg>
    ),
    title: 'Injury prevention',
    sub: 'Screening and strength before it hurts.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h3l2.25-6 3.75 12 2.25-6h3.75" />
      </svg>
    ),
    title: 'Ageing well',
    sub: 'Balance, bone loading, staying independent.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-fern pb-24 sm:pb-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <Reveal>
          <div className="max-w-xl mb-14">
            <p className="label-light mb-6">What we work on</p>
            <h2 className="section-heading-light mb-6">Reasons people come in</h2>
            <p className="lede-light">
              If what you're dealing with isn't here, ask anyway — the consult is
              free, and part of its job is telling you honestly when someone else
              is the better fit.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-1">
          {services.map(({ icon, title, sub }, i) => (
            <Reveal key={title} delay={(i % 3) * 90}>
              <div className="flex items-start gap-4 py-5 border-b border-linen/10">
                <span className="text-ochre shrink-0 mt-0.5">{icon}</span>
                <div>
                  <p className="font-sans font-medium text-linen text-[15px] mb-1">{title}</p>
                  <p className="font-sans text-[14px] text-linen/55 leading-relaxed">{sub}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

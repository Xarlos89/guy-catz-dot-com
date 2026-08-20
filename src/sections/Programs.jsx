import Reveal from '../components/Reveal'

const tiers = [
  {
    name: 'One-to-one therapy',
    price: '$175',
    unit: 'per 60-minute session',
    blurb: 'The core of the practice. Hands-on work, movement retraining, and a home plan that fits your week.',
    points: ['Private studio, one client at a time', 'Manual therapy and loaded movement', 'Home program updated every visit'],
  },
  {
    name: 'Small-group movement',
    price: '$45',
    unit: 'per class · six people at most',
    blurb: 'Slow, strength-based classes for the weeks after your one-to-one work — or as a standing practice.',
    points: ['Tuesday and Thursday, 7am', 'Mobility, breath and control', 'Drop in or take a ten-class card'],
  },
  {
    name: 'Virtual sessions',
    price: '$120',
    unit: 'per 50-minute video call',
    blurb: 'For travel weeks, out-of-town clients, and follow-ups where hands-on work is not the missing piece.',
    points: ['The same assessment, over video', 'Recorded so you can rewatch', 'Available across California'],
  },
]

export default function Programs() {
  return (
    <section id="programs" className="bg-oat pb-24 sm:pb-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <Reveal>
          <div className="max-w-2xl mb-14">
            <p className="label mb-6">Programs</p>
            <h2 className="section-heading mb-6">Three ways to work together</h2>
            <p className="lede">
              Most people start with a 90-minute evaluation, then settle into a
              rhythm — weekly at first, fortnightly as things hold, and group
              classes once the work is yours to keep.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map(({ name, price, unit, blurb, points }, i) => (
            <Reveal key={name} delay={i * 110}>
              <div className="soft-card h-full flex flex-col bg-linen/80">
                <p className="font-sans font-medium text-umber text-[15px] mb-5">{name}</p>
                <p className="font-serif text-4xl text-fern leading-none">{price}</p>
                <p className="font-sans text-[13px] text-umber-soft mt-2.5 mb-6">{unit}</p>
                <p className="font-sans text-[15px] text-umber-soft leading-relaxed mb-7">{blurb}</p>
                <ul className="space-y-3 mt-auto">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-3 font-sans text-[13px] text-umber-soft leading-relaxed">
                      <span aria-hidden="true" className="mt-1.5 w-1 h-1 rounded-full bg-terracotta shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="text-center font-sans text-[15px] text-umber-soft mt-12">
            Not sure which fits?{' '}
            <a href="#book" className="text-terracotta-deep underline underline-offset-4 decoration-terracotta/40 hover:decoration-terracotta transition-colors">
              Start with a free consult
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  )
}

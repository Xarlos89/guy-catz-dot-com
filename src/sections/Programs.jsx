import Reveal from '../components/Reveal'
import { site } from '../siteInfo'

const tiers = [
  {
    name: 'In your home',
    kicker: 'I come to you',
    blurb:
      'Care in the place where you actually move — your stairs, your kitchen, your bed. That is where the progress has to hold, so that is a good place to build it.',
    points: ['No traveling to appointments while you are in pain', 'Equipment brought with me', 'Family or caregivers can take part'],
  },
  {
    name: `${site.neighborhood} office`,
    kicker: 'A private room',
    blurb:
      'A quiet treatment room with the equipment for loaded, progressive work — the strength end of rehabilitation, done properly.',
    points: ['One patient at a time', 'Full space for strength work', 'Convenient for the Westside'],
  },
  {
    name: 'Telehealth',
    kicker: 'Wherever you are',
    blurb:
      'Assessment, coaching and progression by secure video — for anyone in California who has limited access to in-person care, or who simply prefers it.',
    points: ['The same one-on-one session', 'Your program reviewed on screen', 'Available anywhere in California'],
  },
]

export default function Programs() {
  return (
    <section id="programs" className="bg-oat pb-24 sm:pb-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <Reveal>
          <div className="max-w-2xl mb-14">
            <p className="label mb-6">Ways to work together</p>
            <h2 className="section-heading mb-6">Three places we can meet</h2>
            <p className="lede">
              One-on-one care means I can treat you in the comfort of your home,
              at my {site.neighborhood} office, or via telehealth — and focus
              entirely on your goals, without the constraints that come with
              insurance-driven care models.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map(({ name, kicker, blurb, points }, i) => (
            <Reveal key={name} delay={i * 110}>
              <div className="soft-card h-full flex flex-col bg-linen/80">
                <p className="label mb-4">{kicker}</p>
                <p className="font-serif text-2xl text-fern leading-tight mb-5">{name}</p>
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
            Not sure which suits you?{' '}
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

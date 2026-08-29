import Reveal from '../components/Reveal'

const steps = [
  {
    title: 'The consult',
    time: 'free · by phone',
    body: 'You tell me what is going on and what you want to get back to. I tell you honestly whether this is the right place for it — and if it is not, where to go instead.',
  },
  {
    title: 'The evaluation',
    time: 'home, office or video',
    body: 'Time to understand your story, then a full assessment of movement, strength and balance. We finish with hands-on work, a first set of exercises, and a plain-English explanation of what we found.',
  },
  {
    title: 'The work',
    time: 'weekly at first',
    body: 'Manual therapy where it opens things up, then progressive loading to make the change hold. Your home program is updated every visit and built around your goals, not a generic handout.',
  },
  {
    title: 'The handover',
    time: 'When you are ready',
    body: 'The goal is for you to need me less. You leave with the knowledge, the tools and the confidence to keep going on your own — and an open door if something changes.',
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-linen pt-8 pb-24 sm:pb-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <p className="label mb-6">How it works</p>
            <h2 className="section-heading mb-6">From first call to last visit</h2>
            <p className="lede">
              Most people are seen weekly at first, then taper as things hold. No
              packages to buy up front, no contracts, no automatic rebooking —
              and support at every step in between.
            </p>
          </div>
        </Reveal>

        <div className="max-w-3xl">
          {steps.map(({ title, time, body }, i) => (
            <Reveal key={title} delay={i * 90}>
              <div className="flex gap-6 sm:gap-10">
                {/* Rail */}
                <div className="flex flex-col items-center shrink-0 pt-1">
                  <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-sage-deep" />
                  {i < steps.length - 1 && <span aria-hidden="true" className="w-px flex-1 bg-stone mt-2" />}
                </div>

                {/* Body */}
                <div className={i < steps.length - 1 ? 'pb-12' : ''}>
                  <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-umber-soft/70 mb-2.5">
                    {String(i + 1).padStart(2, '0')} · {time}
                  </p>
                  <p className="font-serif text-2xl text-umber mb-3">{title}</p>
                  <p className="lede max-w-xl">{body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

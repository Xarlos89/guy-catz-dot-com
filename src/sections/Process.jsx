const steps = [
  {
    step: '01',
    title: 'The consult',
    time: '15 minutes · free · by phone',
    body: 'You tell me what is going on and what you want to get back to. I tell you whether this practice is the right place for it — and if it is not, where to go instead.',
  },
  {
    step: '02',
    title: 'The evaluation',
    time: '90 minutes · in studio',
    body: 'A full movement assessment: how you breathe, load, balance and compensate. We finish with hands-on work, a first set of exercises, and a plain-English explanation of what we found.',
  },
  {
    step: '03',
    title: 'The work',
    time: '60 minutes · weekly at first',
    body: 'Manual therapy where it opens things up, then loaded movement to make the change hold. The home program is updated each visit and stays under fifteen minutes.',
  },
  {
    step: '04',
    title: 'The handover',
    time: 'When you are ready',
    body: 'The goal is to stop needing me. You leave with a maintenance practice, a plan for flare-ups, and an open door if something changes.',
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-sand py-20 sm:py-28 border-t border-stone">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <p className="label mb-3">How it works</p>
          <h2 className="section-heading mb-4">From first call to last visit</h2>
          <p className="font-sans text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
            Most people are seen weekly for four to six weeks, then taper. No
            packages you have to buy up front, no contracts, no automatic rebooking.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {steps.map(({ step, title, time, body }, i) => (
            <div key={step} className="flex gap-5 sm:gap-8">
              {/* Rail */}
              <div className="flex flex-col items-center shrink-0">
                <div className="w-11 h-11 rounded-full bg-white border border-stone flex items-center justify-center">
                  <span className="font-serif font-bold text-clay text-sm">{step}</span>
                </div>
                {i < steps.length - 1 && <div className="w-px flex-1 bg-stone" />}
              </div>

              {/* Body */}
              <div className={i < steps.length - 1 ? 'pb-8' : ''}>
                <p className="font-sans font-semibold text-bark text-sm">{title}</p>
                <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-gray-400 mt-1 mb-2.5">{time}</p>
                <p className="font-sans text-sm text-gray-500 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

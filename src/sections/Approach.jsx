import Photo from '../components/Photo'

const principles = [
  {
    title: 'Look at the whole body',
    body: 'A cranky shoulder is rarely a shoulder problem. We assess how you breathe, stand, load and rest before touching the sore part.',
  },
  {
    title: 'Load is the medicine',
    body: 'Tissue gets stronger when it is asked to. Rest has its place, but the road back almost always runs through graded, well-coached movement.',
  },
  {
    title: 'Calm the system',
    body: 'Pain lives in a nervous system, not just a joint. Breath, tempo and time under tension teach that system it is safe to move again.',
  },
]

const photos = [
  { src: null, alt: 'Hands-on assessment at the treatment table' },
  { src: null, alt: 'Breathwork on the mat before loading' },
  { src: null, alt: 'Kettlebell carry across the studio floor' },
  { src: null, alt: 'Coaching a hip hinge with a dowel' },
  { src: null, alt: 'Gait retraining barefoot on the turf strip' },
  { src: null, alt: 'Reviewing the home program together' },
]

export default function Approach() {
  return (
    <section id="approach" className="bg-sand py-20 sm:py-28 border-t border-stone">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="label mb-3">The approach · Holistic by habit</p>
          <h2 className="section-heading mb-5">Healing is not something done to you.</h2>
          <p className="font-sans text-gray-500 text-sm leading-relaxed">
            Holistic gets used loosely. Here it means something plain: we treat the
            person the pain belongs to. That means the hour looks at sleep, stress
            and the desk you sit at as seriously as it looks at your hip. Hands-on
            work opens a window; the movement you do in that window is what makes
            the change stick. You are not a passenger in this — you are the one
            doing the healing, and the job of this practice is to make the path
            obvious.
          </p>
        </div>

        {/* Feature photo */}
        <div className="rounded-3xl overflow-hidden shadow-lg aspect-[3/2] mb-3 sm:mb-4">
          <Photo src={null} alt="A session in progress in the Silver Lake studio" />
        </div>

        {/* Principles */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {principles.map(({ title, body }, i) => (
            <div key={title} className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-serif font-bold text-clay text-2xl leading-none mb-3">0{i + 1}</p>
              <p className="font-sans font-semibold text-bark text-sm mb-2">{title}</p>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Supporting grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {photos.map(({ src, alt }) => (
            <div key={alt} className="aspect-[4/3] rounded-2xl overflow-hidden">
              <Photo src={src} alt={alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

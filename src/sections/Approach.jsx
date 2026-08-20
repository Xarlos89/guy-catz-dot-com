import Photo from '../components/Photo'
import Reveal from '../components/Reveal'

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

export default function Approach() {
  return (
    <section id="approach" className="bg-fern pt-8 pb-24 sm:pb-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="label-light mb-6">The approach</p>
            <h2 className="section-heading-light mb-8">
              Healing is not something<br className="hidden sm:block" /> done to you.
            </h2>
            <p className="lede-light">
              Holistic gets used loosely. Here it means something plain: we treat
              the person the pain belongs to. Sleep, stress and the desk you sit
              at get taken as seriously as your hip. Hands-on work opens a window;
              the movement you do in that window is what makes the change stick.
              You are the one doing the healing — this practice just makes the
              path obvious.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-[3rem] overflow-hidden aspect-[21/9] mb-16 shadow-lift">
            <Photo src={null} alt="A session in progress in the studio" tone="dark" />
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-10 sm:gap-8">
          {principles.map(({ title, body }, i) => (
            <Reveal key={title} delay={i * 110}>
              <div className={`sm:px-6 ${i > 0 ? 'sm:border-l sm:border-linen/15' : 'sm:pl-0'}`}>
                <p className="font-serif text-ochre text-2xl leading-none mb-5">0{i + 1}</p>
                <p className="font-sans font-medium text-linen text-[15px] mb-3">{title}</p>
                <p className="font-sans text-[15px] text-linen/60 leading-relaxed">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

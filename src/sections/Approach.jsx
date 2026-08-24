import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import { site } from '../siteInfo'

const principles = [
  {
    title: 'Personalized attention',
    body: 'Time to understand each person\'s story, and a plan shaped around it. Your goals become my goals from the moment we begin working together.',
  },
  {
    title: 'Effective techniques',
    body: 'Hands-on care and progressive loading, chosen because the evidence supports them and because they suit you — not because they fill an hour.',
  },
  {
    title: 'A holistic approach',
    body: 'Recovery is more than healing an injury. It is restoring peace to mind and body, restoring confidence, strength, and quality of life.',
  },
]

export default function Approach() {
  return (
    <section id="approach" className="bg-fern pt-8 pb-24 sm:pb-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="label-light mb-6">The Healing Path approach</p>
            <h2 className="section-heading-light mb-8">
              Our bodies have an incredible<br className="hidden sm:block" /> capacity to heal.
            </h2>
            <p className="lede-light">
              Small changes in how we move can lead to meaningful improvements in
              our health, and ultimately help us reclaim our independence and
              well-being. Whether your goal is to return to your favorite sport,
              get back to work, get stronger after being discharged from
              hospital, or simply move through daily life with less pain — my
              focus is on restoring movement and function, reducing pain, and
              building strength through personalized, results-driven care.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-[3rem] overflow-hidden aspect-[21/9] mb-16 shadow-lift">
            <Photo src={null} alt={`${site.doctor} working with a patient`} tone="dark" />
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-10 sm:gap-8 mb-16">
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

        {/* The mission, in his own words */}
        <Reveal>
          <blockquote className="max-w-2xl mx-auto text-center">
            <p className="font-serif italic text-linen text-xl sm:text-2xl leading-[1.55] mb-6">
              “My mission is to empower every patient with the knowledge, tools,
              and confidence to take an active role in their recovery and enjoy
              lasting results. I look forward to being a trusted ally on your
              healing journey.”
            </p>
            <footer className="font-sans text-[13px] tracking-[0.16em] uppercase text-ochre">
              {site.doctor}, {site.credentials}
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}

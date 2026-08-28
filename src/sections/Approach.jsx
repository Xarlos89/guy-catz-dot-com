import Photo from '../components/Photo'
import Reveal from '../components/Reveal'

/**
 * The client's own copy, in his order, unbroken.
 * Do not split these paragraphs across cards or move sentences into other
 * sections — they were written to be read as one piece. See CLAUDE.md.
 */
const paragraphs = [
  `Recovery is more than healing an injury — it's about restoring peace to mind and body, restoring confidence, strength, and quality of life.`,
  `Healing Path Rehabilitation is based on the belief that exceptional physical therapy requires personalized attention, effective techniques, and a comprehensive, holistic approach. By offering one-on-one care, I am able to treat you in the comfort of your home, at my office in West LA, or via telehealth, and can focus entirely on your goals without the constraints often resulting from insurance-driven care models.`,
  `I know what it feels like to wait weeks or months for appointments, to feel unheard, to receive fragmented care, or to leave appointments without a clear path forward. Those experiences taught me the importance of taking the time to understand each person's story, and creating treatment plans that are both evidence-based and deeply personalized. Those experiences inspired me to create Healing Path Rehabilitation.`,
  `Our bodies have an incredible capacity to adapt, heal, and become stronger. Small changes in how we move can lead to meaningful improvements in our health, and ultimately help us reclaim our independence and well-being.`,
  `Whether your goal is to return to your favorite sport, get back to work, get stronger after being discharged from the hospital, or simply move through daily life with less pain and greater confidence, your goals become my goals from the moment we begin working together. My focus is on restoring movement and function, reducing pain, and building strength through personalized, results-driven care — supporting you every step of the way.`,
  `I am committed to helping you get there. My mission is to empower every patient with the knowledge, tools, and confidence to take an active role in their recovery and enjoy lasting results.`,
  `I look forward to meeting you and being a trusted ally on your healing journey.`,
]

export default function Approach() {
  return (
    <section id="approach" className="bg-linen py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <Reveal>
          <h2 className="section-heading mb-12">The Healing Path Approach</h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="rounded-[3rem] overflow-hidden aspect-[21/9] mb-14 shadow-soft">
            <Photo src={null} alt="Guy Catz working with a patient" />
          </div>
        </Reveal>

        {/* One measure, generous spacing — readability comes from typography,
            not from chopping the text into cards. */}
        <Reveal delay={120}>
          <div className="space-y-7">
            {paragraphs.map((text, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? 'font-serif text-xl sm:text-2xl text-fern leading-[1.5]'
                    : 'font-sans text-[16px] sm:text-[17px] text-umber-soft leading-[1.85]'
                }
              >
                {text}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import { responsivePhoto } from '../images'
import { site } from '../siteInfo'

/**
 * The client's own copy, in his order, unbroken — including the closing
 * education paragraph, which belongs at the end as a paragraph and must not
 * be broken out into a credentials grid. See CLAUDE.md.
 */
const paragraphs = [
  `Throughout my life, I've been drawn to movement and the outdoors. As a child, I climbed kitchen counters, rooftops, and trees. Since 2010, that same adventurous spirit and love of nature evolved into rock climbing — one of my greatest passions. I also enjoy beach volleyball, weightlifting, and calisthenics.`,
  `As an athlete and finalist featured on the shows Superhuman FOX and American Ninja Warrior, I know what it takes to overcome obstacles, recover from injuries, and get to the next level.`,
  `My journey to becoming a Doctor of Physical Therapy was inspired by both professional experience and personal insight as a patient. Those experiences shaped my commitment to providing the compassionate, personalized care I once sought myself.`,
  `A back injury from Muay Thai training in my late teens left me with debilitating sciatic pain. As I searched for answers, I discovered the transformative benefits of massage therapy and experienced firsthand how skilled, hands-on care could support the body's natural healing process. Inspired by my own recovery, I became a Licensed Massage Therapist and worked in spas, chiropractic and physical therapy clinics, and private practice, helping patients recover from pain, restore mobility, and improve their overall well-being.`,
  `As an athlete with ten years of experience in fitness and rehabilitation, I built a multidisciplinary career as a personal trainer, fitness instructor, coach, rock climbing instructor, and licensed massage therapist — helping clients improve their health, recover from injury, and achieve their fitness goals.`,
  `As a Doctor of Physical Therapy, I am dedicated to helping people restore movement, build strength, and improve their quality of life through compassionate, evidence-based care. My experience spans both Acute Care, Acute Inpatient Rehabilitation, Home Health and Outpatient settings — treating adults with neurological, cardiac, vestibular, orthopedic, and degenerative conditions.`,
  `I grew up in Los Angeles. I earned my Bachelor of Science in Kinesiology from California State University, Northridge, and my Doctor of Physical Therapy degree from Russell Sage College in Troy, New York.`,
]

export default function About() {
  return (
    <section id="about" className="bg-fern py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">

          {/* Portrait */}
          <Reveal>
            <div className="photo-frame rounded-[2.5rem] sm:rounded-[3rem] aspect-[4/5] shadow-deep md:sticky md:top-24">
              {/* The slot is 4/5 and object-cover; ~381px wide at `lg`,
                  full container width once the grid stacks below `md`. */}
              <Photo
                {...responsivePhoto('meet-the-doctor', [400, 800, 1154])}
                sizes="(min-width: 768px) 381px, calc(100vw - 48px)"
                alt={`${site.doctor}, ${site.credentials}, at his ${site.neighborhood} office`}
                width={1154}
                height={1600}
              />
            </div>
          </Reveal>

          {/* His words, whole */}
          <Reveal delay={120}>
            <h2 className="section-heading-light mb-3">Meet Our Doctor</h2>
            <p className="section-sub-light mb-10">
              {site.doctor}, {site.credentials}
            </p>

            <div className="max-w-[62ch] space-y-7">
              {paragraphs.map((text, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? 'font-serif text-xl text-cream leading-[1.55]'
                      : 'font-sans text-[16px] text-cream/80 leading-[1.85]'
                  }
                >
                  {text}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

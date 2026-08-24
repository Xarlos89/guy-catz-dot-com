import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import { site } from '../siteInfo'

const facts = [
  {
    label: 'Education',
    items: ['BS Kinesiology — CSU Northridge', 'Doctor of Physical Therapy — Russell Sage College, Troy, NY'],
  },
  {
    label: 'Clinical settings',
    items: ['Acute care', 'Acute inpatient rehabilitation', 'Home health', 'Outpatient'],
  },
  {
    label: 'Also licensed as',
    items: ['Licensed Massage Therapist', 'Personal trainer, coach and rock climbing instructor'],
  },
  {
    label: 'Featured on',
    items: ['Superhuman (FOX) — finalist', 'American Ninja Warrior'],
  },
]

export default function About() {
  return (
    <section id="about" className="bg-oat py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Portrait — organic corner radius, no frame */}
          <Reveal>
            <div className="relative md:sticky md:top-24">
              <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-lift">
                <Photo src={null} alt={`Portrait of ${site.doctor}, ${site.credentials}`} />
              </div>
              <div className="absolute -bottom-5 -right-2 sm:right-6 bg-linen rounded-full pl-5 pr-6 py-4 shadow-soft">
                <p className="font-sans text-[11px] tracking-[0.16em] uppercase text-umber-soft leading-none mb-1.5">Climbing since</p>
                <p className="font-serif text-lg text-fern leading-none">2010</p>
              </div>
            </div>
          </Reveal>

          {/* Story */}
          <Reveal delay={120}>
            <p className="label mb-6">Meet our doctor</p>
            <h2 className="section-heading mb-3">{site.doctor}</h2>
            <p className="font-sans text-[13px] tracking-[0.18em] uppercase text-umber-soft mb-8">
              {site.credentials}
            </p>

            <div className="space-y-6">
              <p className="lede">
                Throughout my life I've been drawn to movement and the outdoors.
                As a child I climbed kitchen counters, rooftops and trees. Since
                2010 that same adventurous spirit has gone into rock climbing —
                one of my greatest passions — alongside beach volleyball,
                weightlifting and calisthenics.
              </p>
              <p className="lede">
                As an athlete and a finalist featured on Superhuman (FOX) and
                American Ninja Warrior, I know what it takes to overcome
                obstacles, recover from injuries, and get to the next level.
              </p>
              <p className="lede">
                My route into physical therapy was personal as much as
                professional. A back injury from Muay Thai training in my late
                teens left me with debilitating sciatic pain. Searching for
                answers, I discovered how much skilled, hands-on care could
                support the body's natural healing — so I became a Licensed
                Massage Therapist, working in spas, chiropractic and physical
                therapy clinics, and private practice, helping people recover
                from pain and restore mobility.
              </p>
              <p className="lede">
                Ten years in fitness and rehabilitation followed — personal
                trainer, fitness instructor, coach, rock climbing instructor,
                massage therapist. As a Doctor of Physical Therapy I now work
                across acute care, acute inpatient rehabilitation, home health
                and outpatient settings, treating adults with neurological,
                cardiac, vestibular, orthopedic and degenerative conditions.
              </p>
              <p className="lede">
                I grew up in Los Angeles. Those years as a patient shaped my
                commitment to providing the compassionate, personalized care I
                was once looking for myself.
              </p>
            </div>

            {/* Credentials */}
            <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-8 mt-12 pt-10 border-t border-stone">
              {facts.map(({ label, items }) => (
                <div key={label}>
                  <dt className="label mb-3">{label}</dt>
                  <dd>
                    <ul className="space-y-2">
                      {items.map((item) => (
                        <li key={item} className="flex items-start gap-3 font-sans text-[14px] text-umber-soft leading-relaxed">
                          <span aria-hidden="true" className="mt-2 w-1 h-1 rounded-full bg-sage-deep shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

import Reveal from '../components/Reveal'

const experience = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75A3.75 3.75 0 005.25 7.5v1.06A3 3 0 004.5 14.4v.6a3.75 3.75 0 003.75 3.75h.75V3.75H9zM15 3.75a3.75 3.75 0 013.75 3.75v1.06a3 3 0 01.75 5.84v.6a3.75 3.75 0 01-3.75 3.75H15V3.75z" />
      </svg>
    ),
    title: 'Neurological',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M8.25 6.75h7.5M7.5 11.25h9M8.25 15.75h7.5" />
      </svg>
    ),
    title: 'Orthopedic',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12.75h3l1.5-3 3 6 2.25-4.5 1.5 1.5h5.25" />
      </svg>
    ),
    title: 'Cardiopulmonary',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 5.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12.75 9v5.25l3 5.25M12.75 12L8.25 10.5 6 14.25M12 14.25L9.75 19.5" />
      </svg>
    ),
    title: 'Geriatric',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.5l2.4 5.2 5.6 1-4 4 1 5.8-5-2.9-5 2.9 1-5.8-4-4 5.6-1L12 3.5z" />
      </svg>
    ),
    title: 'Sports',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-5 h-5">
        <circle cx="12" cy="12" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 016.36 15.36M12 21a9 9 0 01-6.36-15.36" />
      </svg>
    ),
    title: 'Vestibular',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c0-5 2.5-9 7-11-1 5.5-3.5 9-7 11zm0 0c0-5-2.5-9-7-11 1 5.5 3.5 9 7 11zm0 0v-6" />
      </svg>
    ),
    title: 'Oncological',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v10.5M6.75 12h10.5" />
        <circle cx="12" cy="12" r="8.25" />
      </svg>
    ),
    title: 'Complex medical',
  },
]

const provided = [
  'Diagnose and treat injuries',
  'Osteopathic / manual therapy techniques',
  'Strengthening',
  'Post-op recovery',
  'Post-hospitalization recovery & home safety',
  'Cupping',
  'Neuromuscular reeducation',
  'Improving biomechanics',
  'Mobility restoration',
  'Balance training',
  'Transfer training',
  'Equipment & home modification recommendations',
  'Prescribing and training with assistive devices',
  'Conditioning',
  'Return to sport',
  'Return to work',
  'Ergonomics',
  'Patient education',
  'Home exercise programming',
]

export default function Services() {
  return (
    <section id="services" className="bg-fern py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <Reveal>
          <div className="max-w-2xl mb-14">
            <h2 className="section-heading-light mb-8">Services</h2>
            {/* The client's own paragraph, verbatim — do not split it. */}
            <p className="lede-light">
              I provide a holistic, patient-centered approach to ensure peak
              functional outcomes and facilitate a smooth return to optimal
              health. Atmosphere matters — this is why it is of paramount
              importance that every person I work with feels cared for, heard and
              understood throughout their recovery process. Upon completing a
              comprehensive initial evaluation, a curated plan of care will be
              tailored to achieve each patient's goals and needs. My goal is to
              get you back to doing what you love, helping you feel your best and
              improving your quality of life by reducing pain and improving your
              functional mobility.
            </p>
          </div>
        </Reveal>

        {/* Areas of experience */}
        <Reveal>
          <p className="label-light mb-7">Experienced in</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-1 mb-16">
          {experience.map(({ icon, title }, i) => (
            <Reveal key={title} delay={(i % 4) * 80} className="h-full">
              <div className="flex items-center gap-3.5 py-4 border-b border-cream/10 h-full">
                <span className="text-ochre shrink-0">{icon}</span>
                <p className="font-sans text-cream text-[15px]">{title} rehabilitation</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* What that involves */}
        <Reveal>
          <div className="soft-card-dark sm:p-10">
            <p className="label-light mb-7">What that involves</p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-3.5">
              {provided.map((item) => (
                <li key={item} className="flex items-start gap-3 font-sans text-[14px] text-cream/80 leading-relaxed">
                  <span aria-hidden="true" className="mt-2 w-1 h-1 rounded-full bg-ochre shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

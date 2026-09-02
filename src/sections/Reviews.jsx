import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import { responsivePhoto } from '../images'
import { site } from '../siteInfo'

// Real patient testimonials, supplied by the practice.
// Keep them verbatim — edit only with the patient's permission.
const featured = {
  name: 'Deana',
  age: 53,
  text: `Dr. Guy Catz gets a 20 out of 5. He is such an amazing physical therapist and person — I don't even know where to begin. He pushes me, he's attentive. He knows his job and every part of the body so well. He's patient and he listens. Just wonderful. I arrived at the rehab hospital unable to walk or get out of bed, stiff as a board. I was scared. He was the one who got me moving and gave me hope. I said, “Guy, I want to walk out of the hospital”, he looked at me and said “I'm going to get you there”. I told him all of my goals and he actually got me to achieve each and every one of them. I can't be more thankful.`,
}

const reviews = [
  {
    name: 'Lina',
    age: 67,
    text: `Dr. Guy is realms above any PT I have experienced. His expertise, compassion and natural healing ability made such a life-changing impact on me during my treatments. The healing experience I had through him was so profound I shared it with my meditation group. I came into the clinic for my right shoulder, and simply mentioned to him that I had a severe headache. Instead of ignoring it and only focusing on my shoulder, what is covered by insurance, like most PTs would — he told me to close my eyes, he placed his hands on my neck and head, and I could feel he was channeling healing energy. My pain was fading away. I opened my eyes to see that his eyes were closed. This is the intention Guy brings to his patients. Many others will be blessed and so grateful to have experienced his loving, healing energy, and I have no doubt he will make such a difference in so many people's lives on their road to recovery.`,
  },
  {
    name: 'Miriam',
    age: 74,
    text: `I was a patient of Guy's in his early days, before he graduated from his DPT program, and he was even the best then. He is a light for all those who have the privilege of working with him.`,
  },
]

/**
 * The Care Hero award.
 *
 * The client asked for the certificate photograph — the one with his face on
 * it — to close the testimonials in place of the typeset version below. That
 * file is NOT in the repo: nothing named for it has ever been committed, and
 * it cannot be invented. Drop
 * public/images/care-hero-award-{600,1000,1600}.webp in (see CLAUDE.md →
 * Adding photos for the encode) and set `awardPhoto` to
 * responsivePhoto('care-hero-award', AWARD_WIDTHS) — the section swaps to the
 * photograph and the typeset card stops rendering.
 *
 * Until then the typeset version stands, so the award is still on the page
 * rather than replaced by a hole. It carries the same substance, verbatim.
 *
 * TODO — needs the practice to fill in: `issuer` is the hospital that gave the
 * award and `period` is when (he said "last year"). Both render only once they
 * are set; nothing is guessed. Keep the original certificate on file — an
 * employer award is the hospital's to publish, so their sign-off is worth
 * having alongside the patients' before this goes live.
 */
const AWARD_WIDTHS = [600, 1000, 1600]

// Set to responsivePhoto('care-hero-award', AWARD_WIDTHS) once the files land.
const awardPhoto = null

const award = {
  label: `Patient's Choice`,
  title: 'Care Hero of the Month',
  issuer: '',
  period: '',
  citation: `Guy received the most Care Hero shout outs on the daily Patient Care Report and discharge satisfaction surveys last month. Patients always compliment his kindness and his ability to connect with them.`,
  quotes: [
    `I love Guy — he's very kind.`,
    `Really good work outs and he explains everything. He's very uplifting.`,
  ],
}

function Attribution({ name, age }) {
  return (
    <figcaption className="font-sans text-[13px] text-cream/75">
      <span className="font-medium text-cream">{name}</span>, {age}
    </figcaption>
  )
}

export default function Reviews() {
  const provenance = [award.issuer, award.period].filter(Boolean).join(' · ')

  return (
    <section id="reviews" className="bg-fern py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <Reveal>
          <div className="max-w-2xl mb-14">
            <h2 className="section-heading-light mb-3">Testimonials</h2>
            <p className="section-sub-light">In their words</p>
          </div>
        </Reveal>

        {/* The long one, given room */}
        <Reveal>
          <figure className="max-w-3xl mb-16">
            <span aria-hidden="true" className="block font-serif text-6xl text-ochre/60 leading-none mb-4">&rdquo;</span>
            <blockquote className="font-serif text-xl sm:text-2xl text-cream leading-[1.55] mb-6">
              {featured.text}
            </blockquote>
            <Attribution name={featured.name} age={featured.age} />
          </figure>
        </Reveal>

        <div className="grid md:grid-cols-[1.35fr_1fr] gap-x-12 gap-y-12 items-start">
          <Reveal>
            <figure>
              <span aria-hidden="true" className="block font-serif text-5xl text-ochre/60 leading-none mb-3">&rdquo;</span>
              <blockquote className="font-sans text-[15px] text-cream/80 leading-[1.85] mb-5">
                {reviews[0].text}
              </blockquote>
              <Attribution name={reviews[0].name} age={reviews[0].age} />
            </figure>
          </Reveal>

          <Reveal delay={110}>
            <figure className="soft-card-dark sm:p-9 md:mt-10">
              <blockquote className="font-serif text-lg sm:text-xl text-cream leading-[1.6] mb-5">
                {reviews[1].text}
              </blockquote>
              <Attribution name={reviews[1].name} age={reviews[1].age} />
            </figure>
          </Reveal>
        </div>

        {/* The award. A different kind of thing from a testimonial, so it sits
            apart at the end rather than in the run of quotes — but the two
            patient comments on it are testimonials, and they read as such. */}
        {awardPhoto ? (
          <Reveal>
            <figure className="mt-16 sm:mt-20 max-w-2xl">
              <div className="photo-frame rounded-[2rem] sm:rounded-[2.5rem] shadow-deep">
                <Photo
                  {...awardPhoto}
                  sizes="(min-width: 768px) 672px, calc(100vw - 48px)"
                  alt={`${award.title} certificate awarded to ${site.doctor}, ${site.credentials}`}
                  natural
                  tone="dark"
                />
              </div>
              <figcaption className="font-sans text-[13px] text-cream/75 mt-4">
                {[award.title, provenance].filter(Boolean).join(' · ')}
              </figcaption>
            </figure>
          </Reveal>
        ) : (
        <Reveal>
          <div className="soft-card-dark sm:p-10 mt-16 sm:mt-20 max-w-4xl">
            {/* No badge or laurel glyph: the ochre label is the only accent
                the rest of the page would give this, and a piece of award
                clip-art is the one loud thing this design does not have */}
            <div className="mb-7">
              <p className="label-light mb-3">{award.label}</p>
              <h3 className="font-serif text-2xl sm:text-[1.75rem] text-cream leading-[1.25]">
                {award.title}
              </h3>
              {provenance && (
                <p className="font-sans text-[13px] text-cream/75 mt-2.5">{provenance}</p>
              )}
            </div>

            <blockquote className="font-sans text-[15px] text-cream/80 leading-[1.85] max-w-2xl mb-9">
              {award.citation}
            </blockquote>

            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
              {award.quotes.map((quote) => (
                <li key={quote} className="flex items-start gap-3">
                  <span aria-hidden="true" className="font-serif text-2xl text-ochre/60 leading-[0.9] shrink-0">
                    &rdquo;
                  </span>
                  <blockquote className="font-serif text-lg text-cream leading-[1.55]">
                    {quote}
                  </blockquote>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        )}
      </div>
    </section>
  )
}

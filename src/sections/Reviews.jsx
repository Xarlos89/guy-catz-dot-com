import Reveal from '../components/Reveal'

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

function Attribution({ name, age }) {
  return (
    <figcaption className="font-sans text-[13px] text-ink-soft">
      <span className="font-medium text-ink">{name}</span>, {age}
    </figcaption>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-haze py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <Reveal>
          <div className="max-w-2xl mb-14">
            <p className="label mb-6">Testimonials</p>
            <h2 className="section-heading">In their words</h2>
          </div>
        </Reveal>

        {/* The long one, given room */}
        <Reveal>
          <figure className="max-w-3xl mb-16">
            <span aria-hidden="true" className="block font-serif text-6xl text-sage leading-none mb-4">&rdquo;</span>
            <blockquote className="font-serif text-xl sm:text-2xl text-ink leading-[1.55] mb-6">
              {featured.text}
            </blockquote>
            <Attribution name={featured.name} age={featured.age} />
          </figure>
        </Reveal>

        <div className="grid md:grid-cols-[1.35fr_1fr] gap-x-12 gap-y-12 items-start">
          <Reveal>
            <figure>
              <span aria-hidden="true" className="block font-serif text-5xl text-sage leading-none mb-3">&rdquo;</span>
              <blockquote className="font-sans text-[15px] text-ink-soft leading-[1.85] mb-5">
                {reviews[0].text}
              </blockquote>
              <Attribution name={reviews[0].name} age={reviews[0].age} />
            </figure>
          </Reveal>

          <Reveal delay={110}>
            <figure className="soft-card sm:p-9 md:mt-10">
              <blockquote className="font-serif text-lg sm:text-xl text-ink leading-[1.6] mb-5">
                {reviews[1].text}
              </blockquote>
              <Attribution name={reviews[1].name} age={reviews[1].age} />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

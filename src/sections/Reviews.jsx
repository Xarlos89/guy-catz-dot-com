import Reveal from '../components/Reveal'

// PLACEHOLDER — sample copy standing in for real client reviews.
// Replace with genuine testimonials (with permission) before launch,
// and remove the <PlaceholderNote /> banner below.
const reviews = [
  {
    name: 'Client name',
    detail: 'Runner · Echo Park',
    text: 'Placeholder testimonial — a couple of sentences about what they came in with and what changed.',
  },
  {
    name: 'Client name',
    detail: 'Post-op knee · Los Feliz',
    text: 'Placeholder testimonial — something specific about the pace of the sessions and the home program.',
  },
  {
    name: 'Client name',
    detail: 'Desk worker · Downtown',
    text: 'Placeholder testimonial — a line about being listened to, and leaving with an explanation.',
  },
  {
    name: 'Client name',
    detail: 'Weightlifter · Highland Park',
    text: 'Placeholder testimonial — a note about getting back to training without flare-ups.',
  },
]

function PlaceholderNote() {
  return (
    <p className="font-sans text-[12px] tracking-wide text-terracotta-deep bg-terracotta/10 rounded-full inline-block px-5 py-2">
      Placeholder copy — awaiting real client reviews
    </p>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-oat pt-8 pb-24 sm:pb-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <Reveal>
          <div className="max-w-2xl mb-14">
            <p className="label mb-6">Reviews</p>
            <h2 className="section-heading mb-7">In their words</h2>
            <PlaceholderNote />
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
          {reviews.map(({ name, detail, text }, i) => (
            <Reveal key={i} delay={(i % 2) * 110}>
              <figure>
                <span aria-hidden="true" className="block font-serif text-5xl text-sage leading-none mb-4">&rdquo;</span>
                <blockquote className="font-serif text-xl text-umber leading-[1.55] mb-5">
                  {text}
                </blockquote>
                <figcaption className="font-sans text-[13px] text-umber-soft">
                  <span className="font-medium text-umber">{name}</span>
                  <span className="mx-2 text-stone">·</span>
                  {detail}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

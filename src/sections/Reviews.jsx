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
    text: 'Placeholder testimonial — a line about being listened to and leaving with an explanation.',
  },
  {
    name: 'Client name',
    detail: 'Weightlifter · Highland Park',
    text: 'Placeholder testimonial — a note about getting back to training without flare-ups.',
  },
]

function Stars({ center = false }) {
  return (
    <div className={`flex gap-0.5${center ? ' justify-center' : ''}`}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-clay" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function PlaceholderNote() {
  return (
    <p className="font-sans text-[11px] tracking-wide text-clay bg-clay/10 border border-clay/25 rounded-full inline-block px-4 py-1.5 mb-8">
      Placeholder copy — awaiting real client reviews
    </p>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-sand py-20 sm:py-28 border-t border-stone">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <p className="label mb-4">Reviews</p>
          <h2 className="section-heading mb-4">In their words</h2>
          <Stars center />
          <p className="font-sans text-sm text-gray-400 mt-3 mb-6">
            What people say after a course of sessions.
          </p>
          <PlaceholderNote />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {reviews.map(({ name, detail, text }, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 relative">
              <div className="flex items-start justify-between mb-3">
                <Stars />
                <span className="font-serif text-4xl leading-none text-clay/25 -mt-2">"</span>
              </div>
              <p className="font-sans text-sm text-gray-600 leading-relaxed mb-4">"{text}"</p>
              <div>
                <p className="font-sans font-semibold text-bark text-sm">{name}</p>
                <p className="font-sans text-xs text-gray-400">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

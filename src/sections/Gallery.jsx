import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import { site } from '../siteInfo'

// Drop files into public/images/ and fill in `src` — a null src renders
// the "photo coming soon" placeholder instead.
// `tall` gives a slot a portrait crop, which keeps the grid from marching.
const photos = [
  { src: null, alt: 'The West LA treatment room, morning light', tall: true },
  { src: null, alt: 'Hands-on manual therapy at the table' },
  { src: null, alt: 'The strength and loading area' },
  { src: null, alt: 'A home visit — working with what the room has', tall: true },
  { src: null, alt: 'Balance and gait retraining' },
  { src: null, alt: 'Reviewing a home program together' },
]

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="pt-24 sm:pt-32 pb-24 sm:pb-32"
      style={{ background: 'linear-gradient(180deg, #FBF7F1 0%, #EADFD1 38%, #EADFD1 100%)' }}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <Reveal>
          <div className="max-w-2xl mb-14">
            <p className="label mb-6">The practice</p>
            <h2 className="section-heading mb-6">Where the work happens</h2>
            <p className="lede">
              A private room in {site.neighborhood}, or your own front room — no
              queue, no televisions, and no one else booked over the top of your
              hour.
            </p>
          </div>
        </Reveal>

        <div className="columns-2 md:columns-3 gap-4 sm:gap-5 [column-fill:_balance]">
          {photos.map(({ src, alt, tall }, i) => (
            <Reveal key={alt} delay={(i % 3) * 90} className="mb-4 sm:mb-5 break-inside-avoid">
              <div className={`rounded-[2rem] overflow-hidden ${tall ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
                <Photo src={src} alt={alt} imgClassName="hover:scale-[1.04] transition-transform duration-[1200ms] ease-out" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

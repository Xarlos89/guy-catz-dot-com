import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import { site } from '../siteInfo'

// Drop files into public/images/ and fill in `src` — a null src renders
// the "photo coming soon" placeholder instead. Photos keep their own aspect
// ratio here (`natural`); a fixed ratio cropped faces and hands out of frame.
const photos = [
  { src: '/images/neck-manual-therapy.webp', alt: 'Hands-on work at the neck, talking the patient through it' },
  { src: '/images/hip-knee-mobilization.webp', alt: 'Guiding a patient through hip and knee range of motion' },
  { src: '/images/shoulder-range.webp', alt: 'Assessing shoulder range of motion' },
  { src: '/images/breathing-coaching.webp', alt: 'Coaching a breathing pattern, hand on chest and belly' },
  { src: '/images/low-back-manual-therapy.webp', alt: 'Manual therapy along the lower back' },
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
          {photos.map(({ src, alt }, i) => (
            <Reveal key={alt} delay={(i % 3) * 90} className="mb-4 sm:mb-5 break-inside-avoid">
              <div className="rounded-[2rem] overflow-hidden">
                <Photo
                  src={src}
                  alt={alt}
                  natural
                  imgClassName="hover:scale-[1.04] transition-transform duration-[1200ms] ease-out"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import { site } from '../siteInfo'

// Drop files into public/images/ and fill in `src` — a null src renders
// the "photo coming soon" placeholder instead. Photos keep their own aspect
// ratio here (`natural`); a fixed ratio cropped faces and hands out of frame.
// `width`/`height` are the file's own pixel dimensions — they reserve the slot
// so the column does not jump as each lazy image arrives.
const photos = [
  { src: '/images/neck-manual-therapy.webp', alt: 'Hands-on work at the neck, talking the patient through it', width: 1200, height: 1800 },
  { src: '/images/hip-knee-mobilization.webp', alt: 'Guiding a patient through hip and knee range of motion', width: 1800, height: 1508 },
  { src: '/images/shoulder-range.webp', alt: 'Assessing shoulder range of motion', width: 1200, height: 1698 },
  { src: '/images/breathing-coaching.webp', alt: 'Coaching a breathing pattern, hand on chest and belly', width: 1200, height: 1713 },
  { src: '/images/low-back-manual-therapy.webp', alt: 'Manual therapy along the lower back', width: 1200, height: 1779 },
]

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-mist pt-24 sm:pt-32 pb-24 sm:pb-32"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <Reveal>
          <div className="max-w-2xl mb-14">
            <p className="label mb-6">The practice</p>
            <h2 className="section-heading mb-6">Where the work happens</h2>
            <p className="lede">
              A private room in {site.neighborhood}, or your own front room —
              wherever you are most comfortable moving.
            </p>
          </div>
        </Reveal>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-5 sm:gap-5 [column-fill:_balance]">
          {photos.map(({ src, alt, width, height }, i) => (
            <Reveal key={alt} delay={(i % 3) * 90} className="mb-5 break-inside-avoid">
              <div className="photo-frame rounded-[2rem]">
                <Photo
                  src={src}
                  alt={alt}
                  natural
                  width={width}
                  height={height}
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

import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import { responsivePhoto } from '../images'
import { site } from '../siteInfo'

// Drop files into public/images/ at each of the widths below and add a row —
// an entry with no `name` renders the "photo coming soon" placeholder instead.
// Photos keep their own aspect ratio here (`natural`); a fixed ratio cropped
// faces and hands out of frame. `width`/`height` are the largest variant's own
// pixel dimensions — they reserve the slot so the column does not jump as each
// lazy image arrives.
const WIDTHS = [400, 700, 1100]

// A slot is ~306px wide once the grid is three columns, ~half the viewport at
// `sm`, and full width on a phone. Telling the browser that lets it pick a
// 400px file for a 400px hole instead of an 1100px one.
const SIZES =
  '(min-width: 768px) 306px, (min-width: 640px) calc((100vw - 84px) / 2), calc(100vw - 48px)'

const photos = [
  { name: 'neck-manual-therapy', alt: 'Hands-on work at the neck, talking the patient through it', width: 1100, height: 1650 },
  { name: 'hip-knee-mobilization', alt: 'Guiding a patient through hip and knee range of motion', width: 1100, height: 922 },
  { name: 'shoulder-range', alt: 'Assessing shoulder range of motion', width: 1100, height: 1556 },
  { name: 'breathing-coaching', alt: 'Coaching a breathing pattern, hand on chest and belly', width: 1100, height: 1570 },
  { name: 'low-back-manual-therapy', alt: 'Manual therapy along the lower back', width: 1100, height: 1631 },
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
          {photos.map(({ name, alt, width, height }, i) => (
            <Reveal key={alt} delay={(i % 3) * 90} className="mb-5 break-inside-avoid">
              <div className="photo-frame rounded-[2rem]">
                <Photo
                  {...responsivePhoto(name, WIDTHS)}
                  sizes={SIZES}
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

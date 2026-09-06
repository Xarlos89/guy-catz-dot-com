import { site } from '../siteInfo'
import { responsivePhoto } from '../images'

const settings = ['At your home', `${site.neighborhood} office`, 'Telehealth']

// The practice's own emblem, recoloured for this band — cream for the cool
// artwork, ochre for the greens, white ground dropped to transparency. The
// supplied file is navy on white, which is 1.3:1 against `fern`; see
// scripts/build-logo-mark.py, which is what generated these.
const mark = responsivePhoto('healing-path-mark', [200, 340, 680])

/**
 * A band like every other band: one flat tone, a curved seam below it, and the
 * page-level grain for texture. No photograph — the client did not want one
 * here — and no gradient or blurred washes either: those made the opening read
 * as a different design language from the sections under it.
 *
 * This is the dark band, so everything in here is the light-on-dark variant:
 * `.label-light`, cream type, ochre for the emphasis (a fern `<em>` on a fern
 * ground is invisible), and `.btn-primary-light` — the terracotta pill sits at
 * 1.4:1 against `fern` and all but disappears.
 *
 * Laid out mobile-first: one left edge that every element lines up on, a
 * headline that wraps on its own below `sm` (the hard break is desktop-only),
 * and full-width stacked buttons so nothing sits ragged on a phone.
 *
 * The emblem is one element that moves rather than two that duplicate. On a
 * phone it is a small mark above the label — the navbar does not appear until
 * 120px of scroll, so without it the top of the page carries no logo at all.
 * From `lg` the explicit grid placement puts it in the right-hand column
 * *beside the paragraph*, not beside the headline: the headline spans both
 * columns because it needs its full `max-w-3xl` measure at the top of its
 * `clamp()`, and squeezing it to make room broke "healing an injury" onto a
 * third line. The blank the client pointed at is the area to the right of the
 * paragraph and the buttons, which is exactly the cell the mark now fills.
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="hero-height bg-fern relative flex items-center pt-24 pb-16 sm:pt-32 sm:pb-28"
    >
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_248px] xl:grid-cols-[minmax(0,1fr)_288px] lg:gap-x-12 lg:items-center">
          {/* Decorative: the practice name is set as text directly below it */}
          <img
            src={mark.src}
            srcSet={mark.srcSet}
            sizes="(min-width: 1280px) 288px, (min-width: 1024px) 248px, 68px"
            alt=""
            width={680}
            height={680}
            decoding="async"
            className="order-first lg:order-none lg:col-start-2 lg:row-start-2 w-[68px] h-auto mb-7 lg:mb-0 lg:w-full"
          />

          <div className="lg:col-span-2 lg:row-start-1 max-w-3xl">
            {/* The practice name leads the page now — it used to be the
                small spaced-caps label above a very large headline, and the
                client asked for that order of size reversed.

                It is the `h1` for the same reason it is the largest thing on
                the page: it names what this page is about. The tagline below
                is a `p`. That swap is purely semantic — the classes and the
                inline `fontSize` are unchanged and nothing moved by a pixel —
                but it puts the practice name and the doctor's credentials in
                the one heading search engines weight most, and it stops a
                screen reader jumping past the biggest text on the page to
                land on a tagline. Don't put the heading back on the tagline
                to "fix" the visual order; the order is already what he
                asked for. */}
            <h1 className="font-serif font-normal text-balance mb-5 sm:mb-7">
              {/* Two lines at every width — the name never fits beside the
                  doctor's line at this size, and a wrapped separator looked
                  broken */}
              <span
                className="block text-cream leading-[1.15] tracking-[-0.015em]"
                style={{
                  fontSize: 'clamp(1.7rem, 6.2vw, 3.1rem)',
                  fontVariationSettings: "'SOFT' 100, 'WONK' 1, 'opsz' 30",
                }}
              >
                {site.practice}
              </span>
              <span
                className="block text-ochre leading-[1.3] mt-1.5"
                style={{
                  fontSize: 'clamp(1.05rem, 3vw, 1.5rem)',
                  fontVariationSettings: "'SOFT' 100, 'WONK' 0, 'opsz' 26",
                }}
              >
                Dr. {site.doctor}, {site.credentials}
              </span>
            </h1>

            {/* Was the `h1`; see the note above. Styling is untouched. */}
            <p
              className="font-serif font-normal text-cream text-balance leading-[1.12] sm:leading-[1.06] tracking-[-0.02em] mb-6 sm:mb-8"
              style={{
                fontSize: 'clamp(1.45rem, 4.6vw, 2.3rem)',
                fontVariationSettings: "'SOFT' 100, 'WONK' 1, 'opsz' 30",
              }}
            >
              {/* The break is deliberate on desktop and in the way on a phone */}
              Recovery is <em className="text-ochre">more</em> than{' '}
              <br className="hidden sm:block" />
              healing an injury
            </p>
          </div>

          <div className="lg:col-start-1 lg:row-start-2 max-w-xl">
            <p className="font-sans text-[17px] sm:text-xl text-cream/80 leading-[1.75] mb-9 sm:mb-10">
              It's about restoring peace to mind and body — improving strength,
              confidence and quality of life. Compassionate care, a holistic
              approach, and one-on-one physical therapy with Dr. Guy Catz.
            </p>

            {/* Stacked and full-width on a phone, side by side from sm up */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4 mb-11 sm:mb-14">
              <a href="#book" className="btn-primary-light w-full sm:w-auto">
                Book a session
              </a>
              <a href={site.phoneHref} className="btn-ghost-light w-full sm:w-auto">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {site.phone}
              </a>
            </div>

            {/* One item per line on a phone, so the dots keep a single edge */}
            <ul className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
              {settings.map((item) => (
                <li key={item} className="flex items-center gap-2.5 font-sans text-[14px] sm:text-[13px] text-cream/80">
                  <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-ochre shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Scroll hint — a slow breath, not a bouncing arrow */}
      <div aria-hidden="true" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <span className="block w-px h-12 bg-gradient-to-b from-cream/45 to-transparent animate-breathe" />
      </div>
    </section>
  )
}

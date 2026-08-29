import { site } from '../siteInfo'

const settings = ['In your home', `${site.neighborhood} office`, 'Telehealth']

/**
 * A band like every other band: one flat tone, a curved seam below it, and the
 * page-level grain for texture. No photograph — the client did not want one
 * here — and no gradient or blurred washes either: those made the opening read
 * as a different design language from the eight sections under it.
 *
 * `mist` is the deepest of the light tones, so the page opens on colour rather
 * than on a pale field, and alternates from the first scroll.
 *
 * Laid out mobile-first: one left edge that every element lines up on, a
 * headline that wraps on its own below `sm` (the hard break is desktop-only),
 * and full-width stacked buttons so nothing sits ragged on a phone.
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="hero-height bg-mist relative flex items-center pt-24 pb-16 sm:pt-32 sm:pb-28"
    >
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl">
          <p className="label mb-5 sm:mb-7 leading-[1.9]">
            <span className="block sm:inline">{site.practice}</span>
            <span aria-hidden="true" className="hidden sm:inline"> · </span>
            <span className="block sm:inline">{site.city}</span>
          </p>

          <h1
            className="font-serif font-normal text-ink text-balance leading-[1.12] sm:leading-[1.06] tracking-[-0.02em] mb-6 sm:mb-8"
            style={{
              fontSize: 'clamp(2.05rem, 8.4vw, 4.4rem)',
              fontVariationSettings: "'SOFT' 100, 'WONK' 1, 'opsz' 34",
            }}
          >
            {/* The break is deliberate on desktop and in the way on a phone */}
            Recovery is <em className="text-fern">more</em> than{' '}
            <br className="hidden sm:block" />
            healing an injury
          </h1>

          <p className="font-sans text-[17px] sm:text-xl text-ink-soft leading-[1.75] max-w-xl mb-9 sm:mb-10">
            It's about restoring peace to mind and body — restoring confidence,
            strength, and quality of life. One-on-one physical therapy with
            {' '}{site.doctor}, {site.credentials}.
          </p>

          {/* Stacked and full-width on a phone, side by side from sm up */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4 mb-11 sm:mb-14">
            <a href="#book" className="btn-primary w-full sm:w-auto">
              Book a session
            </a>
            <a href={site.phoneHref} className="btn-ghost w-full sm:w-auto">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {site.phone}
            </a>
          </div>

          {/* One item per line on a phone, so the dots keep a single edge */}
          <ul className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
            {settings.map((item) => (
              <li key={item} className="flex items-center gap-2.5 font-sans text-[14px] sm:text-[13px] text-ink-soft">
                <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-sage-deep shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scroll hint — a slow breath, not a bouncing arrow */}
      <div aria-hidden="true" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <span className="block w-px h-12 bg-gradient-to-b from-ink-soft/45 to-transparent animate-breathe" />
      </div>
    </section>
  )
}

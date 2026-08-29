import { site } from '../siteInfo'

// Drop a file into public/images/ and set this to e.g. '/images/hero.webp'.
// While it is null the hero rests on the dawn gradient below — which is the
// intended look, not a fallback: an empty warm field reads calmer than a photo.
const heroImage = null

const settings = ['In your home', `${site.neighborhood} office`, 'Telehealth']

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[88vh] sm:min-h-[92vh] flex items-center pt-32 pb-24 sm:pb-28"
      style={{
        background:
          'linear-gradient(180deg, #E4EADF 0%, #F2EFE7 42%, #FBF7F1 100%)',
      }}
    >
      {/* Soft light — two slow-breathing washes rather than a hard image */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-32 -left-24 w-[46rem] h-[46rem] rounded-full blur-3xl animate-breathe"
          style={{ background: 'radial-gradient(circle, rgba(169,184,164,0.55) 0%, rgba(169,184,164,0) 68%)' }}
        />
        <div
          className="absolute -bottom-40 -right-32 w-[42rem] h-[42rem] rounded-full blur-3xl animate-drift"
          style={{ background: 'radial-gradient(circle, rgba(220,169,123,0.42) 0%, rgba(220,169,123,0) 70%)' }}
        />
      </div>

      {heroImage && (
        <img
          src={heroImage}
          alt={`${site.doctor} guiding a patient through a movement session`}
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          fetchpriority="high"
          decoding="async"
        />
      )}

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 w-full">
        <div className="max-w-3xl">
          <p className="label mb-7">{site.practice} · {site.city}</p>

          <h1
            className="font-serif font-normal text-umber leading-[1.06] tracking-[-0.02em] mb-8"
            style={{
              fontSize: 'clamp(2.6rem, 6.6vw, 4.4rem)',
              fontVariationSettings: "'SOFT' 100, 'WONK' 1, 'opsz' 34",
            }}
          >
            Recovery is <em className="text-fern">more</em> than<br />
            healing an injury
          </h1>

          <p className="font-sans text-lg sm:text-xl text-umber-soft leading-[1.7] max-w-xl mb-10">
            It's about restoring peace to mind and body — restoring confidence,
            strength, and quality of life. One-on-one physical therapy with
            {' '}{site.doctor}, {site.credentials}.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-14">
            <a href="#book" className="btn-primary">
              Book a session
            </a>
            <a href={site.phoneHref} className="btn-ghost">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {site.phone}
            </a>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {settings.map((item) => (
              <li key={item} className="flex items-center gap-2.5 font-sans text-[13px] text-umber-soft">
                <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-sage-deep" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scroll hint — a slow breath, not a bouncing arrow */}
      <div aria-hidden="true" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-3">
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-umber-soft/60">Breathe</span>
        <span className="w-px h-10 bg-gradient-to-b from-umber-soft/40 to-transparent animate-breathe" />
      </div>
    </section>
  )
}

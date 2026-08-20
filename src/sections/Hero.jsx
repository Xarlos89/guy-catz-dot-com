import { site } from '../siteInfo'

// Drop a file into public/images/ and set this to e.g. '/images/hero.webp'.
// While it is null the hero falls back to the layered moss gradient below.
const heroImage = null

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-end pb-20 overflow-hidden bg-moss">
      {/* Background */}
      {heroImage ? (
        <img
          src={heroImage}
          alt="Guy Catz guiding a client through a movement session"
          className="absolute inset-0 w-full h-full object-cover"
          fetchpriority="high"
          decoding="async"
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 55% at 78% 18%, rgba(193,113,74,0.38) 0%, rgba(38,51,43,0) 62%),' +
              'radial-gradient(ellipse 85% 65% at 12% 82%, rgba(143,161,137,0.30) 0%, rgba(38,51,43,0) 60%),' +
              'linear-gradient(170deg, #2F3E33 0%, #26332B 55%, #1C2620 100%)',
          }}
        />
      )}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-moss/90 via-moss/40 to-moss/25" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 w-full [text-shadow:0_2px_16px_rgba(28,38,32,0.45)]">
        <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/70 mb-5">
          {site.neighborhood} · {site.city}
        </p>

        <h1 className="font-serif font-bold text-white leading-[1.05] mb-6" style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)' }}>
          Guy Catz<br />
          <em>Physical Therapy</em>
        </h1>

        <p className="font-serif italic text-white/90 text-lg sm:text-xl max-w-md leading-snug mb-4">
          Holistic healing through movement — one hour, one person, no rush.
        </p>

        <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/60 mb-8">
          Your body already knows the way back
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a href="#book" className="btn-outline-light text-sm tracking-widest uppercase">
            Book a free consult →
          </a>
          <div className="cta-btn">
            <span className="cta-btn-ring" />
            <a
              href={site.phoneHref}
              className="relative z-10 inline-flex items-center gap-2 font-sans text-sm font-semibold text-white px-5 py-3 rounded-full bg-clay hover:bg-clay-light transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {site.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/40">Scroll</p>
      </div>
    </section>
  )
}

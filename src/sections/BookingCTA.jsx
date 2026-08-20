import { site } from '../siteInfo'

export default function BookingCTA() {
  return (
    <section
      id="book"
      className="bg-sand py-20 sm:py-28 border-t border-stone"
      style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 110%, #EBC9AE 0%, #F4EFE6 58%)' }}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="max-w-sm mx-auto text-center">
          <p className="label mb-4">Book a session</p>
          <h2 className="section-heading mb-4">Start with a conversation</h2>
          <p className="font-sans text-sm text-gray-500 leading-relaxed mb-10">
            Fifteen minutes on the phone, no charge, no pitch — just enough to
            work out whether this is the right place for what you're dealing with.
          </p>

          {/* Primary CTA */}
          <div className="cta-btn inline-block w-full mb-4">
            <span className="cta-btn-ring" />
            <a
              href={site.phoneHref}
              className="relative z-10 flex items-center justify-center gap-3 w-full py-4 px-6 rounded-full font-sans font-semibold text-white text-sm bg-clay hover:bg-clay-light transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call {site.phone}
            </a>
          </div>

          <a
            href={site.emailHref}
            className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-full border border-stone bg-white/60 font-sans font-medium text-bark text-sm hover:border-clay hover:text-clay transition-colors mb-8"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            Email instead
          </a>

          {/* Studio card */}
          <div className="info-card flex items-center gap-3 text-left mb-3">
            <svg className="w-4 h-4 text-clay shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <div>
              <p className="info-card-label">Studio</p>
              <p className="info-card-value">{site.address}, {site.addressCity}</p>
            </div>
          </div>

          <div className="info-card flex items-center gap-3 text-left">
            <svg className="w-4 h-4 text-clay shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              <circle cx="12" cy="12" r="9" />
            </svg>
            <div>
              <p className="info-card-label">Hours</p>
              <p className="info-card-value">{site.hours} · {site.hoursNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

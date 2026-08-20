import { site } from '../siteInfo'

export default function Footer() {
  return (
    <footer id="contact" className="bg-bark text-sand/60 font-sans">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-14 grid sm:grid-cols-3 gap-10">
        <div>
          <div className="font-serif text-sand text-lg mb-3">
            Guy <em>Catz</em>
          </div>
          <p className="text-xs leading-relaxed text-sand/50">
            {site.role} · {site.city}<br />
            One-to-one movement therapy for people who want to feel at home in
            their body again.
          </p>
        </div>

        <div>
          <div className="label-light text-[10px] mb-3">Explore</div>
          <nav className="flex flex-col gap-2 text-xs text-sand/60">
            <a href="#practice" className="hover:text-sand transition-colors">The Practice</a>
            <a href="#about" className="hover:text-sand transition-colors">About Guy</a>
            <a href="#programs" className="hover:text-sand transition-colors">Programs</a>
            <a href="#approach" className="hover:text-sand transition-colors">Approach</a>
            <a href="#services" className="hover:text-sand transition-colors">What We Work On</a>
            <a href="#process" className="hover:text-sand transition-colors">How It Works</a>
            <a href="#reviews" className="hover:text-sand transition-colors">Reviews</a>
            <a href="#faq" className="hover:text-sand transition-colors">FAQ</a>
          </nav>
        </div>

        <div>
          <div className="label-light text-[10px] mb-3">Get in touch</div>
          <ul className="text-xs space-y-2 text-sand/60">
            <li>
              <a href={site.phoneHref} className="hover:text-sand transition-colors">{site.phone}</a>
            </li>
            <li>
              <a href={site.emailHref} className="hover:text-sand transition-colors">{site.email}</a>
            </li>
            <li className="pt-1 leading-relaxed text-sand/50">
              {site.address}<br />
              {site.addressCity}
            </li>
            <li className="pt-1">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-sand transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 max-w-5xl mx-auto px-5 sm:px-8 py-5 flex flex-wrap gap-x-4 gap-y-2 justify-between">
        <p className="text-[11px] text-sand/30">
          © {new Date().getFullYear()} {site.name}, {site.role}. {site.city}.
        </p>
        <p className="text-[11px] text-sand/30">
          Physical therapy services. Not a substitute for emergency medical care.
        </p>
      </div>
    </footer>
  )
}

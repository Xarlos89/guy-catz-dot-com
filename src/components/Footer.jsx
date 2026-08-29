import { site } from '../siteInfo'

const explore = [
  { label: 'The Practice', href: '#practice' },
  { label: 'Meet Our Doctor', href: '#about' },
  { label: 'The Approach', href: '#approach' },
  { label: 'Services', href: '#services' },
  { label: 'Photos', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-fern-deep text-linen/60 font-sans">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 pt-16 pb-14 grid sm:grid-cols-3 gap-12">
        <div>
          <div className="font-serif text-linen text-xl mb-4">
            Healing Path <em className="text-ochre">Rehabilitation</em>
          </div>
          <p className="text-[14px] leading-[1.8] text-linen/50 max-w-xs">
            {site.doctor}, {site.credentials} · {site.city}. One-on-one physical
            therapy in your home, at the {site.neighborhood} office, or by
            telehealth.
          </p>
        </div>

        <div>
          <div className="label-light mb-5">Explore</div>
          <nav className="flex flex-col gap-2.5 text-[14px] text-linen/55">
            {explore.map(({ label, href }) => (
              <a key={href} href={href} className="hover:text-linen transition-colors duration-300 w-fit">
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <div className="label-light mb-5">Get in touch</div>
          <ul className="text-[14px] space-y-2.5 text-linen/55">
            <li>
              <a href={site.phoneHref} className="hover:text-linen transition-colors duration-300">{site.phone}</a>
            </li>
            <li>
              <a href={site.emailHref} className="hover:text-linen transition-colors duration-300">{site.email}</a>
            </li>
            <li className="pt-2 leading-[1.8] text-linen/45">
              {site.address}<br />
              {site.addressCity}
            </li>
            <li className="pt-2">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 hover:text-linen transition-colors duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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

      <div className="border-t border-linen/10 max-w-5xl mx-auto px-6 sm:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 justify-between">
        <p className="text-[12px] text-linen/30">
          © {new Date().getFullYear()} {site.practice}. {site.doctor}, {site.credentials}.
        </p>
        <p className="text-[12px] text-linen/30">
          Physical therapy services. Not a substitute for emergency medical care.
        </p>
      </div>
    </footer>
  )
}

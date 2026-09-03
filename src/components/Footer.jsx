import { site } from '../siteInfo'

const explore = [
  { label: 'The Practice', href: '#practice' },
  { label: 'Meet Our Doctor', href: '#about' },
  { label: 'The Approach', href: '#approach' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Rates', href: '#rates' },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-fern text-cream/80 font-sans">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 pt-16 pb-14 grid sm:grid-cols-3 gap-12">
        <div>
          <div className="font-serif text-cream text-xl mb-2">
            Healing Path <em className="text-ochre">Rehabilitation</em>
          </div>
          <p className="font-serif italic text-[15px] text-cream/75 mb-4">{site.tagline}</p>
          <p className="text-[14px] leading-[1.8] text-cream/80 max-w-xs">
            {site.doctor}, {site.credentials} · {site.city}. One-on-one physical
            therapy at your home, at the {site.neighborhood} office, or by
            telehealth.
          </p>
        </div>

        <div>
          <div className="label-light mb-5">Explore</div>
          <nav className="flex flex-col gap-2.5 text-[14px] text-cream/80">
            {explore.map(({ label, href }) => (
              <a key={href} href={href} className="hover:text-cream transition-colors duration-300 w-fit">
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <div className="label-light mb-5">Get in touch</div>
          <ul className="text-[14px] space-y-2.5 text-cream/80">
            <li>
              <a href={site.phoneHref} className="hover:text-cream transition-colors duration-300">{site.phone}</a>
            </li>
            <li>
              <a href={site.emailHref} className="hover:text-cream transition-colors duration-300">{site.email}</a>
            </li>
            <li className="pt-2 leading-[1.8] text-cream/75">
              {site.address}<br />
              {site.addressCity}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/20 max-w-5xl mx-auto px-6 sm:px-8 py-6 flex flex-wrap gap-x-6 gap-y-2 justify-between">
        <p className="text-[12px] text-cream/75">
          © {new Date().getFullYear()} {site.practice}. {site.doctor}, {site.credentials}.
        </p>
        <p className="text-[12px] text-cream/75">
          Physical therapy services. Not a substitute for emergency medical care.
        </p>
      </div>
    </footer>
  )
}

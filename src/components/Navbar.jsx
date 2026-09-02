import { site } from '../siteInfo'

// Services carries a submenu: Rates, then FAQ. Both are sections further down
// the page — the menu is the only thing that groups them.
const navLinks = [
  { label: 'Practice', href: '#practice' },
  { label: 'Our Doctor', href: '#about' },
  { label: 'Approach', href: '#approach' },
  {
    label: 'Services',
    href: '#services',
    children: [
      { label: 'Rates', href: '#rates' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  { label: 'Testimonials', href: '#reviews' },
]

const linkClasses =
  'font-sans text-[14px] text-ink-soft hover:text-fern transition-colors duration-300'

/**
 * Fixed at the top of the page from the first pixel — it used to fade in after
 * 120px of scroll, and the client asked for it to stay put.
 *
 * The Services submenu opens on hover and on focus-within, so it is reachable
 * by keyboard: tabbing onto Services reveals Rates and FAQ as the next two
 * stops. Below `md` the links are hidden entirely (as they always were) and
 * the pill keeps the wordmark, the call button and Book.
 */
export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Floating, translucent — no hard bar across the page */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 pt-3 sm:pt-4">
        <div className="flex items-center justify-between gap-3 sm:gap-4 rounded-full bg-cream/90 backdrop-blur-md shadow-lift px-4 sm:px-7 h-14">
          <a href="#home" className="font-serif text-[19px] text-ink leading-none shrink-0 whitespace-nowrap">
            Healing <em className="text-fern">Path</em>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(({ label, href, children }) =>
              children ? (
                <div key={href} className="relative group">
                  <a
                    href={href}
                    aria-haspopup="true"
                    className={`${linkClasses} inline-flex items-center gap-1.5`}
                  >
                    {label}
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 opacity-70"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                    </svg>
                  </a>

                  {/* Sits in the gap under the pill; the padded wrapper keeps
                      the pointer inside the group on the way down */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-5 opacity-0 invisible transition-opacity duration-300 group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible">
                    <ul className="min-w-[9rem] rounded-3xl bg-cream shadow-lift py-3">
                      {children.map((child) => (
                        <li key={child.href}>
                          <a
                            href={child.href}
                            className="block px-6 py-2 font-sans text-[14px] text-ink-soft hover:text-fern transition-colors duration-300"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <a key={href} href={href} className={linkClasses}>
                  {label}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* The number itself does not fit on a phone — the icon dials it */}
            <a
              href={site.phoneHref}
              aria-label={`Call ${site.phone}`}
              className="sm:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-line text-ink-soft"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </a>
            <a
              href={site.phoneHref}
              className="hidden sm:block font-sans text-[14px] text-ink-soft hover:text-fern transition-colors duration-300"
            >
              {site.phone}
            </a>
            <a
              href="#book"
              className="inline-flex items-center rounded-full bg-terracotta text-cream font-sans font-medium text-[14px] px-5 py-2.5 shadow-soft transition-colors duration-500 hover:bg-terracotta-deep"
            >
              Book
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

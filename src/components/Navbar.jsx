import { useState, useEffect } from 'react'
import { site } from '../siteInfo'

const navLinks = [
  { label: 'Practice', href: '#practice' },
  { label: 'Our Doctor', href: '#about' },
  { label: 'Approach', href: '#approach' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
]

export default function Navbar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
    >
      {/* Floating, translucent — no hard bar across the page */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 pt-3 sm:pt-4">
        <div className="flex items-center justify-between gap-3 sm:gap-4 rounded-full bg-cream/90 backdrop-blur-md shadow-lift px-4 sm:px-7 h-14">
          <a href="#home" className="font-serif text-[17px] text-ink leading-none shrink-0 whitespace-nowrap">
            Healing <em className="text-fern">Path</em>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="font-sans text-[13px] text-ink-soft hover:text-fern transition-colors duration-300"
              >
                {label}
              </a>
            ))}
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
              className="hidden sm:block font-sans text-[13px] text-ink-soft hover:text-fern transition-colors duration-300"
            >
              {site.phone}
            </a>
            <a
              href="#book"
              className="inline-flex items-center rounded-full bg-terracotta text-cream font-sans font-medium text-[13px] px-5 py-2.5 shadow-soft transition-colors duration-500 hover:bg-terracotta-deep"
            >
              Book
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

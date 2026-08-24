import { useState, useEffect } from 'react'
import { site } from '../siteInfo'

const navLinks = [
  { label: 'Practice', href: '#practice' },
  { label: 'Our Doctor', href: '#about' },
  { label: 'Where', href: '#programs' },
  { label: 'Approach', href: '#approach' },
  { label: 'Who I Treat', href: '#services' },
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
        <div className="flex items-center justify-between gap-4 rounded-full bg-linen/85 backdrop-blur-md shadow-soft px-5 sm:px-7 h-14">
          <a href="#home" className="font-serif text-[17px] text-umber leading-none shrink-0 whitespace-nowrap">
            Healing <em className="text-fern">Path</em>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="font-sans text-[13px] text-umber-soft hover:text-fern transition-colors duration-300"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={site.phoneHref}
              className="hidden sm:block font-sans text-[13px] text-umber-soft hover:text-fern transition-colors duration-300"
            >
              {site.phone}
            </a>
            <a
              href="#book"
              className="inline-flex items-center rounded-full bg-terracotta text-linen font-sans font-medium text-[13px] px-5 py-2.5 transition-colors duration-500 hover:bg-terracotta-deep"
            >
              Book
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

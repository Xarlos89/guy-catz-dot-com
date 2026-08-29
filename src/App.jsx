import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Divider from './components/Divider'
import Hero from './sections/Hero'
import Practice from './sections/Practice'
import About from './sections/About'
import Approach from './sections/Approach'
import Services from './sections/Services'
import Gallery from './sections/Gallery'
import Reviews from './sections/Reviews'
import FAQ from './sections/FAQ'
import BookingCTA from './sections/BookingCTA'

/**
 * The page is built from colour BANDS, not alternating slabs.
 * Sections inside a band share a background and simply continue; bands are
 * joined by a <Divider> curve. See CLAUDE.md → "Bands and seams".
 */
export default function App() {
  useEffect(() => {
    // Enables the scroll-reveal styles only once JS is running, so the
    // prerendered page is never left invisible.
    document.documentElement.classList.add('reveal-ready')
  }, [])

  return (
    <>
      <Navbar />
      <main>
        {/* Band A — mist: the page opens on colour, not on a pale field */}
        <Hero />
        <Divider from="mist" to="haze" shape="dune" />

        {/* Band B — haze */}
        <Practice />
        <Divider from="haze" to="mist" shape="ripple" />

        {/* Band C — mist */}
        <About />
        <Divider from="mist" to="haze" shape="crest" />

        {/* Band D — haze */}
        <Approach />
        <Divider from="haze" to="fern" shape="bowl" />

        {/* Band E — the one grounded, dark moment */}
        <Services />
        <Divider from="fern" to="haze" shape="crest" />

        {/* Band F — haze */}
        <Gallery />
        <Divider from="haze" to="mist" shape="ripple" />

        {/* Band G — mist, closing */}
        <Reviews />
        <FAQ />
        <BookingCTA />
        <Divider from="mist" to="fernDeep" shape="dune" />
      </main>
      <Footer />
    </>
  )
}

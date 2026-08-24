import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Divider from './components/Divider'
import Hero from './sections/Hero'
import Practice from './sections/Practice'
import About from './sections/About'
import Programs from './sections/Programs'
import Approach from './sections/Approach'
import Services from './sections/Services'
import Process from './sections/Process'
import Gallery from './sections/Gallery'
import Reviews from './sections/Reviews'
import FAQ from './sections/FAQ'
import BookingCTA from './sections/BookingCTA'

/**
 * The page is built from six colour BANDS, not eleven alternating slabs.
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
        {/* Band A — dawn */}
        <Hero />
        <Practice />
        <Divider from="linen" to="oat" shape="dune" />

        {/* Band B — oat */}
        <About />
        <Programs />
        <Divider from="oat" to="fern" shape="bowl" />

        {/* Band C — the grounded middle */}
        <Approach />
        <Services />
        <Divider from="fern" to="linen" shape="crest" />

        {/* Band D — light again, warming into clay */}
        <Process />
        <Gallery />
        <Divider from="clay" to="oat" shape="ripple" />

        {/* Band E — oat, closing */}
        <Reviews />
        <FAQ />
        <BookingCTA />
        <Divider from="blush" to="fernDeep" shape="dune" />
      </main>
      <Footer />
    </>
  )
}

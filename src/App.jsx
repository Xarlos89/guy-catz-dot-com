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
        {/* Band A — dawn: dusk overhead, settling no lighter than haze */}
        <Hero />
        <Practice />
        <Divider from="haze" to="cream" shape="dune" />

        {/* Band B — cream, the one properly light band on the page: his bio
            is the longest read on it */}
        <About />
        <Divider from="cream" to="haze" shape="ripple" />

        {/* Band C — haze */}
        <Approach />
        <Divider from="haze" to="fern" shape="bowl" />

        {/* Band D — the one grounded, dark moment */}
        <Services />
        <Divider from="fern" to="mist" shape="crest" />

        {/* Band E — mist, the deepest light band: the photographs sit better
            on it than on a pale ground */}
        <Gallery />
        <Divider from="mist" to="haze" shape="ripple" />

        {/* Band F — haze, deepening back into mist as the page closes */}
        <Reviews />
        <FAQ />
        <BookingCTA />
        <Divider from="mist" to="fernDeep" shape="dune" />
      </main>
      <Footer />
    </>
  )
}

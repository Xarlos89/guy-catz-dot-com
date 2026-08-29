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
        {/* Band A — fern. The page opens on the dark tone; the primary
            button inverts to cream here, see .btn-primary-light */}
        <Hero />
        <Divider from="fern" to="mist" shape="dune" />

        {/* Band B — mist */}
        <Practice />
        <Divider from="mist" to="fern" shape="ripple" />

        {/* Band C — fern. His bio runs light-on-dark at the client's asking;
            `.lede`-weight measure and cream/80 body do the work instead */}
        <About />
        <Divider from="fern" to="mist" shape="crest" />

        {/* Band D — mist */}
        <Approach />
        <Divider from="mist" to="fern" shape="bowl" />

        {/* Band E — fern */}
        <Services />
        <Divider from="fern" to="mist" shape="crest" />

        {/* Band F — mist */}
        <Gallery />
        <Divider from="mist" to="fern" shape="ripple" />

        {/* Band G — fern */}
        <Reviews />
        <Divider from="fern" to="mist" shape="dune" />

        {/* Band H — mist, closing */}
        <FAQ />
        <BookingCTA />
        <Divider from="mist" to="fern" shape="dune" />
      </main>
      <Footer />
    </>
  )
}

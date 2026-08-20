import Navbar from './components/Navbar'
import Footer from './components/Footer'
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

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Practice />
        <About />
        <Programs />
        <Approach />
        <Services />
        <Process />
        <Gallery />
        <Reviews />
        <FAQ />
        <BookingCTA />
      </main>
      <Footer />
    </>
  )
}

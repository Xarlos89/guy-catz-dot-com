import Photo from '../components/Photo'
import { site } from '../siteInfo'

// Drop files into public/images/ and fill in `src` — a null src renders
// the "photo coming soon" placeholder instead.
const photos = [
  { src: null, alt: 'The studio, morning light through the front window' },
  { src: null, alt: 'Treatment table and manual therapy corner' },
  { src: null, alt: 'Racks, kettlebells and the loading area' },
  { src: null, alt: 'A client working through a loaded carry' },
  { src: null, alt: 'Mat work — breath and floor mobility' },
  { src: null, alt: 'Small-group class in progress' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-moss py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-10">
          <p className="label mb-3">The studio</p>
          <h2 className="section-heading-light mb-2">Where the work happens</h2>
          <p className="font-sans text-sm text-white/40">
            A quiet room in {site.neighborhood} — no queue, no televisions, no one else booked over you.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {photos.map(({ src, alt }) => (
            <div key={alt} className="aspect-[3/4] sm:aspect-[4/3] rounded-2xl overflow-hidden">
              <Photo src={src} alt={alt} tone="dark" imgClassName="hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

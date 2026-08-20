import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import { site } from '../siteInfo'

export default function About() {
  return (
    <section id="about" className="bg-oat py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Portrait — organic corner radius, no frame */}
          <Reveal>
            <div className="relative">
              <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-lift">
                <Photo src={null} alt="Portrait of Guy Catz in the studio" />
              </div>
              <div className="absolute -bottom-5 -right-2 sm:right-6 bg-linen rounded-full pl-5 pr-6 py-4 shadow-soft">
                <p className="font-sans text-[11px] tracking-[0.16em] uppercase text-umber-soft leading-none mb-1.5">Practising since</p>
                <p className="font-serif text-lg text-fern leading-none">2011</p>
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <Reveal delay={120}>
            <p className="label mb-6">About · DPT, OCS</p>
            <h2 className="section-heading mb-8">
              Movement first.<br />Everything else follows.
            </h2>
            <p className="lede mb-6">
              I'm Guy — a Doctor of Physical Therapy working out of a small
              {' '}{site.neighborhood} studio. I spent the first years of my career in a
              busy orthopaedic clinic, seeing three people an hour and watching
              the same injuries come back around. So I built a different practice:
              one person at a time, a full hour, and enough space to ask why the
              pain showed up in the first place.
            </p>
            <p className="lede mb-10">
              The work blends hands-on manual therapy with breath, strength and
              the kind of unhurried movement that teaches a nervous system it is
              safe to let go. You leave with a plan you understand — not a
              printout of exercises you'll never open.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href={site.phoneHref} className="btn-ghost">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {site.phone}
              </a>

              <a href={site.emailHref} className="btn-ghost">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                {site.email}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

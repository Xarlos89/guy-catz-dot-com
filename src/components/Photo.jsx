/**
 * Renders a photo, or a labelled placeholder when `src` is falsy.
 * Every image slot on the site goes through this component, so the
 * page looks finished before the real photography arrives — drop a
 * file into public/images/ and set `src` to swap one in.
 */
export default function Photo({ src, alt, className = '', tone = 'light', imgClassName = '' }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`w-full h-full object-cover ${imgClassName} ${className}`}
      />
    )
  }

  const dark = tone === 'dark'

  return (
    <div
      role="img"
      aria-label={alt}
      className={`w-full h-full flex flex-col items-center justify-center gap-2 px-4 text-center ${
        dark ? 'bg-moss-light' : 'bg-sand-dark'
      } ${className}`}
    >
      <svg
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}
        className={`w-7 h-7 ${dark ? 'text-white/25' : 'text-bark/20'}`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c0-5 2.5-9 7-11-1 5.5-3.5 9-7 11zm0 0c0-5-2.5-9-7-11 1 5.5 3.5 9 7 11zm0 0v-6" />
      </svg>
      <p className={`font-sans text-xs leading-snug ${dark ? 'text-white/45' : 'text-bark/45'}`}>
        {alt}
      </p>
      <p className={`font-sans text-[10px] uppercase tracking-[0.15em] ${dark ? 'text-white/25' : 'text-bark/25'}`}>
        Photo coming soon
      </p>
    </div>
  )
}

/**
 * Renders a photo, or a labelled placeholder when `src` is falsy.
 * Every image slot on the site goes through this component, so the
 * page looks finished before the real photography arrives — drop a
 * file into public/images/ and set `src` to swap one in.
 *
 * `srcSet`/`sizes` are optional: pass both (build them with
 * responsivePhoto() in src/images.js) and the browser picks the width that
 * matches the slot instead of downloading the largest file we have.
 */
export default function Photo({ src, srcSet, sizes, alt, className = '', tone = 'light', imgClassName = '', natural = false, width, height }) {
  if (src) {
    // `natural` keeps the photo's own aspect ratio — used by the masonry
    // grid, where cropping to a fixed ratio cut off faces and hands.
    return (
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading="lazy"
        decoding="async"
        width={width}
        height={height}
        className={`${natural ? 'block w-full h-auto' : 'w-full h-full object-cover'} ${imgClassName} ${className}`}
      />
    )
  }

  const dark = tone === 'dark'

  return (
    <div
      role="img"
      aria-label={alt}
      className={`w-full h-full flex flex-col items-center justify-center gap-3 px-6 text-center ${
        dark ? 'bg-fern-light' : 'bg-cream'
      } ${className}`}
    >
      {/* A single leaf — the same mark as the favicon */}
      <svg
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.1}
        className={`w-8 h-8 ${dark ? 'text-cream/25' : 'text-sage-deep/40'}`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c0-5 2.5-9 7-11-1 5.5-3.5 9-7 11zm0 0c0-5-2.5-9-7-11 1 5.5 3.5 9 7 11zm0 0v-6" />
      </svg>
      <p className={`font-sans text-[13px] leading-relaxed max-w-[16rem] ${dark ? 'text-cream/45' : 'text-ink-soft/70'}`}>
        {alt}
      </p>
      <p className={`font-sans text-[10px] uppercase tracking-[0.2em] ${dark ? 'text-cream/25' : 'text-ink-soft/40'}`}>
        Photo coming soon
      </p>
    </div>
  )
}

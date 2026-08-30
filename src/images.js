/**
 * URLs for the files in public/.
 *
 * `base` is './' (see vite.config.js) so one build serves both from a
 * custom-domain root and from the GitHub project-pages sub-path. Everything
 * Vite emits is document-relative to match — './assets/app.js', './fonts/…' in
 * index.html, '../fonts/…' from the CSS — and files in public/ have to be
 * referenced the same way, because Vite does not rewrite them.
 *
 * A hard-coded '/images/…' ignores all of that and 404s under the sub-path,
 * which is what the photography did on
 * xarlos89.github.io/guy-catz-dot-com/. Route every public asset through here.
 *
 * Note this cannot use import.meta.env.BASE_URL: for a relative base Vite
 * resolves that to '/', which is the bug it looks like the fix for.
 */
const PUBLIC = './'

/** URL for a file in public/, e.g. asset('images/portrait.webp'). */
export function asset(path) {
  return `${PUBLIC}${path}`
}

/**
 * A photo that ships at several widths, so the browser downloads one that
 * matches the slot rather than the largest file we have. `widths` must match
 * the files actually sitting in public/images/ — see CLAUDE.md → Adding photos.
 * Returns { src, srcSet }; the largest width is the src, for anything that
 * does not understand srcset.
 */
export function responsivePhoto(name, widths) {
  return {
    src: asset(`images/${name}-${widths[widths.length - 1]}.webp`),
    srcSet: widths.map((w) => `${asset(`images/${name}-${w}.webp`)} ${w}w`).join(', '),
  }
}

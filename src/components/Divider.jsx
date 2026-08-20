import { palette } from '../palette'

/**
 * The seam between two colour bands — a soft organic curve rather than a
 * hard edge. `from` is the colour of the section above, `to` the section
 * below; the SVG paints `to` over a `from` background, so the join is
 * invisible as long as those match their neighbours.
 *
 * Reordering sections means re-pairing these colours.
 */
const shapes = {
  // long, low swell
  dune: 'M0,58 C260,104 520,18 780,42 C1010,63 1240,104 1440,66 L1440,140 L0,140 Z',
  // slow single curve, deepest in the middle
  bowl: 'M0,34 C380,124 1060,124 1440,34 L1440,140 L0,140 Z',
  // shallow crest, high on the left
  crest: 'M0,96 C300,26 620,10 900,46 C1130,76 1290,110 1440,88 L1440,140 L0,140 Z',
  // barely-there ripple, for seams that should almost disappear
  ripple: 'M0,74 C240,102 480,52 720,66 C960,80 1200,110 1440,80 L1440,140 L0,140 Z',
}

export default function Divider({ from, to, shape = 'dune', className = '' }) {
  const fromColor = palette[from] ?? from
  const toColor = palette[to] ?? to

  return (
    <div aria-hidden="true" className={`relative leading-none ${className}`} style={{ background: fromColor }}>
      <svg
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        className="block w-full h-14 sm:h-20 lg:h-28"
        style={{ display: 'block' }}
      >
        <path d={shapes[shape] ?? shapes.dune} fill={toColor} />
      </svg>
    </div>
  )
}

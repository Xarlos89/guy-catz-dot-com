/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Blue-cream field — a cool, low-saturation cream. Four steps, far
        // enough apart that neighbouring bands read as different colours
        // rather than as the same colour lit differently. Nothing on this
        // page is white; `cream` is as light as it gets.
        cream: '#E1E8EA',   // lightest band, and every raised surface
        haze:  '#D4DDE0',   // one step down
        mist:  '#C4D0D5',   // two
        dusk:  '#B2C1C8',   // the deepest light tone — hero crown, page close

        // Greens — the grounded dark band and quiet accents
        sage: {
          DEFAULT: '#9FB3AC',
          deep: '#6B8279',
        },
        fern: {
          DEFAULT: '#3C4F49',
          light: '#485C55',
          deep: '#2F403B',
        },

        // Warm accents — the only warmth left, and all the louder for it
        terracotta: {
          DEFAULT: '#94512F',   // buttons — carries cream text at AA
          light: '#C08262',     // dots and small marks, never text
          deep: '#7A4023',      // label text on light, and the button hover
        },
        ochre: '#E6B98C',       // label text and icons on fern

        // Ink — cool, to match the ground
        ink: {
          DEFAULT: '#2C3A38',
          soft: '#475654',
        },
        line: '#AEBEC2',        // hairlines, ghost-button borders
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        soft: '1.75rem',
        blob: '2.5rem',
      },
      // Two layers each: a close contact shadow so the edge reads, and a
      // wide soft one so the surface lifts off the page. Cool-black, to match
      // the ground — a warm shadow on these blues reads as dirt.
      boxShadow: {
        soft: '0 2px 8px -3px rgba(31, 44, 43, 0.16), 0 16px 36px -16px rgba(31, 44, 43, 0.32)',
        lift: '0 8px 18px -8px rgba(31, 44, 43, 0.24), 0 36px 64px -24px rgba(31, 44, 43, 0.44)',
        deep: '0 12px 28px -10px rgba(31, 44, 43, 0.32), 0 48px 88px -32px rgba(31, 44, 43, 0.52)',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.55' },
          '50%': { transform: 'scale(1.07)', opacity: '0.75' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -14px, 0)' },
        },
      },
      animation: {
        breathe: 'breathe 11s ease-in-out infinite',
        drift: 'drift 16s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // TWO BACKGROUND COLOURS. That is the whole system — the page
        // alternates between `fern` and `mist` and uses nothing else behind a
        // section. Everything below them is type, surface or accent.
        fern: {
          DEFAULT: '#3C4F49',   // the dark band — the "blue" the client means
          light: '#485C55',     // dark photo placeholders only
        },
        mist: '#C4D0D5',        // the light band

        // Surface — raised things (cards, the navbar pill, ghost buttons) and
        // the text colour on `fern`. Never a section background.
        cream: '#E1E8EA',

        // Accents
        sage: {
          DEFAULT: '#9FB3AC',
          deep: '#6B8279',
        },
        terracotta: {
          DEFAULT: '#94512F',   // buttons on `mist` — carries cream text at AA
          light: '#C08262',     // small dots and marks, never text
          deep: '#7A4023',      // label text on light, and the button hover
        },
        ochre: '#E6B98C',       // label text and icons on `fern`

        // Ink — cool, to match the ground
        ink: {
          DEFAULT: '#2C3A38',
          soft: '#475654',
        },
        line: '#A3B5BA',        // hairlines, ghost-button borders
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
      },
      animation: {
        breathe: 'breathe 11s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

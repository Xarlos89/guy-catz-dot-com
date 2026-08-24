/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm neutral field — the page is one continuous light surface
        linen: '#FBF7F1',
        oat: '#F4EDE3',
        clay: '#EADFD1',
        blush: '#F3E0CB',
        mist: '#E4EADF',

        // Greens — the grounded middle band and quiet accents
        sage: {
          DEFAULT: '#A9B8A4',
          deep: '#7C917B',
        },
        fern: {
          DEFAULT: '#46584A',
          light: '#53664F',
          deep: '#3A4A3E',
        },

        // Warm accents
        terracotta: {
          DEFAULT: '#C08262',
          light: '#D19B7E',
          deep: '#A8623F',   // text-safe on linen
        },
        ochre: '#DCA97B',    // text-safe on fern

        // Ink
        umber: {
          DEFAULT: '#4A4139',
          soft: '#6B6055',
        },
        stone: '#E6DBCD',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        soft: '1.75rem',
        blob: '2.5rem',
      },
      boxShadow: {
        soft: '0 18px 50px -30px rgba(74, 65, 57, 0.40)',
        lift: '0 30px 70px -40px rgba(74, 65, 57, 0.55)',
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

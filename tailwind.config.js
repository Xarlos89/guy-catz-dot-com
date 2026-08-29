/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm neutral field — the page is one continuous light surface.
        // Deepened a step from the first draft: the same warmth, a little
        // less glare, so the shadows below have something to sit on.
        linen: '#F7F2EA',
        oat: '#EDE4D6',
        clay: '#E0D2BF',
        blush: '#E9D2B7',
        mist: '#D8E0D2',

        // Greens — the grounded middle band and quiet accents
        sage: {
          DEFAULT: '#A9B8A4',
          deep: '#6E8470',
        },
        fern: {
          DEFAULT: '#3F5143',
          light: '#4B5D48',
          deep: '#324136',
        },

        // Warm accents
        terracotta: {
          DEFAULT: '#A6613D',   // buttons — carries linen text at AA
          light: '#C08262',     // dots and small marks
          deep: '#8A4E2C',      // text-safe on linen, and the button hover
        },
        ochre: '#E6B98C',       // text-safe on fern

        // Ink
        umber: {
          DEFAULT: '#40382F',
          soft: '#5D5348',
        },
        stone: '#D9CCBA',
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
      // wide soft one so the surface lifts off the page.
      boxShadow: {
        soft: '0 2px 8px -3px rgba(52, 44, 36, 0.14), 0 16px 36px -16px rgba(52, 44, 36, 0.30)',
        lift: '0 8px 18px -8px rgba(52, 44, 36, 0.22), 0 36px 64px -24px rgba(52, 44, 36, 0.42)',
        deep: '0 12px 28px -10px rgba(52, 44, 36, 0.30), 0 48px 88px -32px rgba(52, 44, 36, 0.50)',
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

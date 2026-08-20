/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        sand: '#F4EFE6',
        'sand-dark': '#E7DFCF',
        moss: {
          DEFAULT: '#26332B',
          light: '#2F3E33',
          card: '#3A4B3E',
        },
        clay: {
          DEFAULT: '#C1714A',
          light: '#D28C67',
        },
        sage: '#8FA189',
        bark: '#241C14',
        stone: '#DCD2C2',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

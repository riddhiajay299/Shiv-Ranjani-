/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./js/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#380712',
          light: '#5a1122',
          dark: '#24040b',
        },
        gold: {
          DEFAULT: '#c59d3f',
          light: '#fae29c',
          dark: '#9a7625',
        },
        brandDark: '#14070c',
        brandText: '#ebdcd0',
      },
      fontFamily: {
        serif: ['Cinzel', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

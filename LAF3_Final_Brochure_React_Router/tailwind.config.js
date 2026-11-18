/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1d211f',
        muted: '#777a75',
        cream: '#fbfaf7',
        line: '#e9e7e1',
        accent: '#ad6444',
        clay: '#c77d57',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: { 'editorial': '0 18px 50px rgba(27,30,28,.055)' },
    },
  },
  plugins: [],
};

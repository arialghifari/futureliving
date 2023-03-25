/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0E1D70',
        secondary: '#ED9B2D',
        text: '#333333',
      },
      height: {
        90: '20rem',
      },
      padding: {
        26: '',
      },
    },
  },
  plugins: [require('daisyui')],
}

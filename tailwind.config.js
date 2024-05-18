/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  screens: {
    '2xl' : '450px',
    'sm' : '450px'

  },
  theme: {
    extend: {
      colors:{
        "grey": "#eceff3",
        "lightgreen":"rgb(208 250 223)",
        "drakgreen":"rgb(16 157 92)"
      }
    },
  },
  plugins: [],
}
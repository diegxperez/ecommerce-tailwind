/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        brandBlue: '#152C51',
        darkNavy: '#0C192E',
        brandSecondary: '#152C51',
        softWhite: '#ECE8E8',
        pureWhite: '#FFFFFF',
        skyBlue: '#4DC8FF',
      }
    },
  },
  plugins: [],
}


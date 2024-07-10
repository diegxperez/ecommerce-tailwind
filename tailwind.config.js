/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        brandBlue: "#152C51",
        darkNavy: "#0C192E",
        brandSecondary: "#C15001",
        softWhite: "#ECE8E8",
        pureWhite: "#FCFDFF",
        skyBlue: "#4DC8FF",
        grey: "#817D7D",
      },
    },
  },
  plugins: [],
};

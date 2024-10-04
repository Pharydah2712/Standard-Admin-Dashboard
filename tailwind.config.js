/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'royal-blue': '#4169E1', //added the royal blue color
        'navy-blue' : '#191970', //added the mid blue color
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
       screens: {
      'sm-below': {'max': '307px'},  // Below 308px
    },
  },
  plugins: [],
}
}

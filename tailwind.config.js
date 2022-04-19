// tailwind.config.js
module.exports = {
  future: {},
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
       fontFamily: {
        Poppins: ["'Poppins', Black"],
      },
    },
  },
  variants: {},
  plugins: [
    ' tw-elements/dist/plugin'
  ],
}
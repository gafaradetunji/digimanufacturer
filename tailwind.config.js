/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  // content: [],
  theme: {
    fontFamily: {
      'serif': ['Satoshi-Variable', 'ui-serif'],
    },
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
}


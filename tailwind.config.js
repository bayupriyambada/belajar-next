/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     fontFamily: {
      'cabin': ['Cabin', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
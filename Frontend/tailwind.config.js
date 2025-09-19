/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        richblack: {
          50:  "#f6f6f7",
          100: "#e0e1e3",
          200: "#c2c4c8",
          300: "#a3a6ad",
          400: "#848992",
          500: "#666b77",
          600: "#494d56",
          700: "#2b2f35",
          800: "#15181a",
          900: "#0a0b0c",
          950: "#000000" // pure black (no comma here)
        },
      }
    },
  },
  plugins: [],
}

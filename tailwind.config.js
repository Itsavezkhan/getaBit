/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        haleluja: ["Gloria Hallelujah", "sans-serif"],
        kalam: ["Kalam", "cursive"],
      },
    },
  },
  plugins: [],
}

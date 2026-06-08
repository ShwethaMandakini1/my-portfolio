/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#080B16",
        "navy-secondary": "#111026",
        card: "#1A1530",
        violet: "#8B5CF6",
        "violet-dark": "#7C3AED",
        blue: "#3B82F6",
        cyan: "#22D3EE",
        border: "#2D2745",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
}
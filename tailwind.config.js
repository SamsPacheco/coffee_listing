/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "cafe":"url('/bg-cafe.jpg')",
      },
      backgroundSize: {
        'full': '100% 100%',
      },
      colors: {
        "black-one": "#111315",
        "black-two": "#1B1D1F",
        "gray-color": "#6F757C",
        "white-blank": "#FEF7EE",
        "yellow-org": "#F6C768",
        "red-light": "#ED735D",
        "gree-light": "#BEE3CC",
      }
    },
  },
  plugins: [],
}
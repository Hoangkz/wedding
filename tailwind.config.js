/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          serif: ["Playfair Display", "serif"],
          script: ["Great Vibes", "cursive"],
      },
      colors: {
        "blush-pink": "#FFC0CB", 
        ivory: "#FFFFF0", 
        gold: "#FFD700", 
      },
    },
  },
  plugins: [],
}

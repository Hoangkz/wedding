/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Tùy chỉnh font chữ cho cảm giác lãng mạn
      fontFamily: {
        // Sử dụng font serif thanh lịch
        serif: ["Playfair Display", "serif"],
        // Sử dụng font script hoặc cursive cho tiêu đề
        script: ["Great Vibes", "cursive"],
      },
      // Tùy chỉnh màu sắc tiệc cưới
      colors: {
        "blush-pink": "#FFC0CB", // Hồng nhạt
        ivory: "#FFFFF0", // Trắng ngà
        gold: "#FFD700", // Vàng kim
      },
    },
  },
  plugins: [],
}

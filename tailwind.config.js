
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'who-we-are': "url('/src/assets/Sativa1.png')",

        'footer-texture': "url('/src/assets/footerbg-img.png')",
      }
    },
  },
  plugins: [],
}

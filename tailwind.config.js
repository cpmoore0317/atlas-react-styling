/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#1F2937',  // Dark gray for background
        'light-gray': '#F3F4F6', // Light gray for text or accents
        'teal': '#14B8A6',       // Teal for buttons, links, or highlights
      },
    },
  },
  plugins: [],
}

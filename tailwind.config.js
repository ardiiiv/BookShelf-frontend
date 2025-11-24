/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Playfair: ["Playfair Display", "serif"],
      },
      colors: {
        Primary: "#DA1E37",
        Secondary: "#C71F37",
        SlateGrey: "#6C757D"
      },
      boxShadow: {
        PrimaryShadow: "0 15px 40px rgba(154, 160, 185, 0.05), 0 15px 40px rgba(166, 173, 201, 0.2)"
      }
    },
  },
  plugins: [],
}


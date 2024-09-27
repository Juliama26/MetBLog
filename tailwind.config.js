/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        primary: "#1e1b4b",
        secondary: "#FFFFFF",
        neural: "#E8E8EA",
        accent: "#4B6BFB",
        accent2: "#3B3C4A",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

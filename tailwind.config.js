/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        WHITE: "#FFFFFF",

        GREY_100: "#E1E1E6",
        GREY_300: "#8D8D99",
        GREY_500: "#505059",
        GREY_600: "#323238",
        GREY_700: "#29292E",
        GREY_800: "#202024",

        BRAND_LIGHT: "#00B37E",
        BRAND_MID: "#00875F",
        WARNING_LIGHT: "#FBA94C",
        DANGER_LIGHT: "#F75A68",

        LABEL: "#A6A1B2",
      },
      fontFamily: {
        REGULAR: "Roboto_400Regular",
        BOLD: "Roboto_700Bold",
      },
    },
  },
  plugins: [],
};

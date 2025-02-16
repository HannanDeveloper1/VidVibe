/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("nativewind/preset")],
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ec3554",
        white: {
          DEFAULT: "#fff",
          100: "#f5f5f5",
          200: "#CDCDE0",
        },
        black: {
          DEFAULT: "#000",
          100: "#111",
          200: "#222",
        },
        accent: "#0095ff",
        danger: "#ff1818",
        success: "#1ac200",
      },
      fontFamily: {
        "roboto-thin": ["Roboto-Thin", "sans-serif"],
        "roboto-extralight": ["Roboto-ExtraLight", "sans-serif"],
        "roboto-light": ["Roboto-Light", "sans-serif"],
        "roboto-regular": ["Roboto-Regular", "sans-serif"],
        "roboto-medium": ["Roboto-Medium", "sans-serif"],
        "roboto-semibold": ["Roboto-SemiBold", "sans-serif"],
        "roboto-bold": ["Roboto-Bold", "sans-serif"],
        "roboto-extrabold": ["Roboto-ExtraBold", "sans-serif"],
        "roboto-black": ["Roboto-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};

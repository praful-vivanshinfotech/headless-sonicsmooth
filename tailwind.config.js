/** @type {import('tailwindcss').Config} */
const rem = (px) => {
  return px * 0.0625 + "rem";
};
module.exports = {
  darkMode: "class",
  rootFontSize: 10,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      cambon: ["'Cambon'"],
      "post-grotesk": ["Post Grotesk"],
    },
    container: {
      center: true,
    },
    fontWeight: {
      100: 100,
      200: 200,
      300: 300,
      400: 400,
      500: 500,
      600: 600,
      700: 700,
      800: 800,
      900: 900,
    },
    fontSize: {
      10: rem(10),
      12: rem(12),
      14: rem(14),
      16: rem(16),
      18: rem(18),
      20: rem(20),
      22: rem(22),
      24: rem(24),
      26: rem(26),
      28: rem(28),
      30: rem(30),
      32: rem(32),
      36: rem(36),
      42: rem(42),
      48: rem(48),
      68: rem(68),
      90: rem(90),
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#200340",
          100: "#23004e",
          200: "#EFEBFC",
          300: "#FBF6F0",
          400: "#522D6D",
          500: "#cec2ef",
          600: "#F5F0FB",
          700: "#F5EFFB",
        },
        secondary: {
          DEFAULT: "#39a037",
          100: "#5F5F6A",
          200: "#666666",
          300: "#B51A2F",
        },
        gray: {
          100: "#212529",
          200: "#EFEFEF",
          300: "#EBEBEB",
          400: "#DCDCDC",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

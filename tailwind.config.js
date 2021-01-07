const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: colors.indigo,
      secondary: colors.yellow,
      neutral: colors.gray,
      white: colors.white,
      black: colors.gray[700],
    },
    extend: {
      height: {
        112: "28rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
      },
      width: {
        "(1/2-8)": "calc(50% - 2rem)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

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
    },
    extend: {
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

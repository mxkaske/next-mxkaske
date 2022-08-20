const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "../../packages/ui/src**/*.{ts,tsx}", // detect ui changes
  ],
  darkMode: "class", // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: "rgb(var(--example-brand) / <alpha-value>)",
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translateX(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -30px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-30px, 30px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
  ],
};

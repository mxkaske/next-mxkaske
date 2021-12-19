const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  darkMode: "class", // 'media' or 'class'
  plugins: [require("@tailwindcss/typography")],
};

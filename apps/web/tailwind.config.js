const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "../../packages/ui/src**/*.{ts,tsx}", // detect ui changes
  ],
  darkMode: "class", // 'media' or 'class'
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
  ],
};

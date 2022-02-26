module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}", // detect ui changes
  ],
  darkMode: "class", // 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};

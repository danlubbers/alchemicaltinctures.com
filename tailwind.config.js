const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      grey: "#111211",
      green: "#2e755b",
      blue: "#038ca1",
      blueHover: "#05b5d0",
      brown: "#9c7a14",
      brownHover: "#d3a51a",
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.2xl") },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
        h4: { fontSize: theme("fontSize.md") },
        "a:hover": { color: theme("textColor.blueHover") },
      });
    }),
  ],
};

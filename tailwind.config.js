const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx,js,jsx}", "components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      animation: {
        loader: "spin 3s linear infinite",
      },
      keyframes: {
        spin: {
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

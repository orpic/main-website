/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm270: "270px",
      ...defaultTheme.screens,
    },

    extend: {},
  },
  plugins: [],
};

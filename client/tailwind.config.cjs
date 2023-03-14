/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blackBlue: "#0a1929",
        blackBlueLighter: "#132f4c",
        oceanBlue: "#0057b7",
      },
    },
  },
  plugins: [],
};

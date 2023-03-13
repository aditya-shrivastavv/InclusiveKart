/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          100: "#ffcfd2",
          200: "#ff9fa5",
          300: "#ff7079",
          400: "#ff404c",
          500: "#ff101f",
          600: "#cc0d19",
          700: "#990a13",
          800: "#66060c",
          900: "#330306"
        },
        gray: {
          100: "#f4f1f4",
          200: "#eae3e9",
          300: "#dfd6de",
          400: "#d5c8d3",
          500: "#cabac8",
          600: "#a295a0",
          700: "#797078",
          800: "#514a50",
          900: "#282528"
        },
        ukrainian: {
          100: "#f0f8fd",
          200: "#e0f1fc",
          300: "#d1ebfa",
          400: "#c1e4f9",
          500: "#b2ddf7",
          600: "#8eb1c6",
          700: "#6b8594",
          800: "#475863",
          900: "#242c31"
        },
        teal: {
          100: "#dbf0ef",
          200: "#b7e1df",
          300: "#94d3ce",
          400: "#70c4be",
          500: "#4cb5ae",
          600: "#3d918b",
          700: "#2e6d68",
          800: "#1e4846",
          900: "#0f2423"
        },
      }
    },
  },
  plugins: [],
}
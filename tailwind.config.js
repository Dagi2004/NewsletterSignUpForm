/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      White: "hsl(0, 0%, 100%)",
      Tomato: "hsl(4, 100%, 67%)",
      violet: "hsl(229, 45%, 23%)",
      CharcoalGrey: "hsl(235, 18%, 26%)",
      lightRed: "#ee4a4a",
    },
  },
  plugins: [],
};

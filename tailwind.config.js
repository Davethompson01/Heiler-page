/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        active: "#f5f500", // Replace with your desired yellow color
      },
      screens: {
        four: "500px",
        lgpro: "1140px",
        mdpro: "840px",
      },
    },
  },
  plugins: [],
};

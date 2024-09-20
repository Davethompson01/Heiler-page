/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        four: "500px",
        lgpro: "1140px",
      },
    },
  },
  plugins: [],
};

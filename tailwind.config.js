/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '2xl': "0px 1px 4px #D6D6D69E",
      },
      colors: {
        sl_col: "#1C1C1C",
      },
      fontFamily: {
        Select: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "2xl": "0px 1px 4px #D6D6D69E",
        "1xl": "0px 3px 4px #00000029",
        it_sha: "0px 3px 9px #00000017",
      },

      colors: {
        sl_col: "#1C1C1C",
        l_green: "#51C452",
        list: "#FF8800",
        detail: "#242424",
      },
      fontFamily: {
        Select: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

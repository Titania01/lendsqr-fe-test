/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#E5E5E5",
        lemon: "#39CDCC",
        primary: "#545F7D",
        purple: "#213F7D",
        tomato: "#E4033B",
        yellow: "#E9B200",
        lightGreen: "#39CD62",
        blueish: "#39CDCC",
      },
    },
  },
  plugins: [],
};

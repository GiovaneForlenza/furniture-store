/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-green": "#314438",
        accent: "#8CC1D2",
        "bg-beige": "#F3F0ED",
        "text-brown": "#C66E4E",
      },
      fontFamily: {
        frank: ["Frank Ruhl Libre", "serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        KG: ['Kalnia Glaze', 'serif'],
        Brockmann: ["Brockmann", "sans-serif"],
      },
    },
  },
  plugins: [],
};


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#2f4050",
        "light-gray": "#f3f3f4",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

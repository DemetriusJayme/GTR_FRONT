/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-grey": "#2f4050",
        "light-grey": "#f3f3f4",
        blue: "#115163",
        "dark-blue": "#111827",
        orange: "#FF6F3A",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

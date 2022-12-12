/** @type {import('tailwindcss').Config} */

const labelsClasses = [
  "indigo",
  "gray",
  "green",
  "blue",
  "red",
  "purple",
];

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    ...labelsClasses.map((lbl) => `bg-${lbl}-500`),
    ...labelsClasses.map((lbl) => `bg-${lbl}-200`),
    ...labelsClasses.map((lbl) => `text-${lbl}-400`)
  ],
  theme: {
    extend: {
      colors: {
        "dark-grey": "#2f4050",
        "light-grey": "#f3f3f4",
        blue: "#115163",
        blue2: "#2C5B6D",
        "dark-blue": "#1f2937",
        orange: "#FF6F3A",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss/nesting")],
};

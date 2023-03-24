/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#706FE5",
        secondary: "#EAEAFC",
        footer: "#2E3E5C",
      },
      backgroundColor: {
        "gray-100": "#F3F4F6",
      },
      borderBottom: {
        active: "2px solid #38B2AC",
      },
    },
  },
  plugins: [],
};

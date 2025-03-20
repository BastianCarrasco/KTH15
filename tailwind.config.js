/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Habilita el modo oscuro manualmente con clases
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        slateCustom: "#334155",
      },
    },
  },
  plugins: [],
};

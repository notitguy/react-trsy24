/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mimono: ["Kode Mono", "monospace"],
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
      animation: {
        "spin-slow": "spin 7s linear infinite",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hospital: {
          navy: "#1A2B56",
          darkNavy: "#16213E",
          lightBlue: "#BFDBFE",
          skyBlue: "#0EA5E9",
          softBlue: "#E3EEFF",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

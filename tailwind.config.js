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
          navy: "#13213e",
          darkNavy: "#0f172a",
          lightBlue: "#ccfbf1",
          skyBlue: "#14b8a6",
          softBlue: "#f0fdfa",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

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
          navy: "#1E3A8A", /* Vibrant Royal Navy */
          darkNavy: "#0F172A",
          lightBlue: "#F0F9FF",
          skyBlue: "#0891B2",
          softBlue: "#F8FAFC",
          sun: "#F59E0B",
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

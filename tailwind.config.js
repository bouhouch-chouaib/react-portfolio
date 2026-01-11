/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'tahoma': ['Tahoma', 'sans-serif'],
        'segoe': ['Segoe UI', 'Tahoma', 'sans-serif'],
      },
      colors: {
        'xp-blue': '#245EDB',
        'xp-light-blue': '#316AC5',
        'xp-dark-blue': '#003399',
        'vista-glass': 'rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
}


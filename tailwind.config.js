/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        lightBg: '#f5f5f5',
        lightText: '#333333',
        darkBg: '#2C2C3A',
        darkText: '#BDC3C7',
        darkSecondary: '#ECF0F1',
        lightPrimary: '#6a0dad',
        lightSecondary: '#004080',
        darkPrimary: '#5a0080',
        darkSecondaryHover: '#003366',
      },
    },
  },
  plugins: [],
}


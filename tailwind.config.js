/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D94848',
          dark: '#B83838',
          light: '#E87070',
        },
        secondary: {
          DEFAULT: '#5C2E2E',
          dark: '#3D1F1F',
          light: '#7A4545',
        },
        accent: {
          DEFAULT: '#F4A3A3',
          dark: '#F28B8B',
          light: '#F7BEBE',
        },
        cream: {
          DEFAULT: '#F5E6D3',
          dark: '#E8D4BC',
          light: '#FFF8F0',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        numans: ['Numans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
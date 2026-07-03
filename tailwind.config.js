/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: '#2563EB',
        charcoal: '#1A1A1A',
        light: '#FAFAFA'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Sora', 'sans-serif'],
      },
      borderRadius: {
        'xl': '20px',
      }
    },
  },
  plugins: [],
}

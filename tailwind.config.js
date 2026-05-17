/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: '#0a192f',
        bgLight: '#112240',
        accentCyan: '#64ffda',
        textLight: '#ccd6f6',
        textDark: '#8892b0',
      },
    },
  },
  plugins: [],
}
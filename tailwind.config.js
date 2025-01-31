/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', // Include the index.html
    './src/**/*.{js,jsx,ts,tsx}', // Include JS, JSX, TS, and TSX files in the src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'], // Add 'Raleway' font
      },
    },
  },
  plugins: [],
}

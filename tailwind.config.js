/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,js}",  // Scans .html and .js files in the src folder
    "./public/index.html"     // Includes the index.html file in the public folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

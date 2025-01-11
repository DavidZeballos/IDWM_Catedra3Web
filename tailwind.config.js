/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        pastelBlue: {
          light: '#cce7ff',
          DEFAULT: '#99d6ff',
          dark: '#66c5ff',
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      width: {
        'fill-available': '-webkit-fill-available',
      },
      colors: {
        'grey-1': '#7F8084',
        'grey-2': '#27292D',
        'grey-3': '#35373B',
        'grey-4': '#C5C7CA',
        'grey-5': '#191920'
      }
    }
  },
  plugins: [],
}


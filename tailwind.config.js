/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px',
      screens: {
        default: "1400px"
      }
    },
    fontFamily: {
      roboto: ["Roboto", 'sans-serif'],
      work: ["Work Sans", 'sans-serif']
    },
    extend: {
      fontSize: {
        '10xl': '164px',
      },
      boxShadow: {
        'btn': '5px 5px 0px rgba(0,0,0,1)',
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      lg: {max: '1999.99px'},
      md: {max: '991.99px'},
      sm: {max: '767.99px'},
      xs: {max: '479.99px'},
    },
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif']
      },
      backgroundColor: {
        green:'#22C55E',
        darkGreay:'#2A3342',
        lightGreay:'#556987',
        footerGray: '#8896AB',
      }
    },
  },
  plugins: [],
}


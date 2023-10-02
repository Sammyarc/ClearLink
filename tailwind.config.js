/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1280px',
    },
    extend: {
      colors: {
        blue: '#0E21A0',
        lightblue: '#E4F1FF',
        silkwhite: '#F3F3F2',
      },
    },
  },
  plugins: [],
}


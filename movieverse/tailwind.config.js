/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html','./src/**/*.{tsx,ts,jsx,js}'],
  theme: {
    extend: {
      fontFamily:{
        'roboto':['Roboto']
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
      },
      colors:{
        'primary':"#fa3b2d",
      }
    },
    screens:{
      'sm':'0px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1650px',
    },
  },
  plugins: [],
}


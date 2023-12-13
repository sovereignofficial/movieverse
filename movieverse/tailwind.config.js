/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html','./src/**/*.{tsx,ts,jsx,js}'],
  theme: {
    extend: {
      fontFamily:{
        'roboto':['Roboto']
      },
      keyframes: {
        'fill-heart': {
          '0%': { transform: 'translateY(100%)' },
          '50%': { transform: 'translateY(50%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'fill-heart': 'fill-heart 0.3s ease-in-out',
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


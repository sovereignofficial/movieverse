/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html','./src/**/*.{tsx,ts,jsx,js}'],
  theme: {
    extend: {
      fontFamily:{
        'roboto':['Roboto']
      }
    },
    screens:{
      'sm':'0px',
      'md':'600px',
      'lg':'1280px',
    }
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brand: '#4cb5f9',
        facebook: '#385185',
        forget: '#00376b'
      },
      backgroundImage: {
        'phone-pattern': 'url(https://instagram.com/static/images/homepage/phones/home-phones-2x.png/cbc7174b4f05.png)'
      }
    },
  },
  plugins: [],
}
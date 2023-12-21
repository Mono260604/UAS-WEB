/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'navBar' : '#ffff',
      'primary': '#AC2B61',
      'product': '#AED79F',
      'body':'#DBB9C7',
      'searchBar':'#6c8ca4',
      'text':'#A96682',
    },
  },
  plugins: [],
}


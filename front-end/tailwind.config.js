/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
     colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'navBar' : '#ffff',
      'footBar': '#AC2B61',
      'product': '#AED79F',
    },
  },
  plugins: [],
}


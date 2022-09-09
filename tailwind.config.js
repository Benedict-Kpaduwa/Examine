/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm': '0px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    // colors:{
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   'purple': '#5E3B76',
    // },
    extend: {
      fontFamily:{
        sans:['Lora', 'serif'],
        sans:['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

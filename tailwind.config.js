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
    extend: {
      fontFamily:{
        sans:['Lora', 'serif'],
        sans:['Inter', 'sans-serif']
      },
      boxShadow:{
        '3xl': '0px 2px 12px rgba(0, 0, 0, 0.08)',
        '4xl': '0px 2px 6px rgba(0, 0, 0, 0.08)',
        '5xl': 'inset 0px 0px 18px -4px rgba(0, 0, 0, 0.15)'
      }
    },
  },
  plugins: [],
}

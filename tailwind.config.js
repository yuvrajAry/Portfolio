/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gtaGreen: '#2E8B57', // Franklin
        gtaBlue: '#4682B4', // Michael
        gtaOrange: '#FF8C00', // Trevor
        hudGreen: '#4CAF50', // Stats/Health
        hudGray: 'rgba(0, 0, 0, 0.7)', // HUD Background
        wantedRed: '#FF0000', // Wanted stars
      },
      fontFamily: {
        gta: ['Anton', 'sans-serif'], // Logo style
        hud: ['Chalet', 'Inter', 'sans-serif'], // UI style
      },
      backgroundImage: {
        'vinewood': "url('https://images.unsplash.com/photo-1584967918940-a7d51f06426e?q=80&w=2070&auto=format&fit=crop')", // LA/Los Santos vibe
      }
    },
  },
  plugins: [],
}

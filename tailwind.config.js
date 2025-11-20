/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gammaGreen: '#76b900', // Hulk Green
        hulkPurple: '#8b5cf6', // Purple pants/accents
        darkBg: '#050505',
        glass: 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        futuristic: ['Orbitron', 'sans-serif'],
        impact: ['Impact', 'sans-serif'], // For SMASH effects
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}

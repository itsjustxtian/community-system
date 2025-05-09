/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{astro,html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out forwards',
      },
    },
  },  
  plugins: [],
}

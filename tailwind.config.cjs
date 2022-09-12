/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary-blue' : '#152044',
      },
      backgroundImage: {
        'hero': "url('/images/backgrounds/hero.svg')",
        'service': "url('/images/backgrounds/bg_services.svg')",
      },
      fontFamily: {
        'Helvetica': 'Helvetica',
      },
    },
  },
  plugins: [],
}

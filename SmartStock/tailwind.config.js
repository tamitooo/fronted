module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // Ejemplo: azul de Tailwind
      },
      fontFamily: {
        silkscreen: ['Silkscreen', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
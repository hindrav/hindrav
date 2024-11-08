// tailwind.config.js
module.exports = {
  content: [
    "./index.html", // Asegúrate de que Tailwind escanee tu archivo HTML
    "./src/**/*.{js,ts,jsx,tsx}", // Asegúrate de que Tailwind escanee los archivos JS y TSX
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
        courier: ['Courier Prime', 'monospace'],
      },
      colors: {
        primary: "#dcfd52",
        secondary: "#FFFFFF",
        startColor: '#1e2d2a',
        endColor: '#0a0815',
      },
    },
  },
  plugins: [],
}

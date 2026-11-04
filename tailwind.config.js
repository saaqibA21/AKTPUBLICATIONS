/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        akt: {
          orange: '#C2410C',    // Burnt Orange accent
          orangeDark: '#9A3412',
          orangeLight: '#FFEDD5',
          canvas: '#F5F2EB',    // Editorial paper / parchment background
          canvasSubtle: '#ECE8DE',
          dark: '#0A0A0A',      // Deep black
          darkSoft: '#171717',  // Carbon black
          muted: '#525252',     // Neutral gray
          sand: '#EAE6DD',      // Dossier border / accent
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'], // Swapped from Bebas Neue to Playfair Display
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        bebas: ['"Bebas Neue"', 'Oswald', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'editorial': '0 10px 30px -10px rgba(0, 0, 0, 0.25)',
        'dossier': '0 4px 20px -2px rgba(0, 0, 0, 0.15)',
        'pill': '0 4px 24px rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [],
}

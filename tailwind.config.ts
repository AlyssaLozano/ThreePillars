/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          cream: '#FAF7F2',
          'cream-dark': '#F2EDE4',
          navy: '#1E2A3A',
          'navy-light': '#2A3A4E',
          gold: '#C9A961',
          'gold-light': '#D4BC7E',
          'gold-dark': '#B8953A',
          charcoal: '#4A4A4A',
          'charcoal-light': '#6B6B6B',
        },
        fontFamily: {
          serif: ['Cormorant Garamond', 'Georgia', 'serif'],
          sans: ['Inter', 'system-ui', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
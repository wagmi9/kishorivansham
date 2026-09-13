/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './context/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          DEFAULT: '#0D1B2A',
          light: '#152a3f',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#e8cd6f',
          dark: '#a9862a',
        },
        cream: '#F8F9FA',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        luxury: '0 20px 60px -15px rgba(13, 27, 42, 0.25)',
      },
    },
  },
  plugins: [],
};

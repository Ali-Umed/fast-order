/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Outfit, sans-serif',
    },

    extend: {
      colors: {
        pizza: {
          400: '#FFB380',
          500: '#FF9F5A',
          600: '#E07E3C',
        },
      },
      fontSize: {
        huge: ['80rem', { lineHeight: '1' }],
      },
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};

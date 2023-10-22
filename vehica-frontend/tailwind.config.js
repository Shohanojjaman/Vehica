/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        lg: '0rem',
      },
    },
    extend: {
      colors: {
        primary: '#ff4605',
        'primary-light': '#fff0eb',
        heading: '#222732',
        body: '#6f6f6f',
      },
    },
  },
  plugins: [],
};

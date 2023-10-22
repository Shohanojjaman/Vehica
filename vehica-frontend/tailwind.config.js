/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
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

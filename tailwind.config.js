/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#000000',
          800: '#121212',
          700: '#1E1E1E',
          600: '#2D2D2D',
          500: '#3D3D3D',
          400: '#4D4D4D',
          300: '#5D5D5D',
          200: '#7D7D7D',
          100: '#9D9D9D',
          50: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
      },
      boxShadow: {
        'neon': '0 0 5px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 0.1)',
        'neon-hover': '0 0 10px rgba(255, 255, 255, 0.2), 0 0 40px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
};
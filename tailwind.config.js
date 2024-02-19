/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '400px',
        md: '640px',
        lg: '768px',
        xl: '1024px',
        '2xl': '1280px',
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        shadowsintolight: ['Shadows Into Light', 'sans-serif'],
      },
      keyframes: {
        blinking: {
          '0%': {
            opacity: 1,
          },
          '50%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
      animation: {
        blinking: 'blinking 1.5s infinite',
      },
    },
  },
  plugins: [require('@designbycode/tailwindcss-text-shadow')],
};

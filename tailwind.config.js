const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },
    },
    animation: {
      gradient: 'gradient 5s ease infinite',
    },
    keyframes: {
      float: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-5%)' },
      },
      gradient: {
        '0%, 100%': {
          'background-size': '200% 200%',
          'background-position': 'left center',
        },
        '50%': {
          'background-size': '200% 200%',
          'background-position': 'right center',
        },
      },
    },
},
  variants: {},
  plugins: [require('@tailwindcss/forms')],
};

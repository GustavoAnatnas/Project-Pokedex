const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.slate,
        green: colors.emerald,
        purple: colors.violet,
        yellow: colors.amber,
        pink: colors.fuchsia,
        cyan: colors.cyan,
        red: colors.red,
        indigo: colors.indigo,
      },
      screens: {
        'mobile': '350px',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  
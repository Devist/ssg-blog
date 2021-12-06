const colors = require('tailwindcss/colors')

module.exports = {
  // Uncomment the line below to enable the experimental Just-in-Time ("JIT") mode.
  // https://tailwindcss.com/docs/just-in-time-mode
  // mode: "jit",
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    colors: {
      primary: '#4c56ff',
      secondary: '#5FF0A5',
      success: '#1AC47D',
      danger: '#EA5455',
      warning: '#FA9F43',
      dark: '#1E1E1E',
      white: '#ffffff',
      ...colors
    },
    extend: {}
  },
  variants: {},
  plugins: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html']
}

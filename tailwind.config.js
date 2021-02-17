module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'home': "url('./images/code1.jpg')"
      }),
      width: {
        'fit-content': 'fit-content'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

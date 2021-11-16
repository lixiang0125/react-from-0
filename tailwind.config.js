module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.(js,ts,tsx)',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        sm: ['12px', '18px'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

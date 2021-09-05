module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('IP-Adress-Tracker-2.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

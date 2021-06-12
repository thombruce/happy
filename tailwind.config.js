const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    // To extend the color palette (though this can also be done by adding additional colors to colors object)
    extend: {
      colors: {
        primary: { ...colors.yellow, ...{ DEFAULT: colors.yellow['500'] } },
        secondary: { ...colors.amber, ...{ DEFAULT: colors.amber['500'] } },
        dark: { ...colors.warmGray, ...{ DEFAULT: colors.warmGray['900'] } },
        light: { ...colors.yellow, ...{ DEFAULT: colors.yellow['50'] } }
      },
      // To add fonts
      fontFamily: {
        poster: ['Life Savers']
      }
    }
  }
}

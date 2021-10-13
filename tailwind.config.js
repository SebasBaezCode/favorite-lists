module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1760px'
     },
     padding: {
        DEFAULT: '0px',
        sm: '0px',
        md: '0px',
        lg: '40px',
        xl: '80px'
      }
    },
    extend: {
      colors: {
        'lh-jungle-green': '#012D26',
        'lh-jungle-gren-gray': '#5B6866',
        'lh-sky-blue': '#3948FF',
        'lh-blue': '#EBEDFF'
      },
      transitionProperty: {
        'left': 'left'
      },
    },
  },
  variants: {
    extend: {
      colors: {}
    },
  },
  plugins: []
}

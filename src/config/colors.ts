
interface ColorPalette {
  black: string
  teal: {
    [key: number]: string
  }
  navy: {
    [key: number]: string
  }
  blue: {
    [key: number]: string
  }
  grey: {
    [key: number]: string
  }
  red: {
    [key: number]: string
  }
  pink: string
  white: string
}

const colors: ColorPalette = {
  black: '#000000',
  teal: {
    100: '#006C6E',
    200: '#009598',
    300: '#00BFC1',
  },
  navy: {
    100: '#020318',
    200: '#060725',
    300: '#0B0E3A',
  },
  blue: {
    100: '#2C498A',
    200: '#3559AA',
    300: '#5B7BC1',
  },
  grey: {
    100: '#202122',
    200: '#5E5F63',
    300: '#7F8185',
    400: '#9EA0A5',
    500: '#C0C2C8',
    600: '#E0E2E6',
  },
  red: {
    100: '#8C1038',
    200: '#D31450',
  },
  pink: '#EF4C84',
  white: '#F0F0F2'
}

export default colors
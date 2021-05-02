import createPalette, {
  PaletteOptions,
} from '@material-ui/core/styles/createPalette'

const palette: PaletteOptions = {
  primary: {
    light: '#6069B4',
    main: '#4C59BF',
    dark: '#323C6B',
    contrastText: '#FFFFFF',
  },
  secondary: {
    light: '#8186F2',
    main: '#F86281',
    dark: '#F5D9AA',
    contrastText: '#FFFFFF',
  },
  // background: {
  //   default: '',
  //   paper: '#fff',
  // },
  // info: {
  //   light: '',
  //   main: '',
  //   dark: '',
  //   contrastText: '',
  // },
  // error: {
  //   main: '',
  // },
}

export default createPalette(palette)

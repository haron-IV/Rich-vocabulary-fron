import { TypographyOptions } from '@material-ui/core/styles/createTypography'
import palette from './palette'

const typography: TypographyOptions = {
  fontFamily: [
    'Montserrat',
    // '-apple-system',
    // 'BlinkMacSystemFont',
    // '"Segoe UI"',
    // 'Roboto',
    // '"Helvetica Neue"',
    // 'Arial',
    // 'sans-serif',
    // '"Apple Color Emoji"',
    // '"Segoe UI Emoji"',
    // '"Segoe UI Symbol"',
  ].join(','),
  fontWeightBold: 500,
  allVariants: {
    color: palette.text.primary,
  },
  body1: {
    fontSize: '1rem',
  },
  h1: {
    color: palette.primary.contrastText,
    fontSize: '5rem',
  },
  h3: {
    fontSize: '2.5rem',
    fontWeight: 500,
  },
}

export default typography

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
  h1: {
    color: palette.primary.contrastText,
    fontSize: '5rem',
  },
}

export default typography

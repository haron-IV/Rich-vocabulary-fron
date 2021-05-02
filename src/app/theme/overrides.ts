import { Overrides } from '@material-ui/core/styles/overrides'

const overrides: Overrides = {
  MuiCssBaseline: {
    '@global': {
      '#root': {
        minHeight: '100vh',
        maxHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      },
    },
  },
}

export default overrides

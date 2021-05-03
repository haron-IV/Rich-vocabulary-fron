import { Overrides } from '@material-ui/core/styles/overrides'

const overrides: Overrides = {
  MuiCssBaseline: {
    '@global': {
      '#root': {
        minHeight: '100vh',
        maxWidth: '100vw',
        display: 'flex',
        overflow: 'hidden',
        flexDirection: 'column',
      },
    },
  },
}

export default overrides

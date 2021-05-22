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
      '*::-webkit-scrollbar': {
        width: '0.4em',
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
      },
      '*::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(255,255,255,0.05)',
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,.1)',
        outline: '1px solid rgba(255, 255, 255, .5)',
      },
    },
  },
}

export default overrides

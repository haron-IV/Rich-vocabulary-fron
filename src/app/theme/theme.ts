import { Theme, createMuiTheme } from '@material-ui/core'
import zIndex from './zIndex'
import typography from './typography'
import palette from './palette'
import overrides from './overrides'

const theme: Theme = createMuiTheme({
  zIndex,
  palette,
  typography,
  overrides,
})

export default theme

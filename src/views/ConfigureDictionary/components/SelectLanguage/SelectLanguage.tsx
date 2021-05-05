import { Box, Grid } from '@material-ui/core'
import { WomanHi } from 'shared/icons'
import { StyledSelect } from './SelectLanguage.style'

const SelectLanguage = () => {
  return (
    <Box fontSize="50px" mt={5}>
      <Grid container justify="center">
        <WomanHi fontSize="inherit" />
        <StyledSelect fullWidth variant="outlined" defaultValue="placeholder">
          <option value="placeholder" style={{ display: 'none' }}>
            Select language
          </option>
        </StyledSelect>
      </Grid>
    </Box>
  )
}

export default SelectLanguage

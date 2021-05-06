import { Box, Grid } from '@material-ui/core'
import { WomanHi } from 'shared/icons'
import { MenuList, StyledSelect } from './SelectLanguage.style'

const languages = ['English', 'Polish', 'Spanish', 'French', 'German']

const SelectLanguage = () => {
  const classes = MenuList()

  return (
    <Box fontSize="50px" mt={5}>
      <Grid container justify="center">
        <WomanHi fontSize="inherit" />
        <StyledSelect
          fullWidth
          variant="outlined"
          defaultValue="placeholder"
          MenuProps={{
            classes: { paper: classes.menu },
            anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
            transformOrigin: { vertical: 'top', horizontal: 'left' },
            getContentAnchorEl: null,
          }}
        >
          <option value="placeholder" style={{ display: 'none' }}>
            Select language
          </option>
          {languages.map(language => (
            <option value={language} key={language}>
              {language}
            </option>
          ))}
        </StyledSelect>
      </Grid>
    </Box>
  )
}

export default SelectLanguage

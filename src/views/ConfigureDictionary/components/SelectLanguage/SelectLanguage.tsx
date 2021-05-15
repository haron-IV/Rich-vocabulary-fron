import { Box, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { Translation, WomanHi, Arrow } from 'shared/icons'
import { actions } from 'shared/store/ConfigureDictionary'
import { MenuList, StyledSelect } from './SelectLanguage.style'

const languages = ['English', 'Polish', 'Spanish', 'French', 'German']

interface SelectLanguageProps {
  nextStep: () => void
}
const SelectLanguage = ({ nextStep }: SelectLanguageProps) => {
  const classes = MenuList()
  const dispatch = useDispatch()
  const handleLanguageSelect = (language: string) => {
    dispatch(actions.setLanguage(language))
    nextStep()
  }

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
          startAdornment={<Translation />}
          IconComponent={Arrow}
          onChange={e => handleLanguageSelect(e.target.value as string)}
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

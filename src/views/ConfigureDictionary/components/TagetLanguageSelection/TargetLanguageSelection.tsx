import { Typography } from '@material-ui/core'
import SelectLanguage from '../SelectLanguage'
import { SelectionBox, StyledContainer } from './TargetLanguageSelection.style'

const TargetLanguageSelection = () => {
  return (
    <StyledContainer maxWidth="md">
      <SelectionBox>
        <Typography variant="h4" color="inherit" align="center">
          Select your target language that you want to learn
        </Typography>

        <SelectLanguage />
      </SelectionBox>
    </StyledContainer>
  )
}

export default TargetLanguageSelection

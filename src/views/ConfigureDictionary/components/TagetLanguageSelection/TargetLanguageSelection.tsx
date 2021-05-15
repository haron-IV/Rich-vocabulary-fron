import { Typography } from '@material-ui/core'
import Configuration from '../Configuration'
import SelectLanguage from '../SelectLanguage'
import { SelectionBox, StyledContainer } from './TargetLanguageSelection.style'

interface TargetLanguageSectionProps {
  step: number
  nextStep: () => void
}
const TargetLanguageSelection = ({
  step,
  nextStep,
}: TargetLanguageSectionProps) => {
  return (
    <StyledContainer maxWidth="md">
      <SelectionBox>
        <Typography variant="h4" color="inherit" align="center">
          Select your target language that you want to learn
        </Typography>

        <SelectLanguage nextStep={nextStep} />
        {step >= 2 && <Configuration />}
      </SelectionBox>
    </StyledContainer>
  )
}

export default TargetLanguageSelection

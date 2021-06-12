import { useState } from 'react'
import { Box, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { SearchableSelect } from 'shared/components'
import { useLanguageList } from 'shared/hooks'
import { Arrow, Translation, WomanHi } from 'shared/icons'
import { actions } from 'shared/store/ConfigureDictionary'

interface SelectLanguageProps {
  nextStep: () => void
}
const SelectLanguage = ({ nextStep }: SelectLanguageProps) => {
  const dispatch = useDispatch()
  const languages = useLanguageList()
  const [selectedLanguage, setSelectedLanguage] = useState<string | number>('')
  const handleLanguageSelect = (language: string | number) => {
    setSelectedLanguage(language)
    dispatch(actions.setLanguage(language as string))
    nextStep()
  }

  return (
    <Box fontSize="50px" mt={5}>
      <Grid container justify="center">
        <WomanHi fontSize="inherit" />
        <SearchableSelect
          startIcon={<Translation />}
          placeholder="Select language"
          arrowEl={<Arrow />}
          listItems={languages}
          maxHeight="280px"
          itemHeight="25px"
          onSelect={handleLanguageSelect}
          value={selectedLanguage}
        />
      </Grid>
    </Box>
  )
}

export default SelectLanguage

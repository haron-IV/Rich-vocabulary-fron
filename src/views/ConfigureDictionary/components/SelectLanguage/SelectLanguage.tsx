import { Box, Grid } from '@material-ui/core'
import { useState } from 'react'
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
        {/* TODO: make searchable select */}
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
        {/* <StyledSelect
          fullWidth
          variant="outlined"
          defaultValue="placeholder"
          MenuProps={{
            classes: { paper: classes.menu },
            anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
          }}
          startAdornment={<Translation />}
          IconComponent={Arrow}
          onChange={e => handleLanguageSelect(e.target.value as string)}
          // onFocus={() => setSearchActive(true)}
          // onBlur={() => setSearchActive(false)}
          onOpen={() => setSearchActive(true)}
        >
          <option value="placeholder" style={{ display: 'none' }}>
            Select language
          </option>
          {languages.map(language => {
            return (
              language.includes(searchValue) && (
                <option value={language} key={language}>
                  {language}
                </option>
              )
            )
          })}
        </StyledSelect> */}
        {/* <StyledTextField
          style={{ position: 'absolute' }}
          onChange={e => setSearchValue(e.target.value)}
          autoFocus
          focused={searchActive}
          variant="filled"
          visible={true}
        /> */}
      </Grid>
    </Box>
  )
}

export default SelectLanguage

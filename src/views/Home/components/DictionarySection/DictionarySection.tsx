import { Box, Grid, styled } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { RoundedButton } from 'shared/components'
import { getDictionary, WordAPI } from 'shared/services/dictionary'
import Word from '../Word'

const WordsWrapper = styled(Grid)({
  overflow: 'hidden scroll',
  height: '95%',
})

const DictionarySection = () => {
  const [dictionary, setDictionary] = useState<WordAPI[]>()

  useEffect(() => {
    ;(async () => {
      const dictionary = await getDictionary()
      setDictionary(dictionary)
    })()
  }, [])

  return (
    <>
      <RoundedButton
        variant="contained"
        color="secondary"
        width={150}
        height={35}
      >
        Add word
      </RoundedButton>

      <WordsWrapper item xs={12}>
        <Box mt={5} mx={5} display="flex" flexWrap="wrap">
          {dictionary?.map(({ id, firstLanguage, secondLanguage }) => (
            <Word
              id={id}
              targetLanguage={firstLanguage}
              nativeLanguage={secondLanguage}
            />
          ))}
        </Box>
      </WordsWrapper>
    </>
  )
}

export default DictionarySection

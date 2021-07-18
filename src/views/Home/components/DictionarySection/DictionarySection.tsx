import { Box, Grid, styled } from '@material-ui/core'
import { RoundedButton } from 'shared/components'
import Word from '../Word'

const WordsWrapper = styled(Grid)({
  overflow: 'hidden scroll',
  height: '95%',
})

const DictionarySection = () => {
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
          {new Array(100).fill('').map(el => (
            <Word id={el} targetLanguage="green" nativeLanguage="zielony" />
          ))}
        </Box>
      </WordsWrapper>
    </>
  )
}

export default DictionarySection

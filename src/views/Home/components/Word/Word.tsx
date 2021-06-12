import { styled } from '@material-ui/core'

const StyledWord = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  textAlign: 'center',
  padding: theme.spacing(2.5, 5),
  borderRadius: 4,
}))

interface WordProps {
  id: string
  targetLanguage: string
  nativeLanguage: string
}
const Word = () => {
  return <StyledWord>green - zielony</StyledWord>
}

export default Word

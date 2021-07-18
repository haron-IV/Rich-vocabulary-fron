import { Button, styled } from '@material-ui/core'
import theme from 'app/theme/theme'
import { Close } from 'shared/icons'

const StyledWord = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  textAlign: 'center',
  padding: theme.spacing(2.5, 2),
  margin: theme.spacing(1),
  borderRadius: 4,
  width: 'max-content',
  display: 'flex',
  justifyContent: 'space-between',
}))
const DeleteButton = styled(Button)(({ theme }) => ({
  height: '100%',
  minWidth: 20,
  marginLeft: theme.spacing(2),
}))
const DeleteIcon = styled(Close)({
  width: 10,
  height: 10,
})

interface WordProps {
  id: string
  targetLanguage: string
  nativeLanguage: string
}
const Word = ({ id, targetLanguage, nativeLanguage }: WordProps) => {
  return (
    <StyledWord>
      <div>
        {targetLanguage} - {nativeLanguage}
      </div>
      <DeleteButton>
        <DeleteIcon />
      </DeleteButton>
    </StyledWord>
  )
}

export default Word

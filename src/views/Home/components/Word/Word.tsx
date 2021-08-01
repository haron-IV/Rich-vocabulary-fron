import { ButtonBase } from '@material-ui/core'
import { Button, styled } from '@material-ui/core'
import { Close } from 'shared/icons'

const StyledWord = styled(ButtonBase)(({ theme }) => ({
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
  onClick: () => void
}
const Word = ({ id, targetLanguage, nativeLanguage, onClick }: WordProps) => {
  return (
    <StyledWord onClick={onClick}>
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

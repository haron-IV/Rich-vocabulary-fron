import { Box } from '@material-ui/core'
import { RoundedButton } from 'shared/components'
import Word from '../Word'

const DictionarySection = () => {
  return (
    <div>
      <RoundedButton
        variant="contained"
        color="secondary"
        width={150}
        height={35}
      >
        Add word
      </RoundedButton>
      <Box mt={5}>
        <Word />
      </Box>
    </div>
  )
}

export default DictionarySection

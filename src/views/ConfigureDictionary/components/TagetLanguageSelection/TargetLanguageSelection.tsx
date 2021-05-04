import { Select, Typography } from '@material-ui/core'
import { WomanHi } from 'shared/icons'

const TargetLanguageSelection = () => {
  return (
    <div>
      <Typography variant="h3">
        Select your target language that you want to learn
        <WomanHi />
        <Select />
      </Typography>
    </div>
  )
}

export default TargetLanguageSelection

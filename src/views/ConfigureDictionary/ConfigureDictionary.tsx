import { Box } from '@material-ui/core'
import { useState } from 'react'
import { AddLanguage, TargetLanguageSelection } from './components'

const ConfigureDictionary = () => {
  const [configurationStep, setConfigurationStep] = useState(1)

  return (
    <Box mt="12%">
      {() => {
        switch (configurationStep) {
          case 0:
            return <AddLanguage />
          case 1:
            return <TargetLanguageSelection />
        }
      }}
    </Box>
  )
}

export default ConfigureDictionary

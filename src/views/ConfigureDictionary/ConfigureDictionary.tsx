import { Box } from '@material-ui/core'
import { useState } from 'react'
import { AddLanguage, TargetLanguageSelection } from './components'

const ConfigureDictionary = () => {
  const [configurationStep, setConfigurationStep] = useState(0)
  const nextStep = () => setConfigurationStep(configurationStep + 1)

  return (
    <Box mt="12%">
      {() => {
        switch (configurationStep) {
          case 0:
            return <AddLanguage nextStep={nextStep} />
          default:
            return (
              <TargetLanguageSelection
                step={configurationStep}
                nextStep={nextStep}
              />
            )
        }
      }}
    </Box>
  )
}

export default ConfigureDictionary

import { Box, Grid, Typography } from '@material-ui/core'
import { RoundedButton } from 'shared/components'

const ConfigureDictionary = () => {
  return (
    <Box mt="12%">
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        spacing={10}
      >
        <Grid item xs={12}>
          <Typography variant="h1" align="center">
            Add your target language
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <RoundedButton
            variant="contained"
            color="secondary"
            size="large"
            width={400}
            height={100}
          >
            <Typography variant="h4" align="center">
              <Box fontWeight="500">Add Language</Box>
            </Typography>
          </RoundedButton>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ConfigureDictionary

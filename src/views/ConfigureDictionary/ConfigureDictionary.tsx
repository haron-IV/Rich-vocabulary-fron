import { Box, Container, Grid, Typography } from '@material-ui/core'

const ConfigureDictionary = () => {
  return (
    <Container style={{ height: '100%' }}>
      <Grid container alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h1" align="center">
            Add your target language
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ConfigureDictionary

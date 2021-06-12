import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Typography,
} from '@material-ui/core'
import { Routes } from 'app/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { RoundedButton } from 'shared/components'
import { selectors } from 'shared/store/ConfigureDictionary'
import { selectors as databaseSelectors } from 'shared/store/database'
import {
  init as initDatabase,
  isDatabaseExist,
} from 'shared/store/database/database'
import { RequestStatus } from 'shared/types'

const Configuration = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const firstLanguage = useSelector(
    selectors.getDictionaryConfiguration
  ).language
  const { data } = useSelector(databaseSelectors.getIsDatabaseExist)
  const { requestStatus } = useSelector(databaseSelectors.getInitDatabase)
  const createDictionary = () => {
    dispatch(initDatabase({ firstLanguage }))
    dispatch(isDatabaseExist())
  }

  useEffect(() => {
    if (data && requestStatus === RequestStatus.fulfilled)
      history.push(Routes.home)
  }, [data, history, requestStatus])

  return (
    <Box color="secondary" mt={4}>
      <Typography variant="h5" color="inherit" align="center">
        Almost there...
      </Typography>
      <Typography variant="h5" color="inherit" align="center">
        You can specify your configuration now or
        <Box mr={1} display="inline">
          <RoundedButton
            variant="contained"
            color="secondary"
            width={90}
            height={30}
          >
            skip it
          </RoundedButton>
        </Box>
        and do it later
      </Typography>
      <Box mt={3}>
        <Grid container>
          <FormControl>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={
                <Typography variant="body1" color="primary">
                  read automatically
                </Typography>
              }
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={
                <Typography variant="body1" color="primary">
                  time alert
                </Typography>
              }
            />

            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={
                <Typography variant="body1" color="primary">
                  sound alert
                </Typography>
              }
            />
          </FormControl>
        </Grid>
      </Box>
      <Grid container justify="flex-end">
        <RoundedButton
          variant="outlined"
          color="primary"
          width={80}
          height={30}
          onClick={createDictionary}
        >
          Done
        </RoundedButton>
      </Grid>
    </Box>
  )
}

export default Configuration

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { Container, Grid, Box } from '@material-ui/core'
import { Routes } from 'app/router'
import { selectors, isDatabaseExist } from 'shared/store/database'
import { RequestStatus } from 'shared/types'
import VerticalSection from '../VerticalSection'
import DictionarySection from '../DictionarySection'

const ContentWrapper = () => {
  const dispatch = useDispatch()
  const { data, requestStatus } = useSelector(selectors.getIsDatabaseExist)
  const history = useHistory()

  useEffect(() => {
    dispatch(isDatabaseExist())
  }, [dispatch])

  useEffect(() => {
    if (requestStatus === RequestStatus.fulfilled && !data) {
      history.push(Routes.configureDictionary)
    }
  }, [data, requestStatus, history])
  return (
    <Container>
      <Box height="100vh" display="flex" alignItems="center">
        {requestStatus === RequestStatus.fulfilled && data && (
          <Grid container spacing={2}>
            <VerticalSection title="Dictionary">
              <DictionarySection />
            </VerticalSection>
            <VerticalSection title="Session"></VerticalSection>
            <VerticalSection title="Collections"></VerticalSection>
          </Grid>
        )}
      </Box>
    </Container>
  )
}

export default ContentWrapper

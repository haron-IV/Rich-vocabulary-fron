import { Container } from '@material-ui/core'
import { Routes } from 'app/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { selectors } from 'shared/store/database'
import { isDatabaseExist } from 'shared/store/database/database'
import { RequestStatus } from 'shared/types'

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
      <div>
        {requestStatus === RequestStatus.fulfilled && data && <h1>ELo</h1>}
      </div>
    </Container>
  )
}

export default ContentWrapper

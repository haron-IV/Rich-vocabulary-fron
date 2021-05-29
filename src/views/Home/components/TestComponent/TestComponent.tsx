import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { selectors } from 'shared/store/database'
import { isDatabaseExist } from 'shared/store/database/database'
import { RequestStatus } from 'shared/types'
import { TestComponentStyled } from './TestComponent.style'

const TestComponent = () => {
  const dispatch = useDispatch()
  const { data, requestStatus } = useSelector(selectors.getIsDatabaseExist)
  const history = useHistory()

  useEffect(() => {
    dispatch(isDatabaseExist())
  }, [dispatch])

  useEffect(() => {
    if (requestStatus === RequestStatus.fulfilled && !data) {
      history.push('/configure-dictionary')
    }
  }, [data, requestStatus, history])
  return (
    <TestComponentStyled>
      {requestStatus === RequestStatus.fulfilled &&
        data &&
        'Test Styled Component'}
    </TestComponentStyled>
  )
}

export default TestComponent

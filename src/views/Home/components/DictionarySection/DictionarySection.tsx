import { Box, Grid, styled } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, RoundedButton } from 'shared/components'
import { WordAPI } from 'shared/services/dictionary'
import { actions } from 'shared/store/home'
import {
  getDictionary,
  addWord as addWordApi,
  selectors,
} from 'shared/store/home/home'
import AddWordForm from '../AddWordForm'
import Word from '../Word'
import { useAddWordModal } from './DictionarySection.utils'

const WordsWrapper = styled(Grid)({
  overflow: 'hidden scroll',
  height: '95%',
})

const DictionarySection = () => {
  const dispatch = useDispatch()
  const dictionary = useSelector(selectors.getDictionary)
  const addWordData = useSelector(selectors.getAddWordData)
  const modalButtonSize = {
    width: 150,
    height: 30,
  }
  const [isEdit, setIsEdit] = useState(false)
  const { isAddWordModalOpened, setIsAddWordModalOpened } = useAddWordModal()

  const setEditedWord = (wordId: WordAPI['id']) => {
    setIsEdit(true)
    setIsAddWordModalOpened(true)
    dispatch(actions.setEditedWord(wordId))
  }

  const onEditionDiscard = () => {
    setIsAddWordModalOpened(false)
    dispatch(actions.resetEditedWord())
  }

  const onAddWordClick = () => {
    setIsEdit(false)
    setIsAddWordModalOpened(true)
  }

  const addWord = () => {
    if (!addWordData) return
    setIsAddWordModalOpened(false)
    dispatch(addWordApi(addWordData))
  }

  useEffect(() => {
    dispatch(getDictionary())
  }, [dispatch])

  return (
    <>
      <Modal
        title={isEdit ? 'Edit word' : 'Add word'}
        content={<AddWordForm isEditing={isEdit} />}
        footer={
          <>
            <RoundedButton
              variant="contained"
              {...modalButtonSize}
              onClick={isEdit ? () => {} : () => addWord()}
            >
              {isEdit ? 'confirm' : 'add'}
            </RoundedButton>
            <RoundedButton
              onClick={onEditionDiscard}
              variant="contained"
              {...modalButtonSize}
            >
              discard
            </RoundedButton>
          </>
        }
        isOpen={isAddWordModalOpened}
      />
      <RoundedButton
        variant="contained"
        color="secondary"
        width={150}
        height={35}
        onClick={onAddWordClick}
      >
        Add word
      </RoundedButton>

      <WordsWrapper item xs={12}>
        <Box mt={5} mx={5} display="flex" flexWrap="wrap">
          {dictionary?.map(({ id, firstLanguage, secondLanguage }) => (
            <Word
              key={`word-${id}`}
              id={id}
              targetLanguage={firstLanguage}
              nativeLanguage={secondLanguage}
              onClick={() => setEditedWord(id)}
            />
          ))}
        </Box>
      </WordsWrapper>
    </>
  )
}

export default DictionarySection

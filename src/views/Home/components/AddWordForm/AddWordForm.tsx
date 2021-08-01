import {
  Checkbox,
  FormControl,
  Input,
  Grid,
  Typography,
  styled,
} from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectors, actions } from 'shared/store/home'

const Label = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontWeight: 600,
}))

const InputContained = styled(Input)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
}))

interface AddWordFormProps {
  isEditing: boolean
}
const AddWordForm = ({ isEditing }: AddWordFormProps) => {
  const dispatch = useDispatch()
  const editedWord = useSelector(selectors.getEditedWord)
  const [targetLang, setTargetLang] = useState<string | undefined>('')
  const [nativeLang, setNativeLang] = useState<string | undefined>('')
  const [description, setDescription] = useState<string | undefined>('')
  const [learned, setLearned] = useState(false)

  useEffect(() => {
    setTargetLang(editedWord?.firstLanguage)
    setNativeLang(editedWord?.secondLanguage)
    setDescription(editedWord?.description)
    setLearned(Boolean(editedWord?.learned))
  }, [editedWord])

  useEffect(() => {
    if (!targetLang || !nativeLang || isEditing) return
    dispatch(
      actions.setAddWord({
        firstLanguage: targetLang,
        secondLanguage: nativeLang,
        description: description || '',
        learned: Boolean(learned),
        tags: [],
      })
    )
  }, [targetLang, nativeLang, description, learned, isEditing, dispatch])

  return (
    <FormControl>
      <Grid container>
        <Grid item xs={4}>
          <Label>Target language</Label>
          <InputContained
            value={targetLang}
            onChange={e => setTargetLang(e.target.value)}
          />
        </Grid>
        <div>-</div>
        <Grid item xs={4}>
          <Label>Native language</Label>
          <InputContained
            value={nativeLang}
            onChange={e => setNativeLang(e.target.value)}
          />
        </Grid>
      </Grid>
      <Label variant="body1">description</Label>
      <textarea
        onChange={e => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <div style={{ color: 'blue' }}>image here</div>
      <Label>
        <Checkbox
          value={learned}
          onChange={e => setLearned(Boolean(e.target.value))}
        />
        learned
      </Label>
      <div style={{ color: 'blue' }}>tags here</div>
    </FormControl>
  )
}

export default AddWordForm

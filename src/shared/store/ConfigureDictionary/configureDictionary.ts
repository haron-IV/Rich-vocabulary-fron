import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'

interface InitialState {
  language: string
}
const initialState: InitialState = {
  language: '',
}

const reducers = {
  setLanguage: (state: InitialState, action: PayloadAction<string>) => {
    state.language = action.payload
  },
}

export const configureDictionary = createSlice({
  name: 'configureDictionary',
  initialState,
  reducers,
})

export const actions = configureDictionary.actions
export const selectors = {
  getDictionaryConfiguration: (state: RootState) => state.configureDictionary,
}

export default configureDictionary.reducer

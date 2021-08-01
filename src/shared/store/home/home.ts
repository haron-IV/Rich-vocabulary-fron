import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import {
  getDictionary as getDictionaryAPI,
  addWord as addWordApi,
  WordAPI,
} from 'shared/services/dictionary'
import { RequestStatus } from 'shared/types'
import { RootState } from '../index'

interface InitialState {
  home: {
    dictionary: {
      requestStatus: RequestStatus
      data: WordAPI[]
      error: string | null
    }
    editedWord: WordAPI | null
    addWord: {
      requestStatus: RequestStatus
      error: string | null
      data: Omit<WordAPI, 'id'> | null
    }
  }
}
const initialState: InitialState = {
  home: {
    dictionary: {
      requestStatus: RequestStatus.idle,
      data: [],
      error: '',
    },
    editedWord: null,
    addWord: {
      requestStatus: RequestStatus.idle,
      error: null,
      data: null,
    },
  },
}

export const getDictionary = createAsyncThunk(
  'dictionary/getDictionary',
  async (_, thunkApi) => {
    try {
      return await getDictionaryAPI()
    } catch (err) {
      if (!err.response) throw err
      return thunkApi.rejectWithValue(err.response)
    }
  }
)

export const addWord = createAsyncThunk(
  'dictionary/addWord',
  async (payload: Omit<WordAPI, 'id'>, thunkApi) => {
    try {
      return await addWordApi(payload)
    } catch (err) {
      if (!err.response) throw err
      return thunkApi.rejectWithValue(err.response)
    }
  }
)

const reducers = {
  setEditedWord: (
    state: InitialState,
    action: PayloadAction<WordAPI['id']>
  ) => {
    const [selectedWord] = state.home.dictionary.data.filter(
      ({ id }) => id === action.payload
    )
    state.home.editedWord = selectedWord
  },
  resetEditedWord: (state: InitialState) => {
    state.home.editedWord = initialState.home.editedWord
  },
  setAddWord: (
    state: InitialState,
    { payload }: PayloadAction<Omit<WordAPI, 'id'>>
  ) => {
    state.home.addWord.data = payload
  },
}
const extraReducers = (builder: ActionReducerMapBuilder<InitialState>) => {
  builder
    .addCase(getDictionary.pending, state => {
      state.home.dictionary.error = null
      state.home.dictionary.requestStatus = RequestStatus.pending
    })
    .addCase(getDictionary.fulfilled, (state, { payload }) => {
      state.home.dictionary.error = null
      state.home.dictionary.data = payload
      state.home.dictionary.requestStatus = RequestStatus.fulfilled
    })
    .addCase(getDictionary.rejected, (state, { payload }) => {
      state.home.dictionary.error = (payload as any).data
      state.home.dictionary.requestStatus = RequestStatus.error
    })
    .addCase(addWord.pending, state => {
      state.home.addWord.error = null
      state.home.addWord.requestStatus = RequestStatus.pending
    })
    .addCase(addWord.fulfilled, (state, action) => {
      state.home.addWord.error = null
      // state.home.dictionary.data = [
      //   ...state.home.dictionary.data
      // ]
    })
    .addCase(addWord.rejected, (state, { payload }) => {
      state.home.addWord.error = (payload as any).data
      state.home.addWord.requestStatus = RequestStatus.error
    })
}

export const home = createSlice({
  name: 'dictionary',
  initialState,
  reducers,
  extraReducers,
})

export const actions = home.actions
export const selectors = {
  getDictionary: (state: RootState) => state.home.home.dictionary.data,
  getEditedWord: (state: RootState) => state.home.home.editedWord,
  getAddWordData: (state: RootState) => state.home.home.addWord.data,
}

export default home.reducer

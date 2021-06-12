import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit'
import {
  initDatabase,
  checkIfDatabaseExist,
  InitDatabaseRequest,
} from 'shared/services'

import { RequestStatus } from 'shared/types'
import { RootState } from '../index'

interface InitialState {
  initDatabase: {
    error: unknown | null
    data: unknown | null
    requestStatus: RequestStatus
  }
  isDatabaseExist: {
    error: unknown | null
    data: boolean | null
    requestStatus: RequestStatus
  }
}
const initialState: InitialState = {
  initDatabase: {
    error: null,
    data: null,
    requestStatus: RequestStatus.idle,
  },
  isDatabaseExist: {
    error: null,
    data: null,
    requestStatus: RequestStatus.idle,
  },
}

export const init = createAsyncThunk(
  'database/init',
  async (payload: InitDatabaseRequest, thunkApi) => {
    try {
      const response = await initDatabase(payload)
      return response.data
    } catch (err) {
      if (!err.response) throw err
      return thunkApi.rejectWithValue(err.response)
    }
  }
)

export const isDatabaseExist = createAsyncThunk(
  'database/isDatabaseExist',
  async (_, thunkApi) => {
    try {
      const { data } = await checkIfDatabaseExist()
      return data
    } catch (err) {
      if (!err.response) throw err
      return thunkApi.rejectWithValue(err.response)
    }
  }
)

const reducers = {}
const extraReducers = (builder: ActionReducerMapBuilder<InitialState>) => {
  builder.addCase(init.pending, state => {
    state.initDatabase.error = null
    state.initDatabase.requestStatus = RequestStatus.pending
  })
  builder.addCase(init.fulfilled, (state, { payload }) => {
    state.initDatabase.error = null
    state.initDatabase.data = payload
    state.initDatabase.requestStatus = RequestStatus.fulfilled
  })
  builder.addCase(init.rejected, (state, { payload }) => {
    state.initDatabase.error = (payload as any).data
    state.initDatabase.requestStatus = RequestStatus.error
  })

  builder.addCase(isDatabaseExist.pending, state => {
    state.isDatabaseExist.error = null
    state.isDatabaseExist.requestStatus = RequestStatus.pending
  })
  builder.addCase(isDatabaseExist.fulfilled, (state, { payload }) => {
    state.isDatabaseExist.error = null
    state.isDatabaseExist.data = payload.databaseExist
    state.isDatabaseExist.requestStatus = RequestStatus.fulfilled
  })
  builder.addCase(isDatabaseExist.rejected, (state, { payload }) => {
    state.isDatabaseExist.error = (payload as any).data
    state.isDatabaseExist.requestStatus = RequestStatus.error
  })
}

export const database = createSlice({
  name: 'configureDictionary',
  initialState,
  reducers,
  extraReducers,
})

export const actions = database.actions
export const selectors = {
  getInitDatabase: (state: RootState) => state.database.initDatabase,
  getIsDatabaseExist: (state: RootState) => state.database.isDatabaseExist,
}

export default database.reducer

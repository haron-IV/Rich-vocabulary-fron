import { configureStore } from '@reduxjs/toolkit'
import configureDictionary from './ConfigureDictionary'
import database from './database'

export const store = configureStore({
  reducer: {
    configureDictionary,
    database,
    //rest reducers
  },
})

export type RootState = ReturnType<typeof store.getState>

import { configureStore } from '@reduxjs/toolkit'
import configureDictionary from './ConfigureDictionary'
import database from './database'
import home from './home'

export const store = configureStore({
  reducer: {
    configureDictionary,
    database,
    home,
    //rest reducers
  },
})

export type RootState = ReturnType<typeof store.getState>

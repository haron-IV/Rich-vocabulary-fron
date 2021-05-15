import { configureStore } from '@reduxjs/toolkit'
import configureDictionary from './ConfigureDictionary'

export const store = configureStore({
  reducer: {
    configureDictionary,
    //home: homeReducer
    //rest reducers
  },
})

export type RootState = ReturnType<typeof store.getState>

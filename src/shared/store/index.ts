import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    //home: homeReducer
    //rest reducers
  },
})

export type RootState = ReturnType<typeof store.getState>

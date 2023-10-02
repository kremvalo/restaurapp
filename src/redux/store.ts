import { configureStore } from '@reduxjs/toolkit'

import restaurantReducer from '../views/screens/slice'

const store = configureStore({
  reducer: {
    restaurant: restaurantReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store

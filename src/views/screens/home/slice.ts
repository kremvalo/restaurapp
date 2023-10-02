/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getRestaurants } from '../../../services'

const initialState = {
  loading: false,
  error: null,
  restaurantsData: []
}

export const getRestaurantsAsync = createAsyncThunk(
  'restaurant/getRestaurants',
  async () => {
    const response = await getRestaurants()
    return response.data
  }
)

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRestaurantsAsync.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getRestaurantsAsync.rejected, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getRestaurantsAsync.fulfilled, (state, action) => {
        state.loading = false
        state.restaurantsData = action.payload
      })
  }
})

export default restaurantSlice.reducer

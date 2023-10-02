/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAddress, getRestaurants } from '../../services'
import { type ICoordinate, type InitialState } from '../../types'

export const initialState: InitialState = {
  loading: false,
  error: null,
  restaurantsData: [],
  address: '',
  adicionalInfoAddress: '',
  addressDelivery: {
    address: null,
    adicionalInfoAddress: ''
  }
}

export const getRestaurantsAsync = createAsyncThunk(
  'restaurapp/getRestaurants',
  async () => {
    const response = await getRestaurants()
    if (response.status !== 200) {
      return await Promise.reject(new Error(response.data))
    }
    return response.data
  }
)

export const getAddressAsync = createAsyncThunk(
  'restaurapp/getAddress',
  async (data: ICoordinate) => {
    console.log('payload', data)
    const response = await getAddress(data.lat, data.long)
    if (response.status !== 200) {
      return await Promise.reject(new Error(response.data))
    }
    return response.data.items[0].address.label
  }
)

export const restaurantSlice = createSlice({
  name: 'restaurapp',
  initialState,
  reducers: {
    setAddressAditional: (state, action) => {
      state.adicionalInfoAddress = action.payload
    },
    setDeliveryAddress: (state, action) => {
      state.addressDelivery = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRestaurantsAsync.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getRestaurantsAsync.rejected, (state, action) => {
        state.loading = true
        state.error = action.error.message as string
      })
      .addCase(getRestaurantsAsync.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.restaurantsData = action.payload
      })
      .addCase(getAddressAsync.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.address = action.payload
      })
      .addCase(getAddressAsync.rejected, (state, action) => {
        state.loading = true
        state.error = action.error.message as string
      })
  }
})

export const { setAddressAditional, setDeliveryAddress } =
  restaurantSlice.actions

export default restaurantSlice.reducer

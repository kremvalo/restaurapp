import { create, type ApiResponse } from 'apisauce'

import Config from '../utils/config'

const api = create({
  baseURL: Config.api.host
})

// const apiHere = create({
//   baseURL: Config.api.host
// })

export const getRestaurants = async (): Promise<any> => {
  try {
    const response: ApiResponse<any> = await api.get('/')

    if (response.status !== 200) {
      response.data = response.originalError
    }

    return response
  } catch (error) {
    Promise.reject(error)
  }
}

export const getAddress = async (): Promise<any> => {
  // try {
  //   const response: ApiResponse<
  //   ApiResponseItems<Restaurant>,
  //   any
  //   > = await apiHere.get('/streams')
  //   console.log('response', response)
  //   if (response.status === 200) {
  //     response.data.items = response.data.items.map((item: any): any => {
  //       console.log('item', item)
  //       return deserialize<Restaurant>(item, Restaurant)
  //     })
  //   } else if (response.status === 404) {
  //     response.data = []
  //   } else {
  //     // response.data = deserialize<ApiError>(response.data.error, ApiError)
  //   }
  //   console.log('response', response)
  //   return response
  // } catch (error) {}
}

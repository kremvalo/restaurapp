import { create, type ApiResponse } from 'apisauce'
import Config from '../utils/config'

const api = create({
  baseURL: Config.api.host
})

const apiHere = create({
  baseURL: Config.apiHere.host
})

export const getRestaurants = async (): Promise<any> => {
  try {
    const response: ApiResponse<any> = await api.get('/')

    return response
  } catch (error) {}
}

export const getAddress = async (
  latitude: number,
  longitude: number
): Promise<any> => {
  try {
    const params = {
      apikey: 'vpWc9jX26DAShSVHpQnWQBHViJTyy5UPI4CNimoOSkc',
      at: `${latitude},${longitude}`,
      lang: 'en-US'
    }
    const response: ApiResponse<any> = await apiHere.get('/revgeocode', params)

    return response
  } catch (error) {}
}

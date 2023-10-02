export interface IRestaurant {
  id: number
  image: string
  name: string
  rating: number
  estimatedTime: string
  discount: number
  type: string
}

export interface IAddress {
  address: string | null
  adicionalInfoAddress: string
}

export interface ICoordinate {
  lat: number
  long: number
}

export interface InitialState {
  loading: boolean
  error: string | null
  restaurantsData: IRestaurant[]
  address: string
  adicionalInfoAddress: string
  addressDelivery: IAddress
}

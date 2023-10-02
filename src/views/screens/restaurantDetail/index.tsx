import React from 'react'
import { useSelector } from 'react-redux'

import { type IRestaurant } from '../../../types'

import { Wrapper, AddressWrapper, RestaurantWrapper, BrandImage, Title, Subtitle } from './styles'

import AddAddressButton from '../../components/addAddressButton'

interface IProps {
  restaurant: IRestaurant
}

const DetailRestaurantScreen: React.FC<IProps> = ({ restaurant }) => {
  const { addressDelivery } = useSelector((state: any) => state.restaurant)

  console.log('restaurant', restaurant)
  return (
    <Wrapper>
      <AddressWrapper>
        <AddAddressButton title={addressDelivery.address} />
      </AddressWrapper>
      <RestaurantWrapper>
        <BrandImage source={{ uri: restaurant.image }} />
        <Title>{restaurant.name}</Title>
        <Subtitle>
          {restaurant.type}
        </Subtitle>
      </RestaurantWrapper>
    </Wrapper >
  )
}

export default DetailRestaurantScreen

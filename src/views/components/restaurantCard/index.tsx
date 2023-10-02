import React from 'react'
import { type GestureResponderEvent, type ImageSourcePropType } from 'react-native'

import Rate from '../rate'

import { Card, BrandImage, DiscountWrapper, RateTimeWrapper, DCTOText, DiscountText, RateTimeText, Brand } from './styles'

interface IPros {
  sourceImage: ImageSourcePropType
  title: string
  rate: number
  time: string
  discount: number
  onPress?: (event: GestureResponderEvent) => void
}

const RestaurantCard: React.FC<IPros> = ({ sourceImage, discount, title, rate, time, onPress }) => {
  return (
    <Card onPress={onPress}>
      <BrandImage source={sourceImage} />
      <DiscountWrapper>
        <DiscountText>{discount}%</DiscountText>
        <DCTOText>DCTO</DCTOText>
      </DiscountWrapper>
      <Brand>{title}</Brand>
      <RateTimeWrapper>
        <Rate rate={rate} />
        <RateTimeText>{time}</RateTimeText>
      </RateTimeWrapper>
    </Card>
  )
}

export default RestaurantCard

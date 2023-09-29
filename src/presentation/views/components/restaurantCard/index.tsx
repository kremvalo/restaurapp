import React from 'react'
import { type ImageSourcePropType, Text } from 'react-native'

import { Images } from '../../../../themes'

import { Card, BrandImage, DiscountWrapper, RateTimeWrapper, DCTOText, DiscountText, RateTimeText, RateImage } from './styles'

interface IPros {
  sourceImage: ImageSourcePropType
  title: string
  rate: number
  time: string
  discount: number
}

const RestaurantCard: React.FC<IPros> = ({ sourceImage, discount, title, rate, time }) => {
  return (
    <Card>
      <BrandImage source={sourceImage} />
      <DiscountWrapper>
        <DiscountText>{discount}%</DiscountText>
        <DCTOText>DCTO</DCTOText>
      </DiscountWrapper>
      <Text>{title}</Text>
      <RateTimeWrapper>
        <RateImage source={Images.star} />
        <RateTimeText>{rate} </RateTimeText>
        <RateTimeText>{time}</RateTimeText>
      </RateTimeWrapper>
    </Card>
  )
}

export default RestaurantCard

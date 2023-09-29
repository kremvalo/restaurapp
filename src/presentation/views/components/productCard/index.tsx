import React from 'react'
import { type ImageSourcePropType } from 'react-native'

import Rate from '../rate'

import { Card, CategoryImage, Title, Brand, Time, TextContiner, RowContainer } from './styles'

interface IPros {
  sourceImage: ImageSourcePropType
  title: string
  brand: string
  rate: number
  time: string
}

const ProductCard: React.FC<IPros> = ({ sourceImage, title, brand, rate, time }) => {
  return (
    <Card>
      <CategoryImage source={sourceImage}>
      </CategoryImage>
      <TextContiner>
        <RowContainer>
          <Title>{title}</Title>
          <Rate rate={rate} />
        </RowContainer>
        <RowContainer>
          <Brand>{brand}</Brand>
          <Time>{time}</Time>
        </RowContainer>
      </TextContiner>
    </Card>
  )
}

export default ProductCard

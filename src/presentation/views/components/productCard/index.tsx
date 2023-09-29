import React from 'react'
import { type ImageSourcePropType } from 'react-native'

import { Card, CategoryImage, Title } from './styles'

interface IPros {
  sourceImage: ImageSourcePropType
  title: string
}

const ProductCard: React.FC<IPros> = ({ sourceImage, title }) => {
  return (
    <Card>
      <CategoryImage source={sourceImage}>
      </CategoryImage>
      <Title>{title}</Title>
    </Card>
  )
}

export default ProductCard

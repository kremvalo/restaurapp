import React from 'react'
import { type ImageSourcePropType } from 'react-native'

import { Card, CategoryImage, Title } from './styles'

interface IPros {
  sourceImage: ImageSourcePropType
  title: string
}

const CategoryCard: React.FC<IPros> = ({ sourceImage, title }) => {
  return (
    <Card>
      <CategoryImage source={sourceImage}>
        <Title>{title}</Title>
      </CategoryImage>
    </Card>
  )
}

export default CategoryCard

import React, { type ReactNode } from 'react'
import { Dimensions, View } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'

interface IPros {
  data: ReactNode[]
  itemsPerScreen: number
  autoplay?: boolean
  loop?: boolean
  height: number
}

const CustomCarousel: React.FC<IPros> = ({ data, autoplay = false, loop = false, itemsPerScreen, height }) => {
  const width = Dimensions.get('window').width

  return (
    <Carousel
      loop={loop}
      width={itemsPerScreen > 1 ? width / itemsPerScreen : width}
      height={height}
      autoPlay={autoplay}
      data={data}
      scrollAnimationDuration={5000}
      pagingEnabled
      style={{
        width
      }}
      renderItem={({ item }) =>
        <View>
          {item}
        </View>
      }
    />
  )
}

export default CustomCarousel

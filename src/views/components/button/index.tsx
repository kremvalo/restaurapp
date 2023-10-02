import React from 'react'
import { type GestureResponderEvent } from 'react-native'

import { Wrapper, Title } from './styles'

interface IProps {
  text: string
  onPress?: (event: GestureResponderEvent) => void
}

const CustomButton: React.FC<IProps> = ({ text, onPress }) => {
  return (
    <Wrapper onPress={onPress}>
      <Title>{text}</Title>
    </Wrapper>
  )
}

export default CustomButton

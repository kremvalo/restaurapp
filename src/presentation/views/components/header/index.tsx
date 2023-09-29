import React from 'react'
import { Image } from 'react-native'

import { Images } from '../../../../themes/images'

import { Wrapper } from './styles'

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Image source={Images.profile} style={{ resizeMode: 'contain', width: 45, height: 45 }} />
      <Image source={Images.search} style={{ resizeMode: 'contain', width: 25, height: 25 }} />
    </Wrapper>
  )
}

export default Header

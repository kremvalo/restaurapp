import React from 'react'
import { Dimensions, Text, Image } from 'react-native'

import { Images } from '../../../../themes'

import { Wrapper, AddressWrapper, AddressImage } from './styles'

const AddAddressScreen: React.FC = () => {
  const width = Dimensions.get('window').width

  return (
    <Wrapper>
      <AddressWrapper>
        <AddressImage source={Images.addAddress} width={width / 1.5} />
        
      </AddressWrapper>
    </Wrapper>
  )
}

export default AddAddressScreen

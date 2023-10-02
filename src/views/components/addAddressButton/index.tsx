import React from 'react'
import { type GestureResponderEvent } from 'react-native'
import { useTranslation } from 'react-i18next'

import { Images } from '../../../themes'

import { AddressWrapper, PointImage, AddressText } from './styles'

interface IProps {
  onPress?: (event: GestureResponderEvent) => void
}

const AddAddressButton: React.FC<IProps> = ({ onPress }) => {
  const { t } = useTranslation()

  return (
    <AddressWrapper onPress={onPress}>
      <PointImage source={Images.point} />
      <AddressText>{t('addressTitle')} </AddressText>
    </AddressWrapper>
  )
}

export default AddAddressButton

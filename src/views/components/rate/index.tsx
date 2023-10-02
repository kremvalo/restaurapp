import React from 'react'

import { Images } from '../../../themes'

import { RateWrapper, RateTimeText, RateImage } from './styles'

interface IPros {
  rate: number
}

const Rate: React.FC<IPros> = ({ rate }) => {
  return (
    <RateWrapper>
      <RateImage source={Images.star} />
      <RateTimeText>{rate} </RateTimeText>
    </RateWrapper>
  )
}

export default Rate

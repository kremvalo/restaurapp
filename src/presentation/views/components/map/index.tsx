/* eslint-disable react/jsx-props-no-spreading */

import React, { type ReactNode } from 'react'
import { PROVIDER_GOOGLE } from 'react-native-maps'
import MapStyled from './styles'

interface IProps {
  showsUserLocation: boolean
  initialRegion: {
    latitude: number
    longitude: number
    latitudeDelta: number
    longitudeDelta: number
  }
  region: {
    latitude: number
    longitude: number
    latitudeDelta: number
    longitudeDelta: number
  }
  children: ReactNode
}

const CustomMap: React.FC<IProps> = ({
  initialRegion,
  region,
  showsUserLocation,
  children
}) => (
  <MapStyled
    showsUserLocation={showsUserLocation}
    provider={PROVIDER_GOOGLE}
    initialRegion={initialRegion}
    region={region}
    followsUserLocation={true}
    loadingEnabled
    initialCamera={{
      center: {
        latitude: region.latitude,
        longitude: region.longitude
      },
      heading: 0,
      pitch: 0,
      zoom: 17
    }}
  >
    {children}
  </MapStyled>
)

export default CustomMap

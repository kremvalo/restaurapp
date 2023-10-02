import React, { useEffect, useState } from 'react'
import {
  Platform,
  PermissionsAndroid,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import Geolocation from '@react-native-community/geolocation'
import { useTranslation } from 'react-i18next'
import { Marker } from 'react-native-maps'

import CustomMap from '../../components/map'

import {
  Wrapper,
  AddressWrapper,
  AddressComplementWrapper,
  AddressInput,
  Title,
  Subtitle,
  AddressComplementInput,
  AddressAlertWrapper,
  AlertText
} from './styles'
import { LocationStatus } from '../../../utils'
import AddAddressButton from '../../components/addAddressButton'
import CustomButton from '../../components/button'
import { Images } from '../../../themes'
import { getAddressAsync, setAddressAditional, setDeliveryAddress } from '../slice'
import { useDispatch, useSelector } from 'react-redux'
import { type AppDispatch } from '../../../redux/store'
import { useNavigation } from '@react-navigation/native'
import { type ICoordinate } from '../../../types'

const AddAddressScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigation = useNavigation()
  const { t } = useTranslation()
  const LATITUDE = 40.665364
  const LONGITUDE = -74.213377
  const LATITUDE_DELTA = 0.0043
  const LONGITUDE_DELTA = 0.0034

  const [
    currentLongitude,
    setCurrentLongitude
  ] = useState<number>(0)
  const [
    currentLatitude,
    setCurrentLatitude
  ] = useState<number>(0)
  const [
    locationStatus,
    setLocationStatus
  ] = useState<LocationStatus>()

  const { address, adicionalInfoAddress } = useSelector((state: any) => state.restaurant)

  const [value, setValue] = useState(address)

  const getOneTimeLocation = async (): Promise<void> => {
    setLocationStatus(LocationStatus.LOADING)
    Geolocation.getCurrentPosition(
      (position) => {
        setLocationStatus(LocationStatus.READY)

        setCurrentLongitude(position.coords.longitude)
        setCurrentLatitude(position.coords.latitude)

        const data: ICoordinate = {
          long: position.coords.longitude,
          lat: position.coords.latitude
        }

        dispatch(getAddressAsync(data)).then(() => { }, () => { })
      },
      (error) => {
        setLocationStatus(LocationStatus.DENY)
        console.warn(error)
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000
      }
    )
  }

  useEffect(() => {
    const requestLocationPermission = async (): Promise<void> => {
      try {
        if (Platform.OS === 'ios') {
          await getOneTimeLocation()
        } else {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: t('requestPermissionAndroidTitle'),
              message: t('requestPermissionAndroidDescription'),
              buttonPositive: t('requestPermissionAndroidButtonPossitive'),
              buttonNegative: t('requestPermissionAndroidButtonNegative')
            }
          )

          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            await getOneTimeLocation()
          } else {
            setLocationStatus(LocationStatus.DENY)
          }
        }
      } catch (err) {
        console.warn(err)
      }
    }

    requestLocationPermission().then(() => { }, () => { })
  }, [])

  const renderMap = (): React.JSX.Element => {
    switch (locationStatus) {
      case LocationStatus.DENY:
        return (
          <AddressAlertWrapper>
            <AlertText>
              {t('denyLocationPermission')}
            </AlertText>
          </AddressAlertWrapper>)
      case LocationStatus.READY:
        return (
          <CustomMap
            showsUserLocation
            initialRegion={{
              latitude: LATITUDE,
              longitude: LONGITUDE,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA
            }}
            region={{
              latitude: currentLatitude,
              longitude: currentLongitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA
            }}
          >
            <Marker coordinate={{
              latitude: currentLatitude,
              longitude: currentLongitude
            }} image={Images.pointMap} />
          </CustomMap>)
      default:
        return (
          <AddressAlertWrapper>
            <AlertText>
              {t('loadingLocationPermission')}
            </AlertText>
          </AddressAlertWrapper>)
    }
  }

  return (
    <KeyboardAvoidingView behavior={'position'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Wrapper>
          <AddressWrapper>
            <AddAddressButton />
          </AddressWrapper>
          {
            renderMap()
          }
          <AddressInput placeholder={t('addressInputPlaceholder')} value={value} onChangeText={setValue} ></AddressInput>
          <AddressComplementWrapper>
            <Title>Agregar informacion de entrega</Title>
            <Subtitle>Depto, Oficina, Piso, Block</Subtitle>
            <AddressComplementInput multiline numberOfLines={5} onChangeText={(value) => dispatch(setAddressAditional(value))} value={adicionalInfoAddress} />
            <CustomButton text={'AGREGAR DIRECCION'} onPress={() => {
              dispatch(setDeliveryAddress({
                address: value,
                adicionalInfoAddress
              }))
              navigation.goBack()
            }
            } />
          </AddressComplementWrapper>
        </Wrapper >
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView >
  )
}

export default AddAddressScreen

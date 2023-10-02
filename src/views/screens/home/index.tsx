import React, { useEffect, useMemo } from 'react'
import { Dimensions, Image, ScrollView, Alert } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import * as RA from 'ramda-adjunct'

import { Images } from '../../../themes'
import { ROUTES } from '../../../utils'
import { Wrapper, AddressWrapper, InfoWrapper, Title } from './styles'
import { getRestaurantsAsync } from '../slice'

import Header from '../../components/header'
import CustomCarousel from '../../components/carousel'
import RestaurantCard from '../../components/restaurantCard'
import CategoryCard from '../../components/categoryCard'
import ProductCard from '../../components/productCard'
import AddAddressButton from '../../components/addAddressButton'
import { type AppDispatch } from '../../../redux/store'
import { type IRestaurant } from '../../../types'

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigation = useNavigation()
  const width = Dimensions.get('window').width
  const { t } = useTranslation()

  const { restaurantsData, loading, error, addressDelivery } = useSelector((state: any) => state.restaurant)

  useEffect(() => {
    dispatch(getRestaurantsAsync()).then(() => { }, () => { })
  }, [dispatch])

  useEffect(() => {
    if (error !== null) {
      Alert.alert(t('alertTitle'), `${t('alertDescription')} ${error}`, [
        { text: t('alertButton'), onPress: () => { dispatch(getRestaurantsAsync()).then(() => { }, () => { }) } }
      ], { cancelable: true })
    }
  }, [error])

  const imagesSlides: React.ReactNode[] = useMemo(() => [
    <Image key={Images.slide} source={Images.slide} style={{ resizeMode: 'contain', width, height: width / 1.7 }} />
  ], [])

  const renderRestaurants = (restaurants: IRestaurant[]): React.ReactNode[] => {
    if (RA.isArray(restaurants) && RA.isNonEmptyArray(restaurants)) {
      return restaurants.map((item: IRestaurant) => {
        return (
          <RestaurantCard key={item.id}
            sourceImage={{ uri: item.image }}
            title={item.name}
            rate={item.rating}
            time={item.estimatedTime}
            discount={item.discount}
            onPress={() => { navigation.navigate(ROUTES.DETAILRESTAURANT, item) }}
          />)
      })
    } else {
      return [] as React.ReactNode[]
    }
  }

  const categorySlides: React.ReactNode[] = [
    <CategoryCard key={1}
      sourceImage={Images.hambugerCategory}
      title='HAMBURGESAS'
    />,
    <CategoryCard key={1}
      sourceImage={Images.pizzasCategory}
      title='PIZZAS'
    />,
    <CategoryCard key={1}
      sourceImage={Images.italianCategory}
      title='ITALIANA'
    />
  ]

  const productsSlides: React.ReactNode[] = [
    <ProductCard key={1}
      sourceImage={Images.hamburguer}
      title='Combo Hamburguesa Bigmac'
      rate={3.5}
      time='10-15 min.'
      brand='Mcdonalds'
    />,
    <ProductCard key={1}
      sourceImage={Images.pizza}
      title='Pizza Mediana 3 Ingredientes'
      rate={3.5}
      time='10-15 min.'
      brand='MELT Pizzas'
    />
  ]

  return (
    <Wrapper>
      <ScrollView>
        <Header />
        <CustomCarousel
          data={imagesSlides}
          autoplay
          loop
          itemsPerScreen={1}
          height={width / 1.6}
        />
        <AddressWrapper>

          <AddAddressButton
            title={addressDelivery.address}
            onPress={() => { navigation.navigate(ROUTES.UBICATION) }} />
          {
            (loading !== true && error === null) &&
            <InfoWrapper>
              <Title>{t('restaurantsTitle')}</Title>
              <CustomCarousel
                data={renderRestaurants(restaurantsData)}
                itemsPerScreen={3}
                height={width / 2.2}
              />
              <Title>{t('categoriesTitle')}</Title>
              <CustomCarousel
                data={categorySlides}
                itemsPerScreen={3}
                height={width / 3.5}
              />
              <Title>{t('yourFavoritesTitle')}</Title>
              <CustomCarousel
                data={productsSlides}
                itemsPerScreen={2}
                height={width / 2.8}
              />
            </InfoWrapper>
          }

        </AddressWrapper>
      </ScrollView>
    </Wrapper>
  )
}

export default HomeScreen

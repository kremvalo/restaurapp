import React from 'react'
import { Dimensions, Image, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'

import { Images } from '../../../../themes'

import { Wrapper, AddressWrapper, InfoWrapper, Title, AddressImage } from './styles'

import Header from '../../components/header'
import CustomCarousel from '../../components/carousel'
import RestaurantCard from '../../components/restaurantCard'
import CategoryCard from '../../components/categoryCard'
import ProductCard from '../../components/productCard'

const Home: React.FC = () => {
  const width = Dimensions.get('window').width
  const { t } = useTranslation()

  const imagesSlides: React.ReactNode[] = [
    <Image key={Images.slide} source={Images.slide} style={{ resizeMode: 'contain', width, height: width / 1.7 }} />
  ]

  const restaurantsSlides: React.ReactNode[] = [
    <RestaurantCard key={1}
      sourceImage={{ uri: 'https://brandemia.org/contenido/subidas/2022/10/marca-mcdonalds-logo-1200x670.png' }}
      title='McDonals'
      rate={3.5}
      time='10-15 min.'
      discount={50}
    />,
    <RestaurantCard key={2}
      sourceImage={{ uri: 'https://pbs.twimg.com/profile_images/1068576078200037376/hHxUF-6t_400x400.jpg' }}
      title='McDonals'
      rate={3.5}
      time='10-15 min.'
      discount={30}
    />,
    <RestaurantCard key={3}
      sourceImage={{ uri: 'https://brandemia.org/contenido/subidas/2022/10/marca-mcdonalds-logo-1200x670.png' }}
      title='McDonals'
      rate={3.5}
      time='10-15 min.'
      discount={50}
    />,
    <RestaurantCard key={4}
      sourceImage={{ uri: 'https://pbs.twimg.com/profile_images/1068576078200037376/hHxUF-6t_400x400.jpg' }}
      title='McDonals'
      rate={3.5}
      time='10-15 min.'
      discount={30}
    />
  ]

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
      sourceImage={Images.hambugerCategory}
      title='HAMBURGESAS'
    />,
    <ProductCard key={1}
      sourceImage={Images.pizzasCategory}
      title='PIZZAS'
    />,
    <ProductCard key={1}
      sourceImage={Images.italianCategory}
      title='ITALIANA'
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
          <TouchableOpacity>
            <AddressImage source={Images.addAddress} width={width / 1.5} />
          </TouchableOpacity>
          <InfoWrapper>
            <Title>{t('restaurantsTitle')}</Title>
            <CustomCarousel
              data={restaurantsSlides}
              itemsPerScreen={3}
              height={width / 2.2}
            />
            <Title>CATEGORIAS</Title>
            <CustomCarousel
              data={categorySlides}
              itemsPerScreen={3}
              height={width / 3.5}
            />
            <Title>TUS FAVORITOS</Title>
            <CustomCarousel
              data={productsSlides}
              itemsPerScreen={2}
              height={width / 3}
            />
          </InfoWrapper>
        </AddressWrapper>
      </ScrollView>
    </Wrapper>
  )
}

export default Home

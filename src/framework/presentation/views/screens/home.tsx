import React from 'react';
import { Dimensions, Text, View, Image } from 'react-native';


import { Images } from '../assets/images';
import { Wrapper } from './styles';
import Header from '../components/header';
import CustomCarousel from '../components/carousel';

const Home: React.FC = () => {
  const width = Dimensions.get('window').width;
  return (
    <>
      <Wrapper style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
        <Header></Header>
        <CustomCarousel Images={[Images.slide]} />
      </Wrapper>
    </>
  );
};

export default Home;

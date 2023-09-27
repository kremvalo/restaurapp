import React from 'react';
import { View, Text } from 'react-native';

import I18n from '../translations/i18n';

const Home = () => {
  return (
    <>
      <View>
        <Text>{I18n.t('greeting')}</Text>
      </View>
    </>
  );
};

export default Home;

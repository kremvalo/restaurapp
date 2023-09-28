import React from 'react';
import { Dimensions, Text, View, Image } from 'react-native';
// import I18n from '../../translations/i18n';

import { Images } from '../../assets/images';

import { Wrapper } from './styles';

const Header: React.FC = () => {
    return (
        <Wrapper>
            <Image source={Images.profile} style={{ resizeMode: 'contain', width: 45, height: 45 }} />
            <Image source={Images.search} style={{ resizeMode: 'contain', width: 25, height: 25 }} />
            {/* <Text>{I18n.t('greeting')}</Text> */}
        </Wrapper>
    );
};

export default Header;

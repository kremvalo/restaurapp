import React from 'react';
import { Dimensions, Image, ImageSourcePropType } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const CustomCarousel: React.FC<{ Images: ImageSourcePropType[] }> = ({ Images }) => {
    const width = Dimensions.get('window').width;

    return (
        <Carousel
            loop
            width={width}
            height={width / 1.6}
            autoPlay={true}
            data={Images}
            scrollAnimationDuration={5000}
            pagingEnabled
            renderItem={({ index, item }) =>
                <Image
                    key={index}
                    source={item}
                    style={{ resizeMode: 'contain', width: width, height: width / 1.7 }}
                />
            }
        />
    );
};

export default CustomCarousel;

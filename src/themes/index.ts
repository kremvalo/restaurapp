import Fonts from './fonts'
import { Images } from './images'
import { Platform } from 'react-native'
import { css } from 'styled-components/native'

export { Fonts, Images }

const theme = {
  color: {
    whiteBone: '#F2F2F2',
    white: '#FFFFFF',
    cian: '#D4F9F5',
    menta: '#06BAA4',
    black: '#000000'
  },
  fonts: Fonts,
  images: Images,
  getShadowProperties: () => {
    if (Platform.OS === 'ios') {
      return css`
        shadow-color: #000;
        shadow-offset: 0px 2px;
        shadow-opacity: 0.5;
        shadow-radius: 4px;
      `
    } else {
      return css`
        elevation: 5;
      `
    }
  }
}

export default theme

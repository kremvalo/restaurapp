import Fonts from './fonts'
import { Images } from './images'

export { Fonts, Images }

const theme = {
  color: {
    whiteBone: '#F2F2F2',
    white: '#FFFFFF',
    cian: '#D4F9F5',
    menta: '#06BAA4',
    black: '#000000'
  },
  margin: {
    marginSmall: '1%',
    marginStandard: '2%',
    marginMedium: '4%',
    marginLarge: '6%',
    marginXL: '7%'
  },
  padding: {
    paddingSmall: '2%',
    paddingStandard: '3%',
    paddingMedium: '4%',
    paddingLarge: '5%',
    paddingXL: '7%',
    paddingXXL: '13%'
  },
  fonts: Fonts,
  images: Images
}

export default theme

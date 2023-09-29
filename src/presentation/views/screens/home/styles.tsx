import styled from 'styled-components/native'
import { Platform } from 'react-native'

const Wrapper = styled.SafeAreaView`
  background-color: ${props => props.theme.color.whiteBone};
`

const AddressWrapper = styled.View`
  background-color: ${props => props.theme.color.cian};
  borderRadius: 25px 25px 0px 0px;
  marginTop: -30px;
`

const AddressImage = styled.Image`
  resizeMode: contain;
  marginHorizontal: 15%;
  width: ${props => props.width ?? 0}px;
`

const Title = styled.Text`
  fontFamily: ${props => props.theme.fonts.type.black};
  fontSize: ${props => props.theme.fonts.size.h6};
  fontWeight: bold;
  color:  ${props => props.theme.color.black};
`

const InfoWrapper = styled.View`
  background-color: ${props => props.theme.color.white};
  borderRadius: 25px 25px 0px 0px;
  padding: 30px 20px;
  ${Platform.OS === 'ios' &&
  `
    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.5;
    shadow-radius: 4px;
  `}
  ${Platform.OS === 'android' &&
  `
    elevation: 5;
  `}
`
export { Wrapper, AddressWrapper, Title, InfoWrapper, AddressImage }

import styled from 'styled-components/native'

const Wrapper = styled.SafeAreaView`
  background-color: ${({ theme: { color } }) => color.whiteBone};
`

const AddressWrapper = styled.View`
  background-color: ${({ theme: { color } }) => color.cian};
  paddingTop: 10px;
  paddingBottom: 10px;
`

const RestaurantWrapper = styled.View`
  paddingBottom: 10px;
  marginTop: -10px;
  background-color: ${({ theme: { color } }) => color.white};
  borderRadius: 20px;
  alignItems: center;
  paddingTop: 40px;
  height: 100%;
`

const Title = styled.Text`
  fontFamily: ${({ theme: { fonts } }) => fonts.type.bold};
  fontSize: ${({ theme: { fonts } }) => fonts.size.h5};
  fontWeight: bold;
  color:  ${({ theme: { color } }) => color.black};
`

const Subtitle = styled.Text`
  fontFamily: ${({ theme: { fonts } }) => fonts.type.light};
  fontSize: ${({ theme: { fonts } }) => fonts.size.small};
  color:  ${({ theme: { color } }) => color.grey};
`

const BrandImage = styled.Image`
  resizeMode: cover; 
  width: 100px; 
  height: 100px; 
  borderRadius: 20px;
  marginBottom: 6px;
`

export { Wrapper, AddressWrapper, Title, Subtitle, RestaurantWrapper, BrandImage }

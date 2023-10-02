import styled from 'styled-components/native'

const Card = styled.TouchableOpacity`
  background-color:${({ theme: { color } }) => color.white};
  marginTop: 15px;
  justifyContent: center;
  alignItems: center;
`

const DiscountWrapper = styled.View`
  width: 33px;
  height: 33px;
  justifyContent: center;
  alignItems: center;
  borderRadius: 30px;
  backgroundColor: ${({ theme: { color } }) => color.menta};
  position: absolute;
  right: 10px;
  top: -10px; 
`
const RateTimeWrapper = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
`

const BrandImage = styled.Image`
  resizeMode: cover; 
  width: 100px; 
  height: 100px; 
  borderRadius: 20px;
  marginBottom: 6px;
`
const RateImage = styled.Image`
  resizeMode: cover; 
  width: 10px; 
  height: 10px;
  marginRight: 2px; 
`

const Brand = styled.Text`
  fontFamily: ${({ theme: { fonts } }) => fonts.type.light};
  fontSize: ${({ theme: { fonts } }) => fonts.size.small};
  color: ${({ theme: { color } }) => color.black};
`

const RateTimeText = styled.Text`
  fontFamily: ${({ theme: { fonts } }) => fonts.type.light};
  fontSize: ${({ theme: { fonts } }) => fonts.size.tiny};
  color: ${({ theme: { color } }) => color.black};
`
const DiscountText = styled.Text`
  fontFamily: ${({ theme: { fonts } }) => fonts.type.light};
  fontSize: ${({ theme: { fonts } }) => fonts.size.smallTiny};
  color: ${({ theme: { color } }) => color.white};
`

const DCTOText = styled.Text`
  fontFamily: ${({ theme: { fonts } }) => fonts.type.light};
  fontSize: ${({ theme: { fonts } }) => fonts.size.tiny};
  color: ${({ theme: { color } }) => color.white};
`

export { Card, BrandImage, DiscountWrapper, RateTimeWrapper, RateTimeText, DCTOText, DiscountText, Brand, RateImage }

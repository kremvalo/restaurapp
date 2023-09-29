import styled from 'styled-components/native'

const Card = styled.View`
  background-color: ${props => props.theme.color.white};
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
  backgroundColor: ${props => props.theme.color.menta};
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
`
const RateImage = styled.Image`
  resizeMode: cover; 
  width: 10px; 
  height: 10px;
  marginRight: 2px; 
`

const RateTimeText = styled.Text`
  fontFamily: ${props => props.theme.fonts.type.light};
  fontSize: ${props => props.theme.fonts.size.small};
`
const DiscountText = styled.Text`
  fontFamily: ${props => props.theme.fonts.type.light};
  fontSize: ${props => props.theme.fonts.size.smallTiny};
  color: ${props => props.theme.color.white};
`

const DCTOText = styled.Text`
  fontFamily: ${props => props.theme.fonts.type.light};
  fontSize: ${props => props.theme.fonts.size.tiny};
  color: ${props => props.theme.color.white};
`

export { Card, BrandImage, DiscountWrapper, RateTimeWrapper, RateTimeText, DCTOText, DiscountText, RateImage }

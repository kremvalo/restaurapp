import styled from 'styled-components/native'

const RateWrapper = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
`

const RateImage = styled.Image`
  resizeMode: cover; 
  width: 10px; 
  height: 10px;
  marginRight: 2px; 
`

const RateTimeText = styled.Text`
  fontFamily: ${({ theme: { fonts } }) => fonts.type.light};
  fontSize: ${({ theme: { fonts } }) => fonts.size.tiny};
`
export { RateWrapper, RateTimeText, RateImage }

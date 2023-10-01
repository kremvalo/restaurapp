import styled from 'styled-components/native'

const AddressWrapper = styled.TouchableOpacity`
  flexDirection: row;
  alignItems: center;
  justifyContent: center;
  paddingVertical: 10px;
`

const PointImage = styled.Image`
  resizeMode: contain; 
  width: 25px; 
  height: 25px;
  margin: 10px; 
`

const AddressText = styled.Text`
  fontFamily: ${({ theme: { fonts } }) => fonts.type.bold};
  fontSize: ${({ theme: { fonts } }) => fonts.size.h6};
  color: ${({ theme: { color } }) => color.menta};
`
export { AddressWrapper, PointImage, AddressText }

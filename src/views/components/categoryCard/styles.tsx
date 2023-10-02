import styled from 'styled-components/native'

const Card = styled.TouchableOpacity`
  background-color: ${({ theme: { color } }) => color.white};
  marginTop: 15px;
  justifyContent: center;
  alignItems: center;
`

const CategoryImage = styled.ImageBackground`
  resizeMode: cover; 
  width: 120px; 
  height: 60px; 
  borderRadius: 20px; 
  justifyContent: center;
  alignItems: center;
`

const Title = styled.Text`
  fontFamily: ${({ theme: { fonts } }) => fonts.type.bold};
  fontSize: ${({ theme: { fonts } }) => fonts.size.h6};
  color: ${({ theme: { color } }) => color.white};
  fontWeight: bold;
`

export { Card, Title, CategoryImage }

import styled from 'styled-components/native'

const Card = styled.View`
  background-color: ${props => props.theme.color.white};
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
  fontFamily: ${props => props.theme.fonts.type.bold};
  fontSize: ${props => props.theme.fonts.size.h6};
  color: ${props => props.theme.color.white};
  fontWeight: bold;
`

export { Card, Title, CategoryImage }

import styled from 'styled-components/native'
import { Platform } from 'react-native'

const Card = styled.View`
  background-color: ${props => props.theme.color.white};
  margin: 15px 1px 0px 4px;
  padding: 0px;
  justifyContent: space-between;
  borderRadius: 15px 15px 15px 15px; 
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

const CategoryImage = styled.ImageBackground`
  resizeMode: cover; 
  width: 188px; 
  height: 80px; 
  borderRadius: 20px 20px 0px 0px; 
  justifyContent: center;
  alignItems: center;
`

const Title = styled.Text`
  fontFamily: ${props => props.theme.fonts.type.bold};
  fontSize: ${props => props.theme.fonts.size.small};
  color: ${props => props.theme.color.black};
`

export { Card, Title, CategoryImage }

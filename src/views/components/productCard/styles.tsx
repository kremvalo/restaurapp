import styled from 'styled-components/native'

const Card = styled.TouchableOpacity`
  width: 94%;
  margin: 15px 0px 0px 10px;
  alignItems: center;
  backgroundColor : ${({ theme: { color } }) => color.white};
  borderRadius: 10px;
  resizeMode: contain;
  ${({ theme }) => theme.getShadowProperties()}
`

const CategoryImage = styled.ImageBackground`
  width: 190px;
  height: 70px;
`

const TextContiner = styled.View`
  padding: 10px;
  width: 100%;
`

const RowContainer = styled.View`
  flexDirection: row;
  justifyContent: space-between; 
`

const Title = styled.Text`
  fontFamily: ${({ theme: { fonts } }) => fonts.type.light};
  fontSize: ${({ theme: { fonts } }) => fonts.size.tiny};
  color: ${({ theme: { color } }) => color.black};
`

const Brand = styled.Text`
  fontFamily: ${({ theme: { fonts } }) => fonts.type.light};
  fontSize: ${({ theme: { fonts } }) => fonts.size.tiny};
  color: ${({ theme: { color } }) => color.menta};
`

const Time = styled.Text`
  fontFamily: ${({ theme: { fonts } }) => fonts.type.light};
  fontSize: ${({ theme: { fonts } }) => fonts.size.tiny};
  color: ${({ theme: { color } }) => color.black};
`

export { Card, Title, CategoryImage, TextContiner, RowContainer, Brand, Time }

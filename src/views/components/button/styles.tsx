import styled from 'styled-components/native'

const Wrapper = styled.TouchableOpacity`
    backgroundColor: ${({ theme: { color } }) => color.menta};
    flex-direction: row;
    justifyContent: center;
    alignItems: center;
    padding: 20px;
    margin: 20px 15px;
    borderRadius: 8px;
`

const Title = styled.Text`
  fontFamily: ${({ theme: { fonts } }) => fonts.type.bold};
  fontSize: ${({ theme: { fonts } }) => fonts.size.h6};
  fontWeight: bold;
  color:  ${({ theme: { color } }) => color.white};
`

export { Wrapper, Title }

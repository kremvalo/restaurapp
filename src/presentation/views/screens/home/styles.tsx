import styled from 'styled-components/native'

const Wrapper = styled.SafeAreaView`
  background-color: ${({ theme: { color } }) => color.whiteBone};
`

const AddressWrapper = styled.View`
  background-color: ${({ theme: { color } }) => color.cian};
  borderRadius: 25px 25px 0px 0px;
  marginTop: -30px;
`

const AddressImage = styled.Image`
  resizeMode: contain;
  marginHorizontal: 15%;
  width: ${({ width }) => width ?? 0}px;
`

const Title = styled.Text`
  fontFamily: ${({ theme: { fonts } }) => fonts.type.black};
  fontSize: ${({ theme: { fonts } }) => fonts.size.h6};
  fontWeight: bold;
  color:  ${({ theme: { color } }) => color.black};
`

const InfoWrapper = styled.View`
  background-color: ${({ theme: { color } }) => color.white};
  borderRadius: 25px 25px 0px 0px;
  padding: 30px 20px;
  ${({ theme }) => theme.getShadowProperties()}

`
export { Wrapper, AddressWrapper, Title, InfoWrapper, AddressImage }

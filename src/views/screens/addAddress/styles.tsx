import styled from 'styled-components/native'

const Wrapper = styled.SafeAreaView`
  background-color: ${({ theme: { color } }) => color.whiteBone};
`

const AddressWrapper = styled.View`
  background-color: ${({ theme: { color } }) => color.cian};
  paddingTop: 10px;
  paddingBottom: 10px;
  marginBottom: 20px;
`

const AddressComplementWrapper = styled.View`
  background-color: ${({ theme: { color } }) => color.white};
  padding: 30px 10px;
`

const AddressAlertWrapper = styled.View`
  background-color: ${({ theme: { color } }) => color.cian};
  height: 40%;
  justifyContent: center; 
  alignItems: center;
`

const AddressInput = styled.TextInput`
  padding: 15px 30px;
  borderRadius: 35px;
  backgroundColor: ${({ theme: { color } }) => color.white};
  position: absolute;
  top: 10%;
  width: 100%;
  ${({ theme }) => theme.getShadowProperties()}
`

const AddressComplementInput = styled.TextInput`
  marginVertical: 10px;
  padding: 15px;
  borderRadius: 16px;
  borderWidth: 1px;
  height: 122px;
  borderColor: ${({ theme: { color } }) => color.lightGrey};
  backgroundColor: ${({ theme: { color } }) => color.white};
`

const Title = styled.Text`
  fontFamily: ${({ theme: { fonts } }) => fonts.type.bold};
  fontSize: ${({ theme: { fonts } }) => fonts.size.h5};
  fontWeight: bold;
  color:  ${({ theme: { color } }) => color.black};
`

const Subtitle = styled.Text`
  fontFamily: ${({ theme: { fonts } }) => fonts.type.light};
  fontSize: ${({ theme: { fonts } }) => fonts.size.h6};
  color:  ${({ theme: { color } }) => color.grey};
`

const AlertText = styled.Text`
  fontFamily: ${({ theme: { fonts } }) => fonts.type.light};
  fontSize: ${({ theme: { fonts } }) => fonts.size.h5};
  color:  ${({ theme: { color } }) => color.grey};
`

export { Wrapper, AddressWrapper, AddressComplementWrapper, AddressAlertWrapper, AddressInput, AddressComplementInput, Title, Subtitle, AlertText }

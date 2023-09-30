import styled from 'styled-components/native'

const Wrapper = styled.SafeAreaView`
  background-color: ${({ theme: { color } }) => color.whiteBone};
`

const AddressWrapper = styled.View`
  background-color: ${({ theme: { color } }) => color.cian};
  paddingTop: 30px;
`

const AddressImage = styled.Image`
  resizeMode: contain;
  marginHorizontal: 15%;
  width: ${({ width }) => width ?? 0}px;
`

export { Wrapper, AddressWrapper, AddressImage }

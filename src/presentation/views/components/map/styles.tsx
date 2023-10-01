import styled from 'styled-components/native'
import MapView from 'react-native-maps'

const MapStyled = styled(MapView).attrs(({ theme }) => ({
  loadingIndicatorColor: theme.color.cian
}))`
  height: 40%;
`

export default MapStyled

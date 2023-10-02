import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { HomeScreen, AddAddressScreen } from '../views/screens'

import { ROUTES } from '../utils'
import theme from '../themes'
import DetailRestaurantScreen from '../views/screens/restaurantDetail'

const Stack = createStackNavigator()

function AppNavigator(): React.JSX.Element {
  console.log(Stack)
  return (
    <Stack.Navigator initialRouteName={ROUTES.HOME}>
      <Stack.Screen name={ROUTES.HOME} component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name={ROUTES.UBICATION} component={AddAddressScreen} options={{
        title: '',
        headerStyle: {
          backgroundColor: theme.color.cian
        },
        headerBackTitleVisible: false,
        headerBackTitleStyle: {
          color: theme.color.menta
        },
        headerTintColor: theme.color.menta
      }} />
      <Stack.Screen name={ROUTES.DETAILRESTAURANT} options={{
        title: '',
        headerStyle: {
          backgroundColor: theme.color.cian
        },
        headerBackTitleVisible: false,
        headerBackTitleStyle: {
          color: theme.color.menta
        },
        headerTintColor: theme.color.menta
      }}>
        {props => <DetailRestaurantScreen {...props} restaurant={props.route.params} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export default AppNavigator

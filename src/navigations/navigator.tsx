import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { HomeScreen, AddAddressScreen } from '../presentation/views/screens'

import { ROUTES } from '../utils'

const Stack = createStackNavigator()

function AppNavigator (): React.JSX.Element {
  console.log(Stack)
  return (
    <Stack.Navigator initialRouteName={ROUTES.HOME}>
      <Stack.Screen name={ROUTES.HOME} component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name={ROUTES.UBICATION} component={AddAddressScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default AppNavigator

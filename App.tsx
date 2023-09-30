import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native'

import AppNavigator from './src/navigations/navigator'

import './src/translations/i18n.config'

import theme from './src/themes'

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </>
  )
}

export default App

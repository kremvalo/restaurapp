import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native'

import AppNavigator from './src/navigations/navigator'

import './src/translations/i18n.config'

import theme from './src/themes'
import { Provider } from 'react-redux'
import store from './src/redux/store'

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default App

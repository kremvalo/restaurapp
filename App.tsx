import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import Home from './src/presentation/views/screens/home/home'
import './src/translations/i18n.config'

import theme from './src/themes'

const App: React.FC = () => {
  return (
    <>
      <GestureHandlerRootView>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </GestureHandlerRootView>
    </>
  )
}

export default App

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { getLocales } from 'react-native-localize'

import en from './en.json'
import es from './es.json'

// empty for now
const resources = {
  en: {
    translation: en
  },
  es: {
    translation: es
  }
}

void i18n.use(initReactI18next).init({
  resources,
  compatibilityJSON: 'v3',
  lng: getLocales()[0].languageCode,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n

import _ from 'lodash'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default (() => {
  const dev = {
    api: {
      host: 'https://prueba.free.beeceptor.com'
    },
    apiHere: {
      host: 'https://prueba.free.beeceptor.com'
    }
  }

  const prod = {
    api: {
      host: 'https://prueba.free.beeceptor.com'
    }
  }

  const common = {
    store: {
      version: '1',
      config: {
        storage: AsyncStorage,
        blacklist: []
      }
    }
  }

  return _.extend(common, __DEV__ ? dev : prod)
})()

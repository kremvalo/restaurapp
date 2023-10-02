import _ from 'lodash'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default (() => {
  const dev = {
    api: {
      host: 'https://restaurants2.free.beeceptor.com'
    },
    apiHere: {
      host: 'https://revgeocode.search.hereapi.com/v1'
    }
  }

  const prod = {
    api: {
      host: 'https://restaurants2.free.beeceptor.com'
    },
    apiHere: {
      host: 'https://revgeocode.search.hereapi.com/v1'
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

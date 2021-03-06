import React from 'react'
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux'
import App from './src/App';
import {name as appName} from './app.json';

import storeConfig from './src/store/storeConfig'
import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.100.20:8888/'
console.disableYellowBox = true //Para produção

const store = storeConfig()

const Redux = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Redux);

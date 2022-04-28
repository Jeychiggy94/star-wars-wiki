import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import {ContainerReducers, NetworkReducers} from './'
const reduxPersistConfig = {
    key : 'root',
    storage: storage,
    debug: true
}

const rootReducer = persistCombineReducers(reduxPersistConfig, {
    container: ContainerReducers,
    network: NetworkReducers
})

export default rootReducer

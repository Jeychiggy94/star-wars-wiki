import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import {ContainerReducers, NetworkReducers, GeneralReducers} from './'
const reduxPersistConfig = {
    key : 'root',
    storage: storage,
    debug: true
}

const rootReducer = persistCombineReducers(reduxPersistConfig, {
    container: ContainerReducers,
    network: NetworkReducers,
    general: GeneralReducers
})

export default rootReducer

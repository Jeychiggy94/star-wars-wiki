import { combineReducers } from 'redux'

import getMovie from './getMovie/Reducers'
import getMovies from './getMovies/Reducers'

export default combineReducers({
    getMovie,
    getMovies,
})

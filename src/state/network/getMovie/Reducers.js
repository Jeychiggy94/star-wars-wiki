import { GET_MOVIE_FAILURE, GET_MOVIE_SUCCESS, GET_MOVIE_REQUEST } from './Types'

const INITIAL_STATE = {
    fetching: false,
    error: null,
    response: null,
    payload: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_MOVIE_REQUEST:
            return {
                ...state,
                fetching: true,
                error: null,
                response: null,
                payload: action.payload,
            }

        case GET_MOVIE_SUCCESS:
            return {
                ...state,
                fetching: false,
                error: null,
                response: action.payload,
                payload: null,
            }

        case GET_MOVIE_FAILURE:
            return {
                ...state,
                fetching: false,
                error: action.payload,
                response: null,
                payload: null,
            }

        default:
            return state
    }
}

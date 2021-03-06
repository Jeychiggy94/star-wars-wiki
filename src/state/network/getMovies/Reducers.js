import { GET_MOVIES_FAILURE, GET_MOVIES_SUCCESS, GET_MOVIES_REQUEST } from './Types'

const INITIAL_STATE = {
    fetching: false,
    error: null,
    response: null,
    payload: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_MOVIES_REQUEST:
            return {
                ...state,
                fetching: true,
                error: null,
                response: null,
                payload: action.payload,
            }

        case GET_MOVIES_SUCCESS:
            return {
                ...state,
                fetching: false,
                error: null,
                response: action.payload,
                payload: null,
            }

        case GET_MOVIES_FAILURE:
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

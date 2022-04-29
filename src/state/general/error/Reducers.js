import * as Types from '../Types'

const initialState = {
    errorTitle: null,
    errorBody: null,
    isErrorVisible: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Types.ERROR_SHOW:
            return {
                ...state,
                errorBody: action.payload ? action.payload.errorBody : null,
                errorTitle: action.payload ? action.payload.errorTitle : null,
                isErrorVisible: true
            }
        case Types.ERROR_CLEAR:
            return {
                ...initialState
            }
        default:
            return state
    }
}

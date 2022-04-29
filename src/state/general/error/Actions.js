import * as Types from '../Types'

export const errorShow = (payload) => ({
    type: Types.ERROR_SHOW,
    payload
})

export const errorClear = (payload) => ({
    type: Types.ERROR_CLEAR,
    payload
})

import HandleRequest from '../../HandleRequest'
import { GET_MOVIE_FAILURE, GET_MOVIE_REQUEST, GET_MOVIE_SUCCESS } from './Types'

export const getMovieSuccess = (payload) => ({
    type: GET_MOVIE_SUCCESS,
    payload,
})

export const getMovieFailure = (payload) => ({
    type: GET_MOVIE_FAILURE,
    payload,
})

export const getMovieRequest = (payload = {}) => (dispatch) => {
    const { config = {}, ...params } = payload

    dispatch({
        type: GET_MOVIE_REQUEST,
        payload: params,
    })

    return HandleRequest({
        actionSuccess: getMovieSuccess,
        actionFailure: getMovieFailure,
        dispatch,
        requestConfig: {
            method: 'get',
            url: `api/films/${params.id}`,
        },
    })
}

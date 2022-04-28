import * as Types from '../Types'

const initialState = {
    movies: [],
    characters: [],
    selectedMovie: {}
}

export default (currentState = initialState, action) => {
    const { payload: { movies, characters, selectedMovie } = {} } = action

    switch (action.type) {
        case Types.MOVIES_UPDATE:
            return {
                ...currentState,
                characters: characters || currentState.characters,
                movies: movies || currentState.movies,
                selectedMovie: selectedMovie || currentState.selectedMovie
            }

        case Types.MOVIES_CLEAR:
            return {
                ...initialState,
            }

        default:
            return currentState
    }
}

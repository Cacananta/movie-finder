const defaultState = {
  movieList: [],
  movieDetails: []
}

export default function MovieSearchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'MOVIE_SEARCH': {
      return {
        ...state,
        movieList: payload
      }
    }
    case 'MOVIE_DETAILS': {
      return {
        ...state,
        movieDetails: payload
      }
    }
    default: {
      return state
    }
  }
}
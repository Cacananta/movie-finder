import Axios from 'axios';

export function movieSearch(movieList) {
  return {
    type: 'MOVIE_SEARCH',
    payload: movieList
  }
}

export function movieDetails(movieInfo) {
  return {
    type: 'MOVIE_DETAILS',
    payload: movieInfo
  }
}


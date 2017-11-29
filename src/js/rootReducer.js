import { combineReducers } from 'redux';
import MovieSearchReducer from './reducers/MovieSearchReducer';

const rootReducer = combineReducers({
  movieList: MovieSearchReducer
});

export default rootReducer;

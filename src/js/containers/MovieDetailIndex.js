import { connect } from 'react-redux';
import MovieDetailContainer from './MovieDetailContainer';

function mapStoreToProps(store) {
  return {
    movieList: store.movieList,
    movieDetails: store.movieDetails
  }
}

export default connect(mapStoreToProps)(MovieDetailContainer);
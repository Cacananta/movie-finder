import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';

function mapStoreToProps(store) {
  return {
    movieList: store.movieList.movieList,
    movieDetails: store.movieList.movieDetails
  };
}

export default connect(mapStoreToProps)(MovieSearchContainer);

//Had a very big blocker with 'TypeError: dispatch is not a function'. The issue was in the app.jsx component --> the imported flie was originally the container 
//(i.e. MovieSearchContainer.jsx). However, the container was not the connected component, the MovieSearchIndex.js was (it has the connect() function being used 
//and imported). 
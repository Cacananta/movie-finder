import React from 'react';
import Axios from 'axios';
import { movieSearch, movieDetails } from '../actions/MovieSearchActions'
import { Link } from 'react-router-dom';

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleDetailClick = this.handleDetailClick.bind(this);
  }

  handleSearchClick() {
    const { dispatch } = this.props;
    let search = document.getElementById('movie-search').value;
    Axios.get('/api/name/' + search)
      .then((res) => {
        const movieList = res.data.Search;
        dispatch(movieSearch(movieList));
        console.log(this.props.movieList);
      })
    document.getElementById('movie-search').value = '';
  }

  handleDetailClick(e) {
    const { dispatch } = this.props;
    const movieId = e.target.id
    Axios.get('/api/id/' + movieId)
      .then((res) => {
        const response = res.data
        var movieInfo = {
          title: response.Title,
          year: response.Year,
          poster: response.Poster,
          plot: response.Plot,
          length: response.Runtime,
          genre: response.Genre,
          imdbRating: response.Ratings[0].Value,
          rottenTomatoesRating: response.Ratings[1].Value,
          id: response.imdbID
        }
        dispatch(movieDetails(movieInfo));
      })
  }

  render() {
    const { movieList } = this.props;
    return (
      <div>
        <div className="container">
          <div className="jumbotron">
            <h1 className="text-center">Movie Finder</h1>
          </div>

          {/* MOVIE SEARCH BAR */}

          <div className="row">
            <div className="col">
              <div className="input-group">
                <input id="movie-search" type="text" className="form-control" placeholder="Movie search..." />
                <span className="input-group-btn">
                  <button className="btn btn-primary" onClick={this.handleSearchClick}>Search</button>
                </span>
              </div>
            </div>
          </div>

          {movieList && movieList.map(movie =>

            <div key={movie.imdbID} className="row my-2">
              <div className="card">
                <div className="card-body">

                  <div className="col-lg-3 float-left">
                    <img className="img-fluid img-thumbnail center-block" src={movie.Poster} alt={movie.Title} />
                  </div>

                  <div className="col-lg-9 float-right">
                    <div className="row">
                      <div className="col-md-9 align-self-center mt-4">
                        <h2 className="pb-4 mb-0">{movie.Title}</h2>
                      </div>
                      <div className="col-md-3 align-self-center">
                        <Link to={"/movie/" + movie.imdbID}><button id={movie.imdbID} name={movie.imbdID} onClick={this.handleDetailClick} className="btn btn-primary" type="button">More information</button></Link>
                      </div>
                    </div>
                    <h6 className="pb-2">{movie.Year}</h6>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default MovieSearchContainer;
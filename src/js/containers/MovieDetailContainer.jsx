import React from 'react';
import { movieSearch, movieDetails } from '../actions/MovieSearchActions'
import { Link } from 'react-router-dom';

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movieList } = this.props;
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>Movie Finder</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col mb-4">
              <Link to="/">Go Back</Link>
            </div>
          </div>
          <div className="row">

            {/* POSTER */}

            <div className="col-lg-4">
              <img className="text-center img-fluid max-width: 100% height: auto rounded mx-auto d-block" src={movieList.movieDetails.poster} alt={movieList.movieDetails.title} />
            </div>

            {/* MOVIE TEXT */}

            <div className="col-lg-8">
              <div className="card">
                <div className="card-header">
                  Movie Details
                </div>
                <div className="card-block">
                  <h1 className="text-center">{movieList.movieDetails.title}</h1>
                  <div className="row">

                    {/* ALERTS */}

                    <div className="col-md-3 px-1">
                      <div className="alert alert-success" role="alert">
                        Released {movieList.movieDetails.year}
                      </div>
                    </div>

                    <div className="col-md-3 px-1">
                      <div className="alert alert-success" role="alert">
                        Length: {movieList.movieDetails.length}
                      </div>
                    </div>

                    <div className="col-md-6 px-1">
                      <div className="alert alert-success" role="alert">
                        {movieList.movieDetails.genre}
                      </div>
                    </div>

                  </div>
                  <p className="card-text">{movieList.movieDetails.plot}</p>
                  <p className="card-text">{movieList.movieDetails.awards}</p>
                  <p className="card-text"><strong>IMDB rating:</strong> {movieList.movieDetails.imdbRating}</p>
                  <p className="card-text"><strong>Rotten Tomatoes rating:</strong> {movieList.movieDetails.rottenTomatoesRating}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p></p>
      </div>
    )
  }
}


// imdbRating(pin): "8.7/10"
// rottenTomatoesRating(pin): "93%"
// id(pin): "tt0076759"

export default MovieDetailContainer;
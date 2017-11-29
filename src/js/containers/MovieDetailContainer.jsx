import React from 'react';
import { movieSearch, movieDetails } from '../actions/MovieSearchActions'

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movieList } = this.props;
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>Movie Detail</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="text-center">{movieList.movieDetails.title}</h1>
            </div>
          </div>
        </div>
        <p></p>
      </div>
    )
  }
}

// title(pin): "Star Wars: Episode IV - A New Hope"
// year(pin): "1977"
// poster(pin): "https://images-na.ssl-images-amazon.com/images/M/MV5BZDk2NmNhZDgtZDgzZS00NTRkLWFiYjUtNGMzZTYwNTFhYjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
// plot(pin): "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader."
// length(pin): "121 min"
// genre(pin): "Action, Adventure, Fantasy"
// imdbRating(pin): "8.7/10"
// rottenTomatoesRating(pin): "93%"
// id(pin): "tt0076759"

export default MovieDetailContainer;
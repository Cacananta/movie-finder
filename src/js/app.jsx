import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import MovieSearchIndex from './containers/MovieSearchIndex';
import MovieDetailIndex from './containers/MovieDetailIndex';

//Had a very big blocker with 'TypeError: dispatch is not a function'. The issue was in the app.jsx component --> the imported flie was originally the container 
//(i.e. MovieSearchContainer.jsx). However, the container was not the connected component, the MovieSearchIndex.js was (it has the connect() function being used 
//and imported). 

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'> 
          <Route exact path='/' component={ MovieSearchIndex } />
          <Route path='/movie/:id' component={ MovieDetailIndex } />
        </div>
      </Router>
    );
  }
}

import React, { Component } from 'react';
import MovieRow from './MovieRow';

class MovieList extends Component {
  render() {
    const rows = this.props.movies.map((movie) => {
      return <MovieRow key={movie.title} content={movie.title} />
    });
    
    return (
      <ul>
        {rows}
      </ul>
    );
  }
}

export default MovieList;

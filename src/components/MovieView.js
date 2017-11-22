import React, { Component } from 'react';
import star_wars_data from '../data/star_wars';
import MovieList from './MovieList';

class MovieView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ userInput: event.target.value });
  }

  render() {
		const movies = star_wars_data.filter(movie => {
      return movie.title.toLowerCase().includes(this.state.userInput.toLowerCase());
    });

    return (
      <div>
        <input type="text"
               value={this.state.userInput}
               onChange={this.onChange} />

        <MovieList movies={movies} />
      </div>
    );
  }
}

export default MovieView;

import React, { Component } from 'react';
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
	getMovies(){
		const movies = this.props.starWarsData.filter(movie => {
      return movie.title.toLowerCase().includes(this.state.userInput.toLowerCase());
    });

		return movies;
	}

  render() {
    return (
      <div>
        <input type="text"
               value={this.state.userInput}
               onChange={this.onChange} />

        <MovieList movies={this.getMovies()} />
      </div>
    );
  }
}

export default MovieView;

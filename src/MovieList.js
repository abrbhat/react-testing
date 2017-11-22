import React, { Component } from 'react';
import star_wars_data from './data/star_wars';
import MovieRow from './MovieRow';

class MovieList extends Component {
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

  getRows() {
    const rows = star_wars_data.filter(movie => {
      return movie.title.toLowerCase().includes(this.state.userInput.toLowerCase());
    })
    .map(movie => {
      return <MovieRow key={movie.title} content={movie.title} />;
    });

    return rows;
  }

  render() {
    return (
      <div>
        <input type="text"
               value={this.state.userInput}
               onChange={this.onChange} />
        <ul>
  				{this.getRows()}
        </ul>
      </div>
    );
  }
}

export default MovieList;

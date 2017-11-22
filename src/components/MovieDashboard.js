import React, { Component } from 'react';
import MovieView from './MovieView';

class MovieDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
			starWarsData: []
    };
  }

	componentDidMount() {
		fetch('https://swapi.co/api/films')
		.then((response) => {
			return response.json();
		})
		.then((responseJSON) => {
			this.setState({
				starWarsData: responseJSON.results
			});
			return true;
		})
		.catch((error) => {
			console.log(error);
		})
	}

  getDashboardContent() {
    if (this.state.starWarsData.length > 0) {
      return <MovieView starWarsData={this.state.starWarsData} />
    } else {
      return <p>Loading Movies...</p>
    }
  }

  render() {
    return (
      <div>
        {this.getDashboardContent()}
      </div>
    );
  }
}

export default MovieDashboard;

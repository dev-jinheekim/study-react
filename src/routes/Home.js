import React from 'react';
import axios from 'axios';
import './Home.css';
import Movie from '../components/Movie';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  componentDidMount () {
    this.getMovies();
  }

  async getMovies() {
    const {
      data: {
        data : { movies }
      }
    } = await axios.get('https://yts.mx/api/v2/list_movies.json');
    this.setState({ movies, isLoading: false });
  }

  render() {
    const { isLoading, movies } = this.state;
    return <section className="container">
      { isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {
            movies.map((movie) => {
              return <Movie key={movie.id}
                            id={movie.id}
                            year={movie.year}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                            poster={movie.medium_cover_image}/>
            })
          }
        </div>
      )}
    </section>;
  };

}

export default Home;

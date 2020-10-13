import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ id, year, genres, title, summary, poster }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title}/>
      <div className="movie__data">
        <h1 className="movie__title">{ title }</h1>
        <div className="movie__year">{ year }</div>
        <p>
          {
             (summary.length < 280) ? summary : summary.slice(0, 280) + '...'
          }
        </p>
        <ul className="movie__genres">
          {
            genres.map((genre, index) => {
              return <li key={index} className="movie___genre">{ genre }</li>
            })
          }
        </ul>
      </div>
    </div>
  )
}

Movie.propType = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
}

export default Movie;

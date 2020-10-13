import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom'

function Movie({ id, year, genres, title, summary, coverImg, bgImg }) {
  return (
    <Link to={{
      pathname: `/movie/${id}`,
      state: {
        year,
        title,
        summary,
        genres,
        coverImg,
        bgImg,
      }
    }} className="movie">
      <img src={coverImg} alt={title} title={title}/>
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
    </Link>
  )
}

Movie.propType = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  bgImg: PropTypes.string.isRequired,
}

export default Movie;

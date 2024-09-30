import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function ExploreMovieCard({ movie }) {
  const navigate = useNavigate();

  const onMovieClick = async () => {
    const url = `https://omdbapi.com/?i=${movie.imdbID}&apikey=54b966e3`;
    try {
      const response = await axios.get(url);
      const movieDetails = response.data;
      navigate('/exploremoviedetail', { state: { movieDetails } });
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <div>
      <ul className='shelf-list'>
        
          
          <li key={movie.id} onClick={() => onMovieClick(movie)}>
            <img className='moviecard-1-2' src={movie.Poster} />
            <p className='movie-name'>{movie.Title}</p>
            <p className='movie-genre'>{movie.genre}</p>
            <div className='line-break'>
              </div>
          </li>
     
      </ul>
      
    </div>
  );
}

export default ExploreMovieCard;

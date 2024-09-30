import {React,useState} from 'react';

import { useLocation } from "react-router-dom";
import appletv from '../apple-tv logo.png'
import imdbicon from '../imdb icon.png'


function ExploreMovieDetail({ movie, onClose }) {
    const location = useLocation();
    const movieDetails = location.state.movieDetails;

    const handleClosePopup = () => {
        onClose();
      };


  return (
    <div>
      <div className="popup" id='popup'>
        <div className="overlay" onClick={onClose}></div>
        <div className="popup-content2">
          <img className='apple-logo' src={appletv} alt="" />
          <h1 className='movie-title'>{movieDetails.Title}</h1>
          <img className='box-image2' src={movieDetails.Poster} alt="" />
          <p className='movie-description'>{movieDetails.Plot}</p>
          <p>Genre:{movieDetails.Genre}</p>
          <p>First Episode Date: {movieDetails.Released}</p>
          <p>Directed by: {movieDetails.Director}</p>
          <p>Created by: {movieDetails.Writer}</p>
          <div className='smallimage-container'>
          <img id='movie-rating' className='imdb-icon' src={imdbicon}  alt="IMDB" />
          <p class="imdb-text">{movieDetails.imdbRating}</p>
          {/* <img id='movie-rating' className='rotten-tomatoes' src={movie.rottentomatoes} alt="Rotten Tomatoes" /> */}
          {/* <p class="rotten-tomatoes-text">{movie.rottentomatorating}</p> */}
          </div>
          <button className='controls2' onClick={handleClosePopup}>Close</button>
          <button className='watchlist-btn2'>Add to Watchlist</button>
        </div>
      </div>
    </div>
  );
}

export default ExploreMovieDetail;

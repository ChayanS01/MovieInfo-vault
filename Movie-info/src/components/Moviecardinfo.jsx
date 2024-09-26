import React from 'react';

function Moviecardinfo({ movie, onClose }) {
  return (
    <div>
      <div className="popup" id='popup'>
        <div className="overlay" onClick={onClose}></div>
        <div className="popup-content">
          <img className='apple-logo' src={movie.appletvv} alt="" />
          <h1 className='movie-title'>{movie.title}</h1>
          <img className='box-image' src={movie.image} alt="" />
          <p className='movie-description'>{movie.description}</p>
          <p>Genre: {movie.genre}</p>
          <p>First Episode Date: {movie.releaseDate}</p>
          <p>Directed by: {movie.directedBy}</p>
          <p>Created by: {movie.createdBy}</p>
          <div className='smallimage-container'>
          <img id='movie-rating' className='imdb-icon' src={movie.imdb}  alt="IMDB" />
          <p class="imdb-text">{movie.imdbrating}</p>
          <img id='movie-rating' className='rotten-tomatoes' src={movie.rottentomatoes} alt="Rotten Tomatoes" />
          <p class="rotten-tomatoes-text">{movie.rottentomatorating}</p>
          </div>
          <button className='controls' onClick={onClose}>Close</button>
          <button className='watchlist-btn'>Add to Watchlist</button>
        </div>
      </div>
    </div>
  );
}

export default Moviecardinfo;

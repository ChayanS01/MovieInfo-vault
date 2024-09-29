import React from 'react'

function ExploreMovies() {
  return (
    <div>
        
    </div>
  )
}

export default ExploreMovies

//  ExploreMovies.jsx


import React, { useState } from 'react';
import axios from 'axios';

import Moviecard from './Moviecard'
import ExploreMovieCard from './ExploreMovieCard';
// import ExploreMovieCard from './ExploreMovieCard';

function ExploreMovies() {
  const url = "https://omdbapi.com/?s=";
  const Key = "54b966e3";

  const [title, setTitle] = useState(''); 
  const [searchResults, setSearchResults] = useState([]); 
  const [error, setError] = useState(null); 

  const handleSubmit = (e) => {
    setTitle(e.target.value); // Update the title state when the input value changes
  }

  const handleSearch = (e) => {
    e.preventDefault();
    axios.get(`${url}${title}&apikey=${Key}`) 
      .then(response => {
        if (response.data.Response === 'True') {
          setSearchResults(response.data.Search); // Update the searchResults state with the API response
          setError(null);                       // Clear the error message
        } else {
          setSearchResults([]);                     // Clear the search results
          setError('Please,Enter Correct Movie Name'); // Set the error message
        }
      })
      .catch(error => {
        console.error(error); 
        setError('An error occurred while searching for movies');
      });
  }

  return (
    <form className='grid justify-center grid-wrap m-10'>
      <h1 className='text-white flex justify-center text-4xl pb-8 font-bold ' id='heading'>Explore Movies</h1>
      <input type="text" placeholder='Search Movies' onChange={handleSubmit} value={title} className='h-[3rem] w-[30rem] outline-none p-4 rounded-lg flex justify-center text-black' />
      <div className='flex justify-center m-5'>
        <button onClick={handleSearch} className='h-[3rem] w-[10rem] bg-blue-500 rounded-xl'>Search</button>
      </div>
      {
        error ? (
          <p className='text-red-500 text-center font-semibold text-4xl'>{error}</p>
        ) :
          <div className='grid grid-cols-3 gap-4'>
            {searchResults.map((movie) => (
              
              <ExploreMovieCard  movie={movie} />
            ))}
          </div>
        
      }
    </form>
  )
}

export default ExploreMovies;

// ExploreMovieCard.jsx
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
            <img className='moviecard-1' src={movie.Poster} alt={movie.title} />
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

// ExploreMOviesDetail.jsx

import {React,useState} from 'react';

import { useLocation } from "react-router-dom";
import appletv from '../apple-tv logo.png'
import imdbicon from '../imdb icon.png'


function ExploreMovieDetail({ movie, onClose }) {
    const location = useLocation();
    const movieDetails = location.state.movieDetails;

    const [selectedMovie, setSelectedMovie] = useState(null);
    const handleClosePopup = () => {
        setSelectedMovie(null);
      };


  return (
    <div>
      <div className="popup" id='popup'>
        <div className="overlay" onClick={onClose}></div>
        <div className="popup-content">
          <img className='apple-logo' src={appletv} alt="" />
          <h1 className='movie-title'>{movieDetails.Title}</h1>
          <img className='box-image' src={movieDetails.Poster} alt="" />
          <p className='movie-description'>{movieDetails.Plot}</p>
          <p>Genre: {movieDetails.Genre}</p>
          <p>First Episode Date: {movieDetails.Released}</p>
          <p>Directed by: {movieDetails.Director}</p>
          <p>Created by: {movieDetails.Writer}</p>
          <div className='smallimage-container'>
          <img id='movie-rating' className='imdb-icon' src={imdbicon}  alt="IMDB" />
          <p class="imdb-text">{movieDetails.imdbRating}</p>
          {/* <img id='movie-rating' className='rotten-tomatoes' src={movie.rottentomatoes} alt="Rotten Tomatoes" /> */}
          {/* <p class="rotten-tomatoes-text">{movie.rottentomatorating}</p> */}
          </div>
          <button className='controls' onClick={handleClosePopup}>Close</button>
          <button className='watchlist-btn'>Add to Watchlist</button>
        </div>
      </div>
    </div>
  );
}

export default ExploreMovieDetail;

// App.jsx"
// add one route
 <Route path="/exploremoviedetail" element={<ExploreMovieDetail />} />

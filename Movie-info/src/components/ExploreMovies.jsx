import React, { useState } from 'react';
import axios from 'axios';
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
  const handleFocus = (e) => {
    e.target.classList.add('search-focused');
  };

  // Function to remove the CSS class when search bar loses focus
  const handleBlur = (e) => {
    e.target.classList.remove('search-focused');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    axios.get(`${url}${title}&apikey=${Key}`) 
      .then(response => {
        if (response.data.Response === 'True') {
          setSearchResults(response.data.Search); // Update the searchResults state with the API response
          setError(null);                       // Clear the error message
        } else {
          setSearchResults([]);                     // Clear the search results
          setError('No Movie found!'); // Set the error message
        }
      })
      .catch(error => {
        console.error(error); 
        setError('An error occurred while searching for movies');
      });
  }
  

  return (
    <form className='grid justify-center grid-wrap m-10'>
      <h1 className='text-gray-300 flex justify-center text-4xl pb-8 font-bold underline underline-offset-8 decoration-gray-600' id='heading'>Explore Movies</h1>
      {/* <input type="text" placeholder='Search Movies' onChange={handleSubmit} onFocus={handleFocus}
      onBlur={handleBlur} value={title} className='h-[3rem] w-[30rem] p-4 rounded-lg text-black ' /> */}
      <div class="flex justify-center items-center">
  <input type="text" placeholder="Search Movies" onChange={handleSubmit} onFocus={handleFocus}
    onBlur={handleBlur} value={title} class="h-[3rem] w-[30rem] p-4 m-2 rounded-lg text-black" />
</div>

      <div className='flex justify-center m-5'>
        <button onClick={handleSearch} className='h-[3rem] w-[15rem] bg-blue-500 rounded-md mt-10'>Search</button>
      </div>
      {
        error ? (
          <p className='text-red-500 bg-white rounded p-1 w-[20rem] mt-2 text-center ml-24 text-xl'>{error}</p>
        ) :
          <div className='shelf-list'>
            {searchResults.map((movie) => (
              <ExploreMovieCard  movie={movie} />
            ))}
          </div>
      }
    </form>
  )
}

export default ExploreMovies;

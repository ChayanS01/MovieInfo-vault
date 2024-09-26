import React, { useState } from 'react';
import Moviecard from './Moviecard';
import Moviecardinfo from './Moviecardinfo';



function Moviesall() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleClosePopup = () => {
    setSelectedMovie(null);
  };

  return (
    <div>
      <Moviecard onMovieClick={handleMovieClick} />
      {selectedMovie && (
        <Moviecardinfo movie={selectedMovie} onClose={handleClosePopup} />
      )}
    </div>
  );
}

export default Moviesall;

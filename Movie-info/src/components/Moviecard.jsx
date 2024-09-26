import React from 'react';
import appletv from '../apple-tv logo.png'
import Moviecard1 from '../card-1.png';
import Moviecard2 from '../card-2.png';
import Moviecard3 from '../card-3.png';
import Moviecard4 from '../card-4.png';
import Moviecard5 from '../card-5.png';
import Moviecard6 from '../card-6.png';
import Moviecard7 from '../card-7.png';
import Moviecard8 from '../card-8.png';
import Moviecard9 from '../card-9.png';
import Moviecard10 from '../card-10.png';
import Moviecard12 from '../card-12.png';
import Moviecard13 from '../card-13.png';
import Moviecard14 from '../card-14.png';
import Moviecard15 from '../card-15.png';
import Moviecard16 from '../card-16.png';
import Moviecard17 from '../card-17.png';
import imdbicon from '../imdb icon.png'
import rottentomatoes from '../rotten tomatoes.png'

const movieData = [
  {
    id: 1,
    appletvv: appletv,
    title: "Master's of the Air",
    image: Moviecard1,
    description: "Explores the aerial wars of WWII through the enlisted men of the Mighty Eighth Air Force of the United States Army Air Forces.",
    genre: "Action, War",
    releaseDate: "26 January 2024 (USA)",
    directedBy: "Cary Joji Fukunaga, Dee Rees, Anna Boden, Ryan Fleck, Tim Van Patten",
    createdBy: "John Shiban, John Orloff",
    imdb: imdbicon,
    imdbrating: ": 7.8/10",
    rottentomatoes: rottentomatoes,
    rottentomatorating: "TomatoMeter : 85%",
  },
  {
    id: 1,
    appletvv: appletv,
    title: "Presumed Innocent",
    description: "A horrific murder upends the Chicago prosecuting attorney's office when one of its own is suspected of the crime, leaving the accused fighting to keep his family together.",
    genre: "Thriller",
    releaseDate: "12 June 2024",
    directedBy: "Caroline James; Trevor Baker; Andrew Balek",
    createdBy: " David E. Kelley",
    image: Moviecard2,
    imdb: imdbicon,
    imdbrating: ": 7.7/10",
    rottentomatoes: rottentomatoes,
    rottentomatorating: "TomatoMeter : 78%",
  },
  {
    id: 1,
    appletvv: appletv,
    title: "Coda",
    description: "Ruby is the only hearing member of a deaf family, At 17 she started working with her family to keep the fishing business afloat. Ruby finds herself drawn to both her duet partner and her latent passion for singing.",
    genre: "Musical, Comedy",
    releaseDate: "13 August 2021 (USA)",
    directedBy: "Sian Heder",
    createdBy: "Sian Heder",
    image: Moviecard3,
    imdb: imdbicon,
    imdbrating: ": 8.0/10",
    rottentomatoes: rottentomatoes,
    rottentomatorating: "TomatoMeter : 94%",
  },
  {
    id: 1,
    appletvv: appletv,
    title: "Monarch Legacy of Monsters",
    description: "After the world-shattering revelation that monsters are real, two siblings follow in their father's footsteps to uncover their family's connection to the secretive organization known as Monarch",
    genre: "Television, Series",
    releaseDate: "17 November 2023 (USA)",
    directedBy: " Andy Goddard",
    createdBy: "Chris Black and Matt Fraction",
    image: Moviecard4,
    imdb: imdbicon,
    imdbrating: ": 7.0/10",
    rottentomatoes: rottentomatoes,
    rottentomatorating: "TomatoMeter : 86%",
  },
  {
    id: 1,
    appletvv: appletv,
    title: "Ted Lasso",
    description: "An American football coach is hired to manage a British soccer team; what he lacks in knowledge, he makes up for in optimism, determination and biscuits.",
    genre: "Fun, Sports",
    releaseDate: "14 August 2020",
    directedBy: "Bill Lawrence; Jason Sudeikis; Brendan Hunt; Joe Kelly; Jeff Ingold; Bill Wrubel",
    createdBy: "Jason Sudeikis, Brett Goldstein, Brendan Hunt",
    image: Moviecard5,
    imdb: imdbicon,
    imdbrating: ": 8.8/10",
    rottentomatoes: rottentomatoes,
    rottentomatorating: "TomatoMeter : 90%",
  },
  {
    id: 1,
    appletvv: appletv,
    title: "The Instigators",
    description: "Rory and Cobby are unlikely partners thrown together for a heist. However, when it goes awry, they team up to outrun police, backward bureaucrats, and a vengeful crime boss.",
    genre: "Comedy, Thriller",
    releaseDate: "2 August 2020",
    directedBy: " Doug Liman",
    createdBy: "Chuck Maclean and Casey Affleck",
    image: Moviecard6,
    imdb: imdbicon,
    imdbrating: ": 6.2/10",
    rottentomatoes: rottentomatoes,
    rottentomatorating: "TomatoMeter : 41%",
  },
  {
    id: 1,
    appletvv: appletv,
    title: "Greyhound",
    description: "U.S. Navy Cmdr. Ernest Krause is assigned to lead an Allied convoy across the Atlantic during World War II known as the longest, largest and most complex naval battle in history: The Battle of the Atlantic.",
    genre: "War, Action",
    releaseDate: "7 November 2020",
    directedBy: "Aaron Schneider",
    createdBy: "Gary Goetzman",
    image: Moviecard7,
    imdb: imdbicon,
    imdbrating: ": 7.0/10",
    rottentomatoes: rottentomatoes,
    rottentomatorating: "TomatoMeter : 78%",
  },
  {
    id: 1,
    appletvv: appletv,
    title: "Ghosted",
    description: "An American football coach is hired to manage a British soccer team; what he lacks in knowledge, he makes up for in optimism, determination and biscuits.",
    genre: "Fun, Sports",
    releaseDate: "14 August 2020",
    directedBy: "Bill Lawrence; Jason Sudeikis; Brendan Hunt; Joe Kelly; Jeff Ingold; Bill Wrubel",
    createdBy: "Jason Sudeikis, Brett Goldstein, Brendan Hunt",
    image: Moviecard8,
    imdb: imdbicon,
    imdbrating: ": 5.8/10",
    rottentomatoes: rottentomatoes,
    rottentomatorating: "TomatoMeter : 25%",
  },
  {
    id: 1,
    appletvv: appletv,
    title: "The Family Plan",
    description: "An American football coach is hired to manage a British soccer team; what he lacks in knowledge, he makes up for in optimism, determination and biscuits.",
    genre: "Fun, Sports",
    releaseDate: "14 August 2020",
    directedBy: "Bill Lawrence; Jason Sudeikis; Brendan Hunt; Joe Kelly; Jeff Ingold; Bill Wrubel",
    createdBy: "Jason Sudeikis, Brett Goldstein, Brendan Hunt",
    image: Moviecard9,
    imdb: imdbicon,
    imdbrating: ": 6.3/10",
    rottentomatoes: rottentomatoes,
    rottentomatorating: "TomatoMeter : 25%",
  },
  {
    id: 1,
    appletvv: appletv,
    title: "Killers of the Flower Moon",
    description: "An American football coach is hired to manage a British soccer team; what he lacks in knowledge, he makes up for in optimism, determination and biscuits.",
    genre: "Fun, Sports",
    releaseDate: "14 August 2020",
    directedBy: "Bill Lawrence; Jason Sudeikis; Brendan Hunt; Joe Kelly; Jeff Ingold; Bill Wrubel",
    createdBy: "Jason Sudeikis, Brett Goldstein, Brendan Hunt",
    image: Moviecard10,
    imdb: imdbicon,
    imdbrating: ": 7.6/10",
    rottentomatoes: rottentomatoes,
    rottentomatorating: "TomatoMeter : 93%",
  },
  {
    id: 1,
    appletvv: appletv,
    title: "Finch",
    description: "An American football coach is hired to manage a British soccer team; what he lacks in knowledge, he makes up for in optimism, determination and biscuits.",
    genre: "Fun, Sports",
    releaseDate: "14 August 2020",
    directedBy: "Bill Lawrence; Jason Sudeikis; Brendan Hunt; Joe Kelly; Jeff Ingold; Bill Wrubel",
    createdBy: "Jason Sudeikis, Brett Goldstein, Brendan Hunt",
    image: Moviecard12,
    imdb: imdbicon,
    imdbrating: ": 6.9/10",
    rottentomatoes: rottentomatoes,
    rottentomatorating: "TomatoMeter : 74%",
  },
  {
    id: 1,
    appletvv: appletv,
    title: "For All Mankind",
    description: "An American football coach is hired to manage a British soccer team; what he lacks in knowledge, he makes up for in optimism, determination and biscuits.",
    genre: "Fun, Sports",
    releaseDate: "14 August 2020",
    directedBy: "Bill Lawrence; Jason Sudeikis; Brendan Hunt; Joe Kelly; Jeff Ingold; Bill Wrubel",
    createdBy: "Jason Sudeikis, Brett Goldstein, Brendan Hunt",
    image: Moviecard13,
    imdb: imdbicon,
    imdbrating: ": 8.1/10",
    rottentomatoes: rottentomatoes,
    rottentomatorating: "TomatoMeter : 92%",
  },
  {
    id: 1,
    appletvv: appletv,
    title: "Tiny World",
    description: "An American football coach is hired to manage a British soccer team; what he lacks in knowledge, he makes up for in optimism, determination and biscuits.",
    genre: "Fun, Sports",
    releaseDate: "14 August 2020",
    directedBy: "Bill Lawrence; Jason Sudeikis; Brendan Hunt; Joe Kelly; Jeff Ingold; Bill Wrubel",
    createdBy: "Jason Sudeikis, Brett Goldstein, Brendan Hunt",
    image: Moviecard14,
    imdb: imdbicon,
    imdbrating: ": 8.0/10",
    rottentomatoes: rottentomatoes,
    rottentomatorating: "TomatoMeter : 91%",
  },
  {
    id: 1,
    appletvv: appletv,
    title: "The year Earth changed",
    description: "An American football coach is hired to manage a British soccer team; what he lacks in knowledge, he makes up for in optimism, determination and biscuits.",
    genre: "Fun, Sports",
    releaseDate: "14 August 2020",
    directedBy: "Bill Lawrence; Jason Sudeikis; Brendan Hunt; Joe Kelly; Jeff Ingold; Bill Wrubel",
    createdBy: "Jason Sudeikis, Brett Goldstein, Brendan Hunt",
    image: Moviecard15,
    imdb: imdbicon,
    imdbrating: "7.3/10",
    rottentomatoes: rottentomatoes,
    rottentomatorating: "65%"
  },
  {
    id: 1,
    appletvv: appletv,
    title: "Earth at Night",
    description: "An American football coach is hired to manage a British soccer team; what he lacks in knowledge, he makes up for in optimism, determination and biscuits.",
    genre: "Fun, Sports",
    releaseDate: "14 August 2020",
    directedBy: "Bill Lawrence; Jason Sudeikis; Brendan Hunt; Joe Kelly; Jeff Ingold; Bill Wrubel",
    createdBy: "Jason Sudeikis, Brett Goldstein, Brendan Hunt",
    image: Moviecard16,
    imdb: imdbicon,
    imdbrating: ": 8.3/10",
    rottentomatoes: rottentomatoes,
    rottentomatorating: "TomatoMeter : 100%",
  },
  
  // Add other movie data here
];

function Moviecard({ onMovieClick }) {
  return (
    <div>
      <ul className='shelf-list'>
        {movieData.map((movie) => (
          
          <li key={movie.id} onClick={() => onMovieClick(movie)}>
            <img className='moviecard-1' src={movie.image} alt={movie.title} />
            <p className='movie-name'>{movie.title}</p>
            <p className='movie-genre'>{movie.genre}</p>
            <div className='line-break'>
              </div>
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default Moviecard
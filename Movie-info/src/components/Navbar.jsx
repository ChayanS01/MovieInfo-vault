import React from 'react';

import logo from '../account user.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='nav'>
      <p className=''>Apple TV+</p>
      <div className='anchor-container'>
        <Link to="/movies" className='anchor-nav' >Movies</Link>
        <Link to="/watchlist" className='anchor-nav'>Watchlist</Link>
        <Link to="/explore" className='anchor-nav'>Explore Movies</Link>
        </div>
      <img className='image-nav' src={logo} alt="" />
    </div>
  );
};

export default Navbar;
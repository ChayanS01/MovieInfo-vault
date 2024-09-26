import React from 'react'
import Moviesall from './Moviesall'
import forwardarrow from '../forward-arrow.png'

function Movies() {
  return (
    <div>
        <div className="trending-movies">
          <h1>Top Charts: TV Shows, TV Movies <img className='forward-arrow-img' src={forwardarrow} alt="" /> </h1>
        </div>
        <div>
          <Moviesall/>
      </div>
        </div>
  )
}

export default Movies
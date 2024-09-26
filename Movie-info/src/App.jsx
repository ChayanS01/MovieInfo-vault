import './App.css'
import Movies from './components/Movies'
import Navbar from "./components/Navbar"
import Watchlist from './components/Watchlist'
import ExploreMovies from './components/Exploremovies'
import Banner from './components/Banner'
// import Home from './components/Home'
// import Tvshows from './components/Tvshows'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/movies' element={<> <Banner/> <Movies/> </>}/>
    <Route path='/watchlist' element={<> <Watchlist/> </> }/>
    <Route path='/explore' element={<ExploreMovies/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
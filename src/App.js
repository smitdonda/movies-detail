import './App.css';
import Sidebar from './components/Sidebar'
import Addmovies from './components/Addmovies';
import Allmovies from './components/Allmovies';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React,{useState} from 'react'

export const MoviesContext = React.createContext();

function App() {


  let [movies,setMovies] = useState([])

  return <>
    <BrowserRouter>
        <div style={{display:"grid",gridTemplateColumns:"15% 85%"}}>
            <div >
                <Sidebar/>
            </div>
            <div>
            <MoviesContext.Provider value={{movies,setMovies}}>
                <Routes>
                      <Route path ='/add-movies' element={<Addmovies/>}/>
                      <Route path = '/all-movies' element={<Allmovies/>}/>
                      <Route path = '/' element={<Allmovies/>}/>
                </Routes>
              </MoviesContext.Provider>
            </div>
        </div>
    </BrowserRouter>
  </>
}

export default App;
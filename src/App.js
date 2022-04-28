import './App.css';
import Landing from '../src/screens/Landing'
import MovieDetails from "./screens/MovieDetails";
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
      <Routes>
        <Route exact element={<Landing/>} path='/'/>
        <Route exact element={<MovieDetails/>} path='/movieDetails'/>
      </Routes>

  )
}

export default App;

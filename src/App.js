
import './App.css';
import {BrowserRouter , Routes, Route} from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import Netflix from "./pages/Neflix"
import TvShow  from "./pages/TvShow"
import Player from "./pages/Player"
import MoviePage from "./pages/MoviePage"


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<LoginPage />} />
        <Route exact path='/signup' element={<SignUpPage />} />
        <Route exact path='/player' element={<Player />} />
        <Route exact path='/tv' element={<TvShow />} />
        <Route exact path='/' element={<Netflix />} />
        <Route exact path='/movie' element={<MoviePage />} />
      </Routes>
      </BrowserRouter>
 
    </div>
  );
}

export default App;

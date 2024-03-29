import './App.css';
import Header from './component/Header';
import Banner from './component/Banner';
import Movies from './component/Movie';
import Watchlist from "./component/Watchlists"
import PageNotFound from './component/NotFound';

import { useSelector } from 'react-redux';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from './component/MovieDetails';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={
            < >
              <Banner />
              <Movies />
            </>
          }
          />
          <Route path='/watchlist' element={
            <Watchlist/>
          } />
          <Route path='/movie/*' element={<MovieDetails/>}/>
          <Route path="*" element=
            {< >
              <PageNotFound/>
            </>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

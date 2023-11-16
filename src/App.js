import './App.css';
import Header from './component/Header';
import Banner from './component/Banner';
import Movies from './component/Movie';
import Watchlist from "./component/Watchlists"

import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          <Route path="*" element=
            {< >
              <Banner />
              <Movies />
            </>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

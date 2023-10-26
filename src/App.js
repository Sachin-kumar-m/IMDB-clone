import './App.css';
import Header from './component/Header';
import Banner from './component/Banner';
import Movies from './component/Movie';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" />{<Header />}
        </Routes>

        <Banner />
        <Movies />
      </BrowserRouter>
    </div>
  );
}

export default App;

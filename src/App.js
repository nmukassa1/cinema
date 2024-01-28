import Navbar from './Components/Navbar';
import Cinema from './Pages/Cinema';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';
import './sass/dist/styles.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/cinema/:location/film/:title/:id' element={<Cinema />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

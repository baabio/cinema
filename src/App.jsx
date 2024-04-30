import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PostDescrip from './components/PostDescrip';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

const App = () => {
  const [count, setCount] = useState(0)
  const movie = {

    title: "Lupin",
    releaseDate: "2024-03-02",
    runtime: "94",
    rating: "67",
    genres: "Animation, Action, Adventure",
    budget: "85000000",
    revenue: "347255055",
    overview: "Inspiré par les aventures d'Arsène Lupin, le gentleman cambrioleur Assane Diop décide de venger son père d'une terrible injustice",
  };

  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} /> 
          <Route path='/descriptif' element={<PostDescrip src={movie.poster} data={movie} />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

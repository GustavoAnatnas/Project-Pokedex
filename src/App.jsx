import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Pokemons from './Pages/Pokemons';
import Favoritos from './Pages/Favoritos';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pokemons />} />
      <Route path="/Favorites" element={<Favoritos />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

import React from 'react';
import './App.css';
import {
  Route, createBrowserRouter, createRoutesFromElements,
} from 'react-router-dom';
import Home from './Pages/Home';
// import Teste from './Pages/Teste';

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />} />,
  ),
);

export default App;

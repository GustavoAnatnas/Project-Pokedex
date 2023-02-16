import React from 'react';
import './App.css';
import {
  Route, createBrowserRouter, createRoutesFromElements,
} from 'react-router-dom';
import Home from './Pages/Home';

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      {/* <Route path="dashboard" element={<Dashboard />} />
      <Route path="about" element={<About />} /> */}
    </Route>,
  ),
);

export default App;

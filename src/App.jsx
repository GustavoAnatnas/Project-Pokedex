import React from 'react';
import './App.css';
import requestAllPokemons from './API/Requests';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Olá Mundo!</p>
        <button type="button" onClick={requestAllPokemons}>Chama API</button>
      </header>
    </div>
  );
}

export default App;

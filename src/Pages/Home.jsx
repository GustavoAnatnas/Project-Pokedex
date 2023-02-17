import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../Helpers/Loading';

function App() {
  const [dataPokemon, setDataPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
      const { data } = response;
      console.log(data.results);
      setDataPokemon(data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div>
      <h1>Pokémon List</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <ul>
          {dataPokemon.map((p) => (
            <li key={p.name}>{p.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

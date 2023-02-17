import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import Loading from '../Helpers/Loading';
import PokemonDetails from '../Components/Pokemon';

function App() {
  const [dataPokemon, setDataPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
      const { data } = response;
      setDataPokemon(data.results);
    } catch (error) {
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div>
      <h1>Lista de Pokémons</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {dataPokemon.map((p) => (
            <PokemonDetails
              key={p.name}
              url={p.url}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

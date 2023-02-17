import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import Loading from '../Helpers/Loading';
import PokemonDetails from '../Components/Pokemon';

function App() {
  const [resultPokemon, setResultPokemon] = useState([]);
  const [dataPokemon, setDataPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
      const { data } = response;
      setDataPokemon(data);
      setResultPokemon(data.results);
    } catch (error) {
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMorePokemon = async () => {
    try {
      const response = await axios.get(dataPokemon.next);
      const { data } = response;
      setDataPokemon(data);
      setResultPokemon([...data.results]);
    } catch (error) {
      throw new Error(error);
    }
  };

  const fetchPreviousPokemon = async () => {
    try {
      const response = await axios.get(dataPokemon.previous);
      const { data } = response;
      setDataPokemon(data);
      setResultPokemon([...data.results]);
    } catch (error) {
      throw new Error(error);
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
          {resultPokemon.map((p) => (
            <PokemonDetails
              key={p.name}
              url={p.url}
            />
          ))}
        </div>
      )}
      <button
        onClick={fetchPreviousPokemon}
        type="button"
      >
        Carregar anterior
      </button>
      <button
        onClick={fetchMorePokemon}
        type="button"
      >
        Carregar mais
      </button>
    </div>
  );
}

export default App;

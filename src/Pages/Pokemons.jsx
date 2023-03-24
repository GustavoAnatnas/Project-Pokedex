import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import Loading from '../Helpers/Loading';
import PokemonCards from '../Components/PokemonCards';
import Header from '../Components/Header';

function Pokemons() {
  const [resultPokemon, setResultPokemon] = useState([]);
  const [dataPokemon, setDataPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPokemon = async () => {
    try {
      const url = 'https://pokeapi.co/api/v2/pokemon';
      const response = await axios.get(url);
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
    <div className="bg-gray-100">
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid place-items-center grid-cols-1 grid-rows-2 mobile:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5 gap-4">
          {resultPokemon.map((p) => (
            <PokemonCards
              key={p.name}
              url={p.url}
            />
          ))}
        </div>
      )}
      <nav className="flex justify-around items-center mt-10">

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={fetchPreviousPokemon}
          type="button"
        >
          Carregar anterior
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={fetchMorePokemon}
          type="button"
        >
          Carregar mais
        </button>
      </nav>
    </div>
  );
}

export default Pokemons;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Loading from '../Helpers/Loading';

function PokemonDetails({ url }) {
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(url);
        setPokemonDetails(response.data);
      } catch (error) {
        throw new Error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemon();
  }, [url]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2>{pokemonDetails.name}</h2>
      <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
      <p>
        <b>Tipo:</b>
        {' '}
        {pokemonDetails.types[0].type.name}
      </p>
      <p>
        <b>Altura:</b>
        {' '}
        {pokemonDetails.height / 10}
        m
      </p>
      <p>
        <b>Peso:</b>
        {' '}
        {pokemonDetails.weight / 10}
        kg
      </p>
    </div>
  );
}

PokemonDetails.propTypes = {
  url: PropTypes.string.isRequired,
};

export default PokemonDetails;

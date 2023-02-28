import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Loading from '../Helpers/Loading';

function PokemonDetails({ url }) {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(url);
        setPokemonDetails(response.data);
      } catch (error) {
        console.error('Failed to fetch Pokemon:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemon();
  }, [url]);

  if (isLoading) {
    return <Loading />;
  }

  const {
    name, sprites, types, height, weight,
  } = pokemonDetails;
  const typeText = types.length === 1 ? 'Tipo:' : 'Tipos:';
  const typeNames = types.map((type) => type.type.name).join(', ');

  return (
    <div className="bg-gray-300 h-full w-9/12 flex-1 p-4">
      <h2>{name}</h2>
      {sprites.front_default !== null ? (
        <img src={sprites.front_default} alt={name} />
      ) : (
        <p>Ops! Foto não encontrada.</p>
      )}
      <p>
        <b>{typeText}</b>
        {' '}
        {typeNames}
      </p>
      <p>
        <b>Altura:</b>
        {' '}
        {(height / 10).toFixed(1)}
        m
      </p>
      <p>
        <b>Peso:</b>
        {' '}
        {(weight / 10).toFixed(1)}
        kg
      </p>
    </div>
  );
}

PokemonDetails.propTypes = {
  url: PropTypes.string.isRequired,
};

export default PokemonDetails;

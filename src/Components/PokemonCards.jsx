import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import Loading from '../Helpers/Loading';

function PokemonCards({ url }) {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(url);
        setPokemonDetails(response.data);
      } catch (error) {
        console.error('Failed to fetch Pokemon:', error);
      }
    };
    fetchPokemon();
  }, [url]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const index = storedFavorites.findIndex((favorite) => favorite.name === pokemonDetails?.name);
    setIsFavorite(index !== -1);
  }, [pokemonDetails]);

  const handleToggleFavorite = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const index = storedFavorites.findIndex((favorite) => favorite.name === pokemonDetails?.name);

    if (index === -1) {
      const newFavorite = {
        name: pokemonDetails.name,
        sprites: pokemonDetails.sprites,
        types: pokemonDetails.types,
        height: pokemonDetails.height,
        weight: pokemonDetails.weight,
      };
      storedFavorites.push(newFavorite);
      localStorage.setItem('favorites', JSON.stringify(storedFavorites));
      setIsFavorite(true);
    } else {
      storedFavorites.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(storedFavorites));
      setIsFavorite(false);
    }
  };

  if (!pokemonDetails) {
    return <Loading />;
  }

  const {
    name, sprites, types, height, weight,
  } = pokemonDetails;
  const typeText = types.length === 1 ? 'Tipo:' : 'Tipos:';
  const typeNames = types.map((type) => type.type.name).join(', ');

  return (
    <div className="bg-gray-300 relative h-full w-9/12 flex-1 p-4 rounded-lg shadow-md hover:shadow-indigo-500 hover:scale-">
      <button
        onClick={handleToggleFavorite}
        type="button"
        className="text-red-500 text-xl top-4 right-4 absolute   hover:text-red-700 "
      >
        {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
      </button>
      <b>{name}</b>
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

PokemonCards.propTypes = {
  url: PropTypes.string.isRequired,
};

export default PokemonCards;

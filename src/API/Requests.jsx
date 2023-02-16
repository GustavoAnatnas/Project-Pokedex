import axios from 'axios';

const allPokemons = 'https://pokeapi.co/api/v2/pokemon';

export default async function requestAllPokemons() {
  const response = await axios.get(allPokemons);
  return response.data;
}

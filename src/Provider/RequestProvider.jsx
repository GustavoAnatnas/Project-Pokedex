// import React, { useEffect, useMemo, useState } from 'react';
// import propTypes from 'prop-types';
// import axios from 'axios';
// import RequestContext from '../Context/RequestContext';

// function RequestProvider({ children }) {
//   const [pokemons, setPokemons] = useState([]);

//   useEffect(() => {
//     const allPokemons = 'https://pokeapi.co/api/v2/pokemon';

//     async function requestAllPokemons() {
//       const response = await axios.get(allPokemons);
//       console.log(response.data);
//       return response.data;
//     }
//     setPokemons(requestAllPokemons);
//   }, []);

//   const value = useMemo(() => ({
//     pokemons,
//     setPokemons,
//   }), [pokemons]);

//   return (
//     <RequestContext.Provider value={value}>
//       {children}
//     </RequestContext.Provider>
//   );
// }

// RequestProvider.propTypes = {
//   children: propTypes.node.isRequired,
// };

// export default RequestProvider;

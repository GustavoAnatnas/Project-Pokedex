import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="bg-black text-green-400">
      <Link to="/"> Pokémons </Link>
      <Link to="/Favorites"> Favoritos </Link>
    </div>
  );
}

export default Header;

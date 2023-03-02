import React from 'react';
import gifPikachu from '../Pikachu.gif';

function NotFound() {
  return (
    <body className="bg-gray-100 h-screen text-black text-4xl flex flex-col justify-center items-center
"
    >
      <img src={gifPikachu} alt="Pikachu acenando" />
      <br />
      <h1>404</h1>
      <h1>Página não encontrada!</h1>
    </body>
  );
}

export default NotFound;

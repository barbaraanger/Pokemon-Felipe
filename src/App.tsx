import "./App.css";
import { useState, useEffect } from "react";
//https://pokeapi.co/api/v2/

function App() {
  const [pokemonName, setPokemonName] = useState("");

  const handleChange = (e) => {
    setPokemonName(e.target.value);
  };

  return (
    <>
      <h1>Pokemon</h1>
      <input type="text" value={pokemonName} onChange={handleChange} />
      <button>OK</button>
    </>
  );
}

export default App;

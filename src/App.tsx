import "./App.css";
import { SetStateAction, useState } from "react";
//https://pokeapi.co/api/v2/

function App() {
  const [pokemonName, setPokemonName] = useState("");

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setPokemonName(e.target.value);
  };

 const procuraPokemon =
  return (
    <>
      <h1>Pokemon</h1>
      <input type="text" value={pokemonName} onChange={handleChange} />
      <button onClick={procuraPokemon}>OK</button>
    </>
  );
}

export default App;

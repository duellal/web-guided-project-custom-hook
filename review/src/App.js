import React, { useState, useEffect } from "react";
import "./styles.scss";

import PokeList from './components/pokeList'
import SelectedPoke from './components/selectedPokemon'
import { getPokemen, getPokemonData } from "./services/pokeServices";

const usePokeState = (initialPokemon, initialSelectedPokemon) => {
  const [pokemen, setPokemen] = useState(initialPokemon);
  const [selectedPokemon, setSelectedPokemon] = useState(initialSelectedPokemon);

  useEffect(() => {
    setPokemen(getPokemen());
  }, []);

  const handlePoke = (id) => {
    getPokemonData(id)
      .then((data) => {
        setSelectedPokemon(data);
      });
  }

  return ([selectedPokemon, handlePoke, pokemen])
}

function App() {
  const [selectedPokemon, handlePoke, pokemen] = usePokeState([], {})

  return (
    <div className="App">
      <SelectedPoke selectedPokemon={selectedPokemon} />
      <PokeList pokemen={pokemen} handlePoke={handlePoke} />
    </div>
  );
}

export default App;

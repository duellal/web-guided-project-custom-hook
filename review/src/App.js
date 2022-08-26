import React, { useState, useEffect } from "react";
import "./styles.scss";

import PokeList from './components/pokeList'
import SelectedPoke from './components/selectedPokemon'
import { getPokemen, getPokemonData } from "./services/pokeServices";

function App() {
  const [pokemen, setPokemen] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});

  useEffect(() => {
    setPokemen(getPokemen());
  }, []);

  const handlePoke = (id) => {
    getPokemonData(id)
      .then((data) => {
        setSelectedPokemon(data);
      });
  }

  return (
    <div className="App">
      <SelectedPoke selectedPokemon={selectedPokemon} />
      <PokeList pokemen={pokemen} handlePoke={handlePoke} />
    </div>
  );
}

export default App;

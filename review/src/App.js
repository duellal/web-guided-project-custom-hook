import React, { useState, useEffect } from "react";
import "./styles.scss";

//Components:
import PokeList from './components/pokeList'
import SelectedPoke from './components/selectedPokemon'

//Hook:
import usePokeState from './hooks/usePokeState.js'

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

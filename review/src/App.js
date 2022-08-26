import React, { useState, useEffect } from "react";
import "./styles.scss";
import axios from 'axios';
import data from "../data";

import PokeList from './components/pokeList'

function App() {
  const [pokemen, setPokemen] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});

  useEffect(() => {
    setPokemen(data);
  }, []);

  const handlePoke = (id) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => {
        setSelectedPokemon(res.data);
      });
  };

  return (
    <div className="App">
      <div id="selectedDiv">
        <h2>Selected Pokemon: {selectedPokemon.name || "none"}</h2>
        {selectedPokemon.name && (
          <div>
            <img
              src={selectedPokemon.sprites.front_default}
              alt={selectedPokemon.sprites.front_default}
            />
            <h5>Height: {selectedPokemon.height}</h5>
            <h5>Weight: {selectedPokemon.weight}</h5>
            <h5>Abilities:</h5>
            <ul>
              {selectedPokemon.abilities.map((a) => (
                <li key={a.ability.name}>
                  {a.ability.name} - Slot {a.slot}{" "}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <PokeList pokemen={pokemen} handlePoke={handlePoke} />
    </div>
  );
}

export default App;

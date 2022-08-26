import { useEffect, useState } from "react";
import { getPokemen, getPokemonData } from "../services/pokeServices";

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

export default usePokeState
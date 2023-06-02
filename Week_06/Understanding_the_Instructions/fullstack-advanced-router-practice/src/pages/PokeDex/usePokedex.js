import { useState, useEffect } from "react";

const usePokedex = () => {
  const [pokedexEntries, setPokedexEntries] = useState();
  const ORIGINAL_POKEMON_URL =
    "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";

  const fetchPokemon = () => {
    fetch(ORIGINAL_POKEMON_URL)
      .then((res) => res.json())
      .then((data) => setPokedexEntries(data.results));
  };

  useEffect(() => {
    fetchPokemon();
  }, []);
  return pokedexEntries;
};

export default usePokedex;

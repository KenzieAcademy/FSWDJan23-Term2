import { useState } from "react";

const usePokemonCard = () => {
  const [pokemon, setPokemon] = useState();

  const fetchPokemon = (pokemonName) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(formatResponse(data));
      });
  };

  const formatResponse = (apiResponse) => {
    return {
      dexNum: apiResponse.id,
      name: apiResponse.name.toUpperCase(),
      type1: apiResponse.types[0].type.name.toUpperCase(),
      type2: apiResponse.types[1]
        ? apiResponse.types[1].type.name.toUpperCase()
        : undefined,
      imgUrl: apiResponse.sprites.front_default,
    };
  };

  return { pokemon, fetchPokemon };
};

export default usePokemonCard;

import "./PokeDex.css";
import usePokedex from "./usePokedex";

const PokeDex = () => {
  /**
   * Custom hooks sure are magical, aren't they?
   */
  const pokedexEntries = usePokedex();

  return (
    <div className="pokedex">
      <div className="pokemon-list">
        <h2>Pokemon:</h2>
        <ul>
          {pokedexEntries &&
            pokedexEntries.map((pokemon, index) => {
              return <li key={index}>{pokemon.name.toUpperCase()}</li>;
            })}
        </ul>
      </div>
      <div className="selected-pokemon"></div>
    </div>
  );
};

export default PokeDex;

import Card from "react-bootstrap/Card";
import "./PokemonCard.css";
import usePokemonCard from "./usePokemonCard";

const UserCard = () => {
  const { pokemon, fetchPokemon } = usePokemonCard();

  if (!pokemon) return <span>Select a Pokemon to see more info.</span>;

  return (
    <Card className="pokemon-card">
      <Card.Header>
        {pokemon.name} - {pokemon.dexNum}
      </Card.Header>
      <Card.Body className="d-flex flex-column align-items-center">
        <img src={pokemon.imgUrl} alt={pokemon.name} />
        <div className="d-flex flex-row gap-2">
          <span>{pokemon.type1}</span>
          {pokemon.type2 && (
            <>
              {" | "}
              <span>{pokemon.type2}</span>
            </>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default UserCard;

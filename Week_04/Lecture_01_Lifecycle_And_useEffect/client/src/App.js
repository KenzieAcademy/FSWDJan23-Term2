import { useEffect, useState } from "react";
import "./App.css";
import PokeBall from "./PokeBall";

function App() {
  // When a React component renders, it does it synchronously
  const [pikachu, setPikachu] = useState();
  const [count, setCount] = useState(0);
  const [useThunderStone, setUseThunderStone] = useState(false);
  const [throwPokeball, setThrowPokeball] = useState(false);
  console.log("The component is in the process of rendering.");
  // But what if the thing we need to render comes from somewhere else
  // and more importantly, it takes ??? time to get it

  const catchPikachu = (e) => {
    /**
     * fetch is an promise function; it runs asynchronously
     * and calls an internal resolve function when it is done
     * and successful, and a reject function when it is not
     * successful for whatever reason determined internally
     */
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then((response) => response.json())
      .then((obj) => {
        console.log(
          "PREPARE FOR UPDATE: State is being changed; the component will update."
        );
        setPikachu(obj);
      })
      .catch((error) => console.log("It's ok, everyone makes mistakes!"));
  };

  /**
   * useEffect can be used to perform an action ONLY when the
   * component is first MOUNTED
   *
   * A component is MOUNTED if it was just rendered for the
   * first time
   */
  useEffect(() => {
    // catchPikachu();
  }, []); // an empty dependency array means the effect will only occur on mount

  useEffect(() => {
    if (throwPokeball) {
      setTimeout(() => {
        setThrowPokeball(false);
        catchPikachu();
      }, 3500);
    }
  }, [throwPokeball]);

  useEffect(() => {
    if (!pikachu) return;
  }, [pikachu]);

  useEffect(() => {
    if (!useThunderStone) return;

    evolvePikachu();
  }, [useThunderStone]);

  const evolvePikachu = () =>
    fetch("https://pokeapi.co/api/v2/pokemon/raichu")
      .then((res) => res.json())
      .then((raichu) => setPikachu(raichu));

  useEffect(() => {
    if (!pikachu) return;

    console.log(`${pikachu.name} appreciates the ${count}th like!`);
  }, [count]);

  const likePikachu = (e) => setCount(count + 1);

  const applyThunderStone = (e) => setUseThunderStone(true);

  if (!pikachu)
    return (
      <div>
        {throwPokeball && <PokeBall />}
        <p>Don't go into the tall grass without a Pokemon!</p>
        <button onClick={(e) => setThrowPokeball(true)}>Throw Pokeball</button>
      </div>
    );

  return (
    <div className="App">
      <h3>{pikachu.name}</h3>
      <p>{pikachu.types[0].type.name}</p>
      {pikachu.types[1] && <p>{pikachu.types[1].type.name}</p>}
      <p>Liked by {count} trainers</p>
      <button onClick={likePikachu}>Like</button>
      <button onClick={applyThunderStone}>Use a Thunder Stone</button>
    </div>
  );
}

export default App;

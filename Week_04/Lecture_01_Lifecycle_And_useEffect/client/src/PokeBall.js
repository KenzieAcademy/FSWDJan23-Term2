import { useEffect, useState } from "react";

const PokeBall = () => {
  const [shakeCount, setShakeCount] = useState(0);
  useEffect(() => {
    console.log("You throw the pokeball.");

    /**
     * In a useEffect with empty dependency array,
     * the returned function will be called when the
     * component is UNMOUNTED
     */
    return () => {
      console.log("You caught the pokemon!");
    };
  }, []);

  useEffect(() => {
    const shakeInterval = setInterval(() => {
      setShakeCount((count) => count + 1);
    }, 1000);
    console.log("the pokeball shakes");

    /**
     * A cleanup method in an updating useEffect
     * (the ones with populated dependency arrays)
     * will run before each UPDATE, and before
     * UNMOUNT
     */
    return () => {
      clearInterval(shakeInterval);
    };
  }, [shakeCount]);

  return (
    <div style={{ width: "200px", maxWidth: "200px" }}>
      <img
        style={{ maxWidth: "100%" }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/768px-Pok%C3%A9_Ball_icon.svg.png"
        alt="Pokeball"
      />
    </div>
  );
};

export default PokeBall;

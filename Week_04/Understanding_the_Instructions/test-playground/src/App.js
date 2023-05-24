import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [things, setThings] = useState({
    name: "hello",
    things: [],
  });

  const waitAndDo = () => {};
  const doTheRoar = (e) => {
    if (e.key === "r") {
      window.removeEventListener("keydown", doTheRoar);
      // window.removeEventListener("keydown", doTheRoar);

      setThings((state) => ({
        ...state,
        things: [...state.things, "ROAR!!!"],
      }));
    } else if (e.key === "q") {
      window.removeEventListener("keydown", doTheRoar);
      setThings((things) => ({ ...things, name: things.name + "!" }));
    }
  };

  const reattach = (e) => {
    if (e.key === "r" || e.key === "q") {
      window.addEventListener("keydown", doTheRoar);
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", reattach);
    window.addEventListener("keydown", doTheRoar);
  }, []);

  useEffect(() => {
    return () => window.removeEventListener("keydown", doTheRoar);
  }, [things]);

  return (
    <div className="App">
      <h2>{things.name}</h2>
      <ul>
        {things?.things?.map((thing) => (
          <li>{thing}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

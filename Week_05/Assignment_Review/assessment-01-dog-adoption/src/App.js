import "./App.css";
import { useEffect, useState } from "react";
const initialState = {
  dog: "",
  adopted: [],
};

const App = () => {
  const [state, setState] = useState(initialState);
  const API_URL = "https://dog.ceo/api/breeds/image/random";
  const [countdown, setCountdown] = useState();

  const fetchDogs = async (callback) => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        callback(data.message);
        setCountdown(5);
      })
      .catch((err) => console.log(err));
  };

  const putDogUpForAdoption = (imgSrc) => {
    setState((state) => ({ ...state, dog: imgSrc }));
  };

  const addDogToAdopted = (imgSrc) => {
    setState((state) => ({
      dog: imgSrc,
      adopted: [...state.adopted, state.dog],
    }));
  };

  const keyListener = (e) => {
    window.removeEventListener("keyup", keyListener);
    if (e.key === "ArrowLeft") {
      fetchDogs(putDogUpForAdoption);
      return;
    }
    if (e.key === "ArrowRight") {
      fetchDogs(addDogToAdopted);
      return;
    }
    window.addEventListener("keyup", keyListener);
  };

  useEffect(() => {
    fetchDogs(putDogUpForAdoption);
  }, []);

  useEffect(() => {
    window.addEventListener("keyup", keyListener);

    return () => window.removeEventListener("keyup", keyListener);
  }, [state]);

  useEffect(() => {
    if (countdown > 0) {
      const timeout = setTimeout(() => setCountdown((t) => t - 1), 1000);
      return () => clearTimeout(timeout);
    } else {
      fetchDogs(putDogUpForAdoption);
    }
  }, [countdown]);

  const Header = () => (
    <header>
      <h1>Doggie Speed Dating</h1>
      <h3>
        Press the arrow keys on your keyboard. Left to skip, Right to Adopt.
      </h3>
    </header>
  );

  if (!state.dog)
    return (
      <div className="App">
        <Header />
      </div>
    );

  return (
    <div className="App">
      <Header />
      <section>
        <h2>What a Pup</h2>
        <div className="adoptable">
          <img src={state.dog} alt="Dog for adoption" />
        </div>
        <p>Fetching a new dog in {countdown}</p>
      </section>
      <section>
        <h3>Your Dogs</h3>
        <div className="kennel">
          {state.adopted.map((dog, i) => (
            <div key={`dog_${i}`} className="dog">
              <img src={dog} alt={`Dog ${i}`} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;

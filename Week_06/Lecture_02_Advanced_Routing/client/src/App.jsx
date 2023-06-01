import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CharacterDetails, Header } from "./components";
import { Characters, HomePage } from "./pages";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

const CHARACTERS_URL = "https://swapi.dev/api/people";

function App() {
  const [people, setPeople] = useState([]);
  const [previous, setPrevious] = useState();
  const [next, setNext] = useState();

  function fetchPeople(url = CHARACTERS_URL) {
    setPeople([]);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPrevious(data.previous);
        setNext(data.next);
        setPeople(data.results);
      })
      .catch((error) => console.log(":( ", error));
  }

  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route
          path="people"
          element={
            <Characters
              next={next}
              previous={previous}
              people={people}
              fetchPeople={fetchPeople}
            />
          }
        >
          <Route
            path=":characterId"
            element={<CharacterDetails people={people} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;

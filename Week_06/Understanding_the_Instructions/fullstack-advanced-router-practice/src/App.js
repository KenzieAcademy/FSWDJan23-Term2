import { Route, Routes } from "react-router-dom";
import { Home, PokeDex } from "./pages";
import { Navigation } from "./components";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="pokedex" element={<PokeDex />}>
          {/*  */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;

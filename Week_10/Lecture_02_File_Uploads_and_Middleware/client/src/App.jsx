import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import { CreateShip } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="ships/create" element={<CreateShip />} />
      </Routes>
    </>
  );
}

export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  CreatePiratePage,
  Dashboard,
  PirateDetails,
  UpdatePiratePage,
} from "./pages";
import { Header } from "./components";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="pirates" element={<Dashboard />} />
        <Route path="pirates/:id" element={<PirateDetails />} />
        <Route path="pirates/create" element={<CreatePiratePage />} />
        <Route path="pirates/:id/edit" element={<UpdatePiratePage />} />
      </Routes>
    </>
  );
}

export default App;

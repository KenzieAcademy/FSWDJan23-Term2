import "./App.css";
import { Route, Routes } from "react-router-dom";
import { CreatePiratePage, UpdatePiratePage } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="pirates/create" element={<CreatePiratePage />} />
        <Route path="pirates/:id/update" element={<UpdatePiratePage />} />
      </Routes>
    </>
  );
}

export default App;

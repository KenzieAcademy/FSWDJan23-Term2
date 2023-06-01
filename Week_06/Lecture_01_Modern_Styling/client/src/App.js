import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CSSModules, HomePage, MediaQueries, ReactBootstrap } from "./pages";
import { Header } from "./components";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="mediaqueries" element={<MediaQueries />} />
        <Route path="bootstrap" element={<ReactBootstrap />} />
        <Route path="cssmodules" element={<CSSModules />} />
      </Routes>
    </>
  );
}

export default App;

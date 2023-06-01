import { Route, Routes } from "react-router-dom";
import "./App.css";
import { TeamRoster, TeamStats, TopNav } from "./components";
import { AllTeamsPage, HomePage, TeamDetailsPage } from "./pages";

function App() {
  return (
    <>
      <TopNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teams" element={<AllTeamsPage />} />
        <Route path="/teams/:id" element={<TeamDetailsPage />}>
          <Route path="roster" element={<TeamRoster />} />
          <Route path="stats" element={<TeamStats />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

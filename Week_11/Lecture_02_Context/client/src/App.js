import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header, UserProfile } from "./components";
import { HomePage, Dashboard, LoginPage, DataAnalytics } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="" element={<DataAnalytics />} />
          <Route path=":userid" element={<UserProfile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

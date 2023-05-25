import { useState } from "react";
import "./App.css";
import { Navigation } from "./components";
import { Routes, Route } from "react-router-dom";
import { Dashboard, HomePage, LoginPage } from "./pages";

const authState = {
  isAuthenticated: false,
  userEmail: "",
};

function App() {
  const [authUser, setAuthUser] = useState(authState);

  const authenticateUser = (userEmail) =>
    setAuthUser({ isAuthenticated: true, userEmail });

  const singoutUser = () => setAuthUser(authState);

  return (
    <>
      <Navigation logOut={singoutUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard authUser={authUser} />} />
        <Route
          path="/login"
          element={<LoginPage handleAuth={authenticateUser} />}
        />
      </Routes>
    </>
  );
}

export default App;

import { Header } from "./components";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import PreferencesPage from "./pages/PreferencesPage";
import useAuth from "./hooks/useAuth";
import { useEffect } from "react";
import SigninPage from "./pages/SigninPage";
import { Container } from "react-bootstrap";
import ProtectedPage from "./pages/ProtectedPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const { isLoading, refreshAccess } = useAuth();

  useEffect(() => {
    refreshAccess();
  }, []);

  if (isLoading)
    return (
      <>
        <Header />
        <Container>
          <p>Loading...</p>
        </Container>
      </>
    );

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="protected"
          element={
            <ProtectedRoute role={3}>
              <ProtectedPage />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<SigninPage />} />
        <Route path="preferences" element={<PreferencesPage />} />
      </Routes>
    </>
  );
}

export default App;

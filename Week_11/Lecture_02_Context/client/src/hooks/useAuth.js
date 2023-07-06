import { useContext } from "react";
import { authContext } from "../contexts/authContext";

const useAuth = () => {
  const { auth, dispatch } = useContext(authContext);

  const signIn = (username, password) => {
    // pretend we're validating the username and password
    // pretend we're sending an api call to sign in
    dispatch({ name: "SIGN_IN", payload: username });
  };

  const signOut = () => dispatch({ name: "SIGN_OUT" });

  return {
    username: auth.username,
    isAuthenticated: auth.isAuthenticated,
    signIn,
    signOut,
  };
};

export default useAuth;

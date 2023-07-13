import { useContext } from "react";
import authContext, { SIGN_IN, SIGN_OUT } from "../contexts/authContext";
import api, { setAuthHeaders } from "../util/api.utils";

const useAuth = () => {
  const { state, dispatch } = useContext(authContext);

  const signUp = async (username, password, confirmPassword) => {
    await api.post("/auth/signup", {
      username,
      password,
      confirmPassword,
    });
    await signIn(username, password);
  };

  const signIn = async (username, password) => {
    const response = await api.post("/auth/signin", { username, password });

    dispatch({ type: SIGN_IN, user: response.user });
    setAuthHeaders(response.token);
  };

  const refreshAccess = async () => {
    try {
      const response = await api.get("/auth/refresh");
      if (!state.isAuthorized) dispatch({ type: SIGN_IN, user: response.user });
      setAuthHeaders(response.token);
    } catch (error) {
      return;
    }
  };

  const signOut = () => {
    dispatch({ type: SIGN_OUT });
    setAuthHeaders();
  };

  const isAuthorized = (role = 3) => state.user && state.user.role <= role;

  return {
    isLoading: state.isLoading,
    user: state.user,
    isAuthorized,
    refreshAccess,
    signIn,
    signOut,
    signUp,
  };
};

export default useAuth;

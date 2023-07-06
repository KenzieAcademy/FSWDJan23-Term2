import { createContext, useReducer } from "react";

/**
 * STEP 1: Create (and export) your context
 */
export const authContext = createContext();

const initialAuth = {
  isAuthenticated: false,
  username: null,
};

const reducer = (state, action) => {
  const newAuth = structuredClone(state);

  switch (action.name) {
    case "SIGN_IN": {
      newAuth.isAuthenticated = true;
      newAuth.username = action.payload;
      return newAuth;
    }
    case "SIGN_OUT": {
      newAuth.isAuthenticated = false;
      newAuth.username = null;
      return newAuth;
    }
    default:
      return newAuth;
  }
};

/**
 * STEP 2: Create (and export) your context Provider
 */
const AuthProvider = ({ children }) => {
  const [auth, dispatch] = useReducer(reducer, initialAuth);

  return (
    <authContext.Provider value={{ auth, dispatch }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;

const { createContext, useReducer } = require("react");

export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

const authContext = createContext();
export default authContext;

const initialState = {
  isLoading: true,
  isAuthorized: false,
  user: null,
};

const reducer = (state, action) => {
  const newState = structuredClone(state);

  switch (action.type) {
    case SIGN_IN: {
      newState.isAuthorized = true;
      newState.user = action.user;
      newState.isLoading = false;
      return newState;
    }
    case SIGN_OUT: {
      newState.isAuthorized = false;
      newState.user = null;
      newState.isLoading = false;
      return newState;
    }
    default: {
      return state;
    }
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <authContext.Provider value={{ state, dispatch }}>
      {children}
    </authContext.Provider>
  );
};

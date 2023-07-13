import { createContext, useEffect, useReducer } from "react";

/**
 * Actions
 */
export const SET_THEME_PREFS = "SET_THEME_PREFS";
export const TOGGLE_THEME = "TOGGLE_THEME";
export const SET_THEME_DARK = "SET_THEME_DARK";
export const SET_THEME_LIGHT = "SET_THEME_LIGHT";
export const SET_FONT_SIZE = "SET_FONT_SIZE";
export const INCREASE_FONT_SIZE = "INCREASE_FONT_SIZE";
export const DECREASE_FONT_SIZE = "DECREASE_FONT_SIZE";

const themeContext = createContext();
export default themeContext;

const initialState = {
  theme: "light",
  fontSize: 1,
};

const reducer = (state, action) => {
  const newState = structuredClone(state);

  switch (action.type) {
    case SET_THEME_PREFS: {
      newState.theme = action.theme;
      newState.fontSize = action.fontSize;
      return newState;
    }
    case SET_THEME_DARK: {
      newState.theme = "dark";
      return newState;
    }
    case SET_THEME_LIGHT: {
      newState.theme = "light";
      return newState;
    }
    case TOGGLE_THEME: {
      newState.theme = newState.theme === "light" ? "dark" : "light";
      return newState;
    }
    case SET_FONT_SIZE: {
      newState.fontSize = action.fontSize;
      return newState;
    }
    case INCREASE_FONT_SIZE: {
      newState.fontSize += 0.1;
      return newState;
    }
    case DECREASE_FONT_SIZE: {
      newState.fontSize -= 0.1;
      return newState;
    }
    default: {
      return state;
    }
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const areStatesEqual = () => {
    const savedState = JSON.parse(localStorage.getItem("theme-prefs")) || false;
    if (!savedState) return false;

    return (
      savedState.theme === state.theme && savedState.fontSize === state.fontSize
    );
  };

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem("theme-prefs")) || false;
    if (!savedState) {
      localStorage.setItem("theme-prefs", JSON.stringify(state));
    } else {
      dispatch({
        type: SET_THEME_PREFS,
        theme: savedState.theme,
        fontSize: savedState.fontSize,
      });
    }
  }, []);

  useEffect(() => {
    if (!areStatesEqual()) {
      localStorage.setItem("theme-prefs", JSON.stringify(state));
    }
  }, [state]);

  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {children}
    </themeContext.Provider>
  );
};

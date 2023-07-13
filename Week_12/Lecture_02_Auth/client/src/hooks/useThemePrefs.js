import { useContext } from "react";
import themeContext, {
  DECREASE_FONT_SIZE,
  INCREASE_FONT_SIZE,
  SET_FONT_SIZE,
  SET_THEME_DARK,
  SET_THEME_LIGHT,
  SET_THEME_PREFS,
  TOGGLE_THEME,
} from "../contexts/themeContext";

const useThemePrefs = () => {
  const { state, dispatch } = useContext(themeContext);

  const toggleTheme = () => dispatch({ type: TOGGLE_THEME });
  const setThemeLight = () => dispatch({ type: SET_THEME_LIGHT });
  const setThemeDark = () => dispatch({ type: SET_THEME_DARK });
  const setThemePrefs = (theme, fontSize) =>
    dispatch({ type: SET_THEME_PREFS, theme, fontSize });
  const setFontSize = (fontSize) => dispatch({ type: SET_FONT_SIZE, fontSize });
  const increaseFontSize = () => dispatch({ type: INCREASE_FONT_SIZE });
  const decreaseFontSize = () => dispatch({ type: DECREASE_FONT_SIZE });

  return {
    ...state,
    toggleTheme,
    setThemeDark,
    setThemeLight,
    setThemePrefs,
    setFontSize,
    increaseFontSize,
    decreaseFontSize,
  };
};

export default useThemePrefs;

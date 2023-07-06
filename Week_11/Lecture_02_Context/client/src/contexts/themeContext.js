import { useState, createContext } from "react";

/**
 * STEP 1: Create a Context
 */
export const themeContext = createContext();

/**
 * STEP 2: Create the context Provider
 */
const ThemeProvider = ({ children }) => {
  /**
   * Step 2a. Define any state/functions/etc. that you would want
   * to be shared
   */
  const [theme, setTheme] = useState("light");
  const toggleTheme = (e) => setTheme(theme === "light" ? "dark" : "light");

  return (
    /**
     * Step 2b. The provider component returns a Provider built off the
     * context created in step 1
     *
     * Step 2c. The provider should have a prop called `value`. The value
     * the `value` prop should contain all of the information that you wish
     * to share (if just a single value, for example, `value={someValue}`).
     */
    <themeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`body-bg-${theme}`}>{children}</div>
    </themeContext.Provider>
  );
};

export default ThemeProvider;

import { useState } from "react";

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const toggleState = (setValue) =>
    setState((s) => (setValue ? setValue : s ? !s : s));

  return [state, toggleState];
};

export default useToggle;

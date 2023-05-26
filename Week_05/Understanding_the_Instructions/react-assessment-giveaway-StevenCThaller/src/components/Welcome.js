import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [state, setState] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      <h1>why must you leave me dom? i thought we were family</h1>
      <input
        type="text"
        name="blank"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />

      <button onClick={() => navigate("/other", { state })}>Uhh?</button>
    </div>
  );
};

export default Welcome;

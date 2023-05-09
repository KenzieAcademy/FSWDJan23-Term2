import { useState } from "react";
import { forwardLines } from "../data";

const RenderingData = () => {
  const [forwards, setForwards] = useState(forwardLines);
  return <div>RenderingData</div>;
};

export default RenderingData;

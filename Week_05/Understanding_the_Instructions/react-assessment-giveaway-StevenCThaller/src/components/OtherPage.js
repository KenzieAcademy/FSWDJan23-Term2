import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OtherPage = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h2>Other Page</h2>
    </div>
  );
};

export default OtherPage;

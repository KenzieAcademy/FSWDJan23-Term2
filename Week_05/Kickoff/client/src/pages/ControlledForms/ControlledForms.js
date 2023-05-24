import React from "react";
import { Form } from "../../components";

const ControlledForms = () => {
  return (
    <div>
      <h2>Form time!</h2>
      <Form defaultSubscribe={true} />
    </div>
  );
};

export default ControlledForms;

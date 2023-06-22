import { Container } from "react-bootstrap";
import PirateForm from "../../components/PirateForm/PirateForm";
import { createPirate } from "../../utils/api.utils";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreatePiratePage = () => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (
    name,
    nickName,
    rank,
    numberOfParrots,
    hasPegLeg,
    catchPhrase
  ) => {
    setErrors({});

    createPirate(name, nickName, rank, numberOfParrots, hasPegLeg, catchPhrase)
      .then((response) => {
        toast.success(
          `Successfully created ${
            response.nickName !== "N/A" ? response.nickName : response.name
          }`
        );
        navigate("/pirates");
      })
      .catch((error) => {
        console.log(error);
        if (error.errors) setErrors(error.errors);
      });
  };

  return (
    <Container>
      <PirateForm
        title="Y'arr, Create yer pirate!"
        onSubmit={handleSubmit}
        errors={errors}
      />
    </Container>
  );
};

export default CreatePiratePage;

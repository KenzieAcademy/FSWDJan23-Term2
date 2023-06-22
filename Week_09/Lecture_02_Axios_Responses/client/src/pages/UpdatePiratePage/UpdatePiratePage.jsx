import { Container } from "react-bootstrap";
import PirateForm from "../../components/PirateForm/PirateForm";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPirateById, updatePirate } from "../../utils/api.utils";
import { toast } from "react-toastify";

const UpdatePiratePage = () => {
  const [pirate, setPirate] = useState();
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPirateById(id).then((response) => setPirate(response));
  }, [id]);

  const handleSubmit = (
    name,
    nickName,
    rank,
    numberOfParrots,
    hasPegLeg,
    catchPhrase
  ) => {
    setErrors({});
    updatePirate(
      id,
      name,
      nickName,
      rank,
      numberOfParrots,
      hasPegLeg,
      catchPhrase
    )
      .then(() => {
        toast.success(
          `Successfully updated ${
            pirate.nickName !== "N/A" ? pirate.nickName : pirate.name
          }`
        );
        navigate(`/pirates/${pirate._id}`);
      })
      .catch((error) => {
        if (error.message === "Invalid submission") setErrors(error.errors);
      });
  };

  if (!pirate)
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    );

  return (
    <Container>
      <PirateForm
        title="Update ye pirate"
        onSubmit={handleSubmit}
        pirate={pirate}
        errors={errors}
      />
    </Container>
  );
};

export default UpdatePiratePage;

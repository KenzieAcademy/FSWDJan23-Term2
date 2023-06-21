import { Container } from "react-bootstrap";
import PirateForm from "../../components/PirateForm/PirateForm";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPirateById, updatePirate } from "../../utils/api.utils";

const UpdatePiratePage = () => {
  const [pirate, setPirate] = useState();
  const { id } = useParams();

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
  ) =>
    updatePirate(
      id,
      name,
      nickName,
      rank,
      numberOfParrots,
      hasPegLeg,
      catchPhrase
    )
      .then(() => alert("Succesfully updated " + nickName + " the pirate."))
      .catch((error) => console.log(error));

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
      />
    </Container>
  );
};

export default UpdatePiratePage;

import { Container } from "react-bootstrap";
import PirateForm from "../../components/PirateForm/PirateForm";
import { createPirate } from "../../utils/api.utils";

const CreatePiratePage = () => {
  const handleSubmit = (
    name,
    nickName,
    rank,
    numberOfParrots,
    hasPegLeg,
    catchPhrase
  ) =>
    createPirate(name, nickName, rank, numberOfParrots, hasPegLeg, catchPhrase)
      .then(() => alert("Succesfully created " + nickName + " the pirate."))
      .catch((error) => console.log(error));

  return (
    <Container>
      <PirateForm title="Y'arr, Create yer pirate!" onSubmit={handleSubmit} />
    </Container>
  );
};

export default CreatePiratePage;

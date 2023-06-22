import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { useParams } from "react-router-dom";
import usePiratesAPI from "../../hooks/usePiratesAPI";

/* eslint-disable react/prop-types */
const PirateDetails = () => {
  const [pirate, setPirate] = useState();
  const { id } = useParams();
  const { fetchPirateById } = usePiratesAPI();

  useEffect(() => {
    fetchPirateById(id)
      .then((response) => setPirate(response))
      .catch(() => setPirate(false));
  }, [id]);

  if (pirate == null)
    return (
      <Container>
        <LoadingSpinner />
      </Container>
    );

  if (pirate === false)
    return (
      <Container>
        <h1>404: Pirate walked the plank</h1>
      </Container>
    );

  const pirateHasNickName = pirate.nickName !== "N/A";
  const displayName = pirateHasNickName ? pirate.nickName : pirate.name;
  let parrotInfo = "";
  if (pirate.nickName !== "N/A") parrotInfo += pirate.nickName;
  else parrotInfo += pirate.name;
  parrotInfo += ` has ${pirate.numberOfParrots} parrot`;
  if (pirate.numberOfParrots !== 1) parrotInfo += "s";

  return (
    <Container>
      <h1>{displayName}</h1>
      {pirateHasNickName && <p>Given Name: {pirate.name}</p>}
      <h3>Additional Info</h3>
      <ul>
        <li>{parrotInfo}</li>
        <li>
          {displayName}{" "}
          {pirate.hasPegLeg ? "has a peg leg" : "does not have a peg leg"}
        </li>
      </ul>
    </Container>
  );
};

export default PirateDetails;

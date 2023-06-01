/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Card, CloseButton, Placeholder } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./CharacterDetails.css";

const PERSON_URL_PREFIX = "https://swapi.dev/api/people/";

const CharacterDetails = ({ people }) => {
  const [person, setPerson] = useState();
  const { characterId } = useParams();
  const navigate = useNavigate();

  function fetchPerson(id) {
    fetch(PERSON_URL_PREFIX + id)
      .then((res) => res.json())
      .then((data) => {
        if (data.detail && data.detail === "Not found") {
          toast.error("Resource could not be found.");
          navigate("/people");
        } else {
          setPerson(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    const personFromProps = people.find(
      (person) => person.url.split("/").slice(-2)[0] === characterId
    );
    if (personFromProps) {
      setPerson(personFromProps);
    } else {
      fetchPerson(characterId);
    }
  }, [characterId]);

  if (!person)
    return (
      <Card>
        <Card.Header>
          <CloseButton
            className="card-close"
            onClick={() => navigate("/people")}
          />
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
        </Card.Header>
        <Card.Body>
          <Placeholder as="ul" animation="glow">
            <li>
              <Placeholder xs={4} />
            </li>
            <li>
              <Placeholder xs={7} />
            </li>
            <li>
              <Placeholder xs={5} />
            </li>
            <li>
              <Placeholder xs={4} />
            </li>
            <li>
              <Placeholder xs={3} />
            </li>
          </Placeholder>
        </Card.Body>
      </Card>
    );

  return (
    <Card>
      <CloseButton className="card-close" onClick={() => navigate("/people")} />
      <Card.Header>
        <Card.Title>{person.name}</Card.Title>
      </Card.Header>
      <Card.Body>
        <ul>
          <li>Birth Year: {person.birth_year}</li>
          <li>Number of Films: {person.films.length}</li>
          <li>Height: {person.height}cm</li>
          <li>Hair Color: {person.hair_color}</li>
          <li>Eye Color: {person.eye_color}</li>
        </ul>
      </Card.Body>
    </Card>
  );
};

export default CharacterDetails;

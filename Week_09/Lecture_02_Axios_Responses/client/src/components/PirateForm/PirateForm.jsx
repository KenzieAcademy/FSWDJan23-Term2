/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const initialState = {
  name: "",
  nickName: "",
  rank: "Deck Hand",
  numberOfParrots: "",
  hasPegLeg: false,
  catchPhrase: "",
};

const PirateForm = ({ title, onSubmit, pirate, errors }) => {
  const [formData, setFormData] = useState(pirate || initialState);
  const handleSubmit = (e) => {
    e.preventDefault();

    return onSubmit(
      formData.name,
      formData.nickName,
      formData.rank,
      formData.numberOfParrots,
      formData.hasPegLeg,
      formData.catchPhrase
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>{title}</h3>
      <Form.Group className="mb-2">
        <Form.Label htmlFor="name">Name:</Form.Label>
        <Form.Control
          autoComplete="off"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          isInvalid={errors.name}
        />
        <Form.Control.Feedback type="invalid">
          {errors.name}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label htmlFor="nickName">Nickname:</Form.Label>
        <Form.Control
          autoComplete="off"
          type="text"
          id="nickName"
          name="nickName"
          value={formData.nickName}
          onChange={handleInputChange}
          isInvalid={errors.nickName}
        />
        <Form.Control.Feedback type="invalid">
          {errors.nickName}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label htmlFor="rank">Rank:</Form.Label>
        <Form.Select
          id="rank"
          name="rank"
          value={formData.rank}
          onChange={handleInputChange}
          isInvalid={errors.rank}
        >
          <option>Captain</option>
          <option>First Mate</option>
          <option>Deck Hand</option>
          <option>Yarr</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.rank}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label htmlFor="numberOfParrots">Parrots:</Form.Label>
        <Form.Control
          autoComplete="off"
          type="number"
          id="numberOfParrots"
          name="numberOfParrots"
          value={formData.numberOfParrots}
          onChange={handleInputChange}
          isInvalid={errors.numberOfParrots}
        />
        <Form.Control.Feedback type="invalid">
          {errors.numberOfParrots}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label htmlFor="hasPegLeg">Peg Leg</Form.Label>
        <Form.Check
          id="hasPegLeg"
          name="hasPegLeg"
          checked={formData.hasPegLeg}
          onChange={handleCheckboxChange}
          isInvalid={errors.hasPegLeg}
        />
        <Form.Control.Feedback type="invalid">
          {errors.hasPegLeg}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label htmlFor="catchPhrase">Catch Phrase:</Form.Label>
        <Form.Control
          autoComplete="off"
          type="text"
          id="catchPhrase"
          name="catchPhrase"
          value={formData.catchPhrase}
          onChange={handleInputChange}
          isInvalid={errors.catchPhrase}
        />
        <Form.Control.Feedback type="invalid">
          {errors.hasPegLeg}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Button type="submit" variant="primary" size="sm">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};

export default PirateForm;

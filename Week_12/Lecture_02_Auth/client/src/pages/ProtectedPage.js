import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import api from "../util/api.utils";
import { toast } from "react-toastify";

const ProtectedPage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    api
      .get("/protected")
      .then((response) => setData(response))
      .catch((err) => {
        console.log(err);
        toast.error("Oh no");
      });
  }, []);

  if (!data)
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    );

  return <Container>{JSON.stringify(data)}</Container>;
};

export default ProtectedPage;

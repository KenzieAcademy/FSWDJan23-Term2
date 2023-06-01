import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container className="pt-3">
      <h1 className="title">Welcome to KenzHL Central!</h1>
      <Row className="mt-5">
        <Col as="section" xs={12} md={6} lg={4}>
          <h3>Week 6 Kickoff</h3>
          <p>
            This week is all about stepping up our game so that we're adhering
            to more modern application design standards! From responsive styling
            to dynamic route parameters, this week will really see you
            robust-ifying your skillset
          </p>
        </Col>
        <Col as="section" xs={12} md={6} lg={4}>
          <h3>Responsive Styling</h3>
          <p>
            Responsive styling is the name of the game these days with regards
            to UI/UX design. Not everyone is using a big boxy monitor of the
            same size. Heck, Cody has three monitors of two different sizes!
          </p>
          <p>
            Desktops, laptops, tablets, and mobile devices are all bonfied
            methods of access web applications, so why limit your application to
            any one device? I'm not saying you should be building 4 different
            applications, but we can at least use something like{" "}
            <code>Bootstrap</code> to make things more responsive.
          </p>
        </Col>
        <Col as="section" xs={12} md={6} lg={4}>
          <h3>Advanced Routing</h3>
          <p>
            Last week you saw the introduction of <code>react-router-dom</code>,
            which enables us to use routes within our application (i.e. one URL
            will render one component, while a different URL will render
            another).
          </p>
          <p>
            But you've probably seen URL's out there looking like a cryptographs
            daydream: <code>/something/ab2323c998e73f32e5590ccdb22b3</code>
          </p>
          <p>
            With <code>react-router-dom</code>, we can not only utilize dynamic
            portions within our routes (called route parameters), but we can
            also nest routes within other routes!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;

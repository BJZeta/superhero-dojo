import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const HomePage = () => {
  return (
    <Container className="justify-content-center landingscreen">
      <Row className="justify-content-center">
        <h1 className="animate__animated animate__heartBeat animate__infinite animate__slower">
          Hero DOJO
        </h1>
      </Row>
      <Row className="justify-content-center mt-5">
        <h4>
          Test the MIGHT of your favorite heroes and villains
        </h4>
      </Row>
      <Row className="justify-content-center mt-5">
      <LinkContainer to="/search">
            <Button variant="secondary">
              <i className="fas fa-fist-raised" /> Enter the DOJO
            </Button>
          </LinkContainer>
      </Row>
    </Container>
  );
};

export default HomePage;

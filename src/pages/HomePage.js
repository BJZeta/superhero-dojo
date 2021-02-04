import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import BackgroundSlider from "react-background-slider";
import { LinkContainer } from "react-router-bootstrap";

const HomePage = () => {
  return (
    <Container className="justify-content-center text-align-center black-text">
      <BackgroundSlider
        images={["./images/avengers-xmen.jpeg", "./images/jla.jpg"]}
        duration={4}
        transition={1}
      />
      <Row>
        <h1>Welcome to the</h1>
      </Row>
      <Row>
        <h1>HERO DOJO</h1>
      </Row>
      <Row>
        <Col>
          <LinkContainer to="/search">
            <Button variant="primary">
              <i className="fas fa-search" /> Character Search
            </Button>
          </LinkContainer>
        </Col>
        <Col>
          <LinkContainer to="/dojo">
            <Button variant="secondary">
              <i className="fas fa-fist-raised" /> LET THEM FIGHT!
            </Button>
          </LinkContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;

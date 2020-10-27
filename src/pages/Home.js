import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="my-auto text-center">
            <h2 className="text-center">Welcome to the</h2>
          </Row>
          <Row>
            <h1>Superhero DOJO</h1>
          </Row>
          <Row>
            <h3>Select an Option</h3>
          </Row>
          <Row>
            <Col>
              <Button>Search Character</Button>
            </Col>
            <Col>
              <Button>Setup Fight</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

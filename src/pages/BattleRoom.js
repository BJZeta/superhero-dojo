import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

export default class BattleRoom extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="my-auto text-center">
            <h2 className="text-center">Welcome to the</h2>
          </Row>
          <Row>
            <h1>Battle Room</h1>
          </Row>
        </Container>
      </div>
    );
  }
}
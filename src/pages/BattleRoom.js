import React, { Component } from "react";
import { Card, Button, Image, Container, Row, Col } from "react-bootstrap";

///////DATA is FINALLY passing thru, now see if you can update fighters array w/o overwriting original data inside

export default class BattleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fighters: [],
    };
  }

  componentDidMount() {
    if (this.props.location.state) {
      localStorage.setItem(
        this.props.location.state.name,
        JSON.stringify(this.props.location.state.fighter)
      );

      this.updateFighters();
    }
  }

  updateFighters() {
    for (let i = 0; i < localStorage.length; i++) {
      const newFighter = JSON.parse(localStorage.getItem(localStorage.key(i)));

      this.setState((state) => {
        const fighters = state.fighters.concat(newFighter);

        return {
          fighters,
        };
      });
    }
  }

  render() {
    const fighters = this.state.fighters;

    return (
      <Container>
        {fighters[1] ? (
          <>
            <Row>
              {this.state.fighters.map((fighter, key) => {
                return (
                  <Col key={key} className="ml-4">
                    <Card style={{ width: "10rem", justifyContent: "center" }}>
                      <Card.Img
                        variant="bottom"
                        src={fighter.img}
                        style={{ maxHeight: "12rem" }}
                      />
                      <Card.Body className="text-center">
                        <Card.Title>{fighter.name}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
            <Row className="justify-content-center mt-5 mr-1">
              <Button>FIGHT!</Button>
            </Row>
          </>
        ) : (
          <Row className="justify-content-center">
            <Col className="text-center">
              <Image
                src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
                height="500"
              />
              <h2>Need 2 fighters to get started</h2>
            </Col>
          </Row>
        )}
      </Container>
    );
  }
}

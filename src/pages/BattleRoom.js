import React, { Component } from "react";
import { Card, Button, Image } from "react-bootstrap";

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
      <div>
        {fighters[0] ? (
          <Card style={{ width: "10rem" }}>
            <Card.Img
              variant="bottom"
              src={this.state.img}
              style={{ maxHeight: "12rem" }}
            />
            <Card.Body className="text-center">
              <Card.Title>{this.state.name}</Card.Title>
              <Button variant="primary" style={{ padding: "4px" }}>
                Check Stats
              </Button>
            </Card.Body>
          </Card>
        ) : (
          <div>
            <Image
              src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
              height="500"
            />
            <h2>Need a fighter to get started</h2>
          </div>
        )}
      </div>
    );
  }
}

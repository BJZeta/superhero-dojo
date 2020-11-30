import React, { Component } from "react";
import { Image, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      character: {},
      characterStats: {},
    };
  }

  componentDidMount() {
    const { key } = this.props.match.params;

    fetch(`https://www.superheroapi.com/api.php/3619192178108339/${key}`)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            character: result,
            characterStats: {
              name: result.name,
              strength: result.powerstats.strength,
            },
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   <Link
  //     to={{
  //       pathname: "/battle-room",
  //       state: {
  //         character: this.state.character,
  //       },
  //     }}
  //   />;
  // }

  render() {
    const character = this.state.character;

    return this.state.isLoaded ? (
      <Container className="mx-2 mb-4">
        <Row className="justify-content-center mt-2">
          <Col className="text-center">
            <Image src={character.image.url} height="200" />
            <p>{character.biography["first-appearance"]}</p>
          </Col>
          <Col className="text-center">
            <div>
              <h1>{character.name}</h1>
              <h2>{character.biography["first-appearance"]}</h2>
              <h4 className="text-muted">
                {character.biography.publisher !== "null"
                  ? character.biography.publisher
                  : ""}
              </h4>
              <br />
              <h4>
                Alignment:{" "}
                <span className="text-capitalize">
                  {character.biography.alignment}
                </span>
              </h4>
            </div>
          </Col>
        </Row>
        <Row className="mt-3 justify-content-center">
          <h2>Character Info</h2>
        </Row>
        <Row>
          <Col className="text-center">
            <h2>Power Stats</h2>
            <ul style={{ listStyle: "none", font: "24px", padding: "0" }}>
              <li>Strength: {character.powerstats.strength}</li>
              <li>
                Intelligence:{" "}
                {character.powerstats.intelligence === "null"
                  ? "N/A"
                  : character.powerstats.intelligence}
              </li>
              <li>
                Speed:{" "}
                {character.powerstats.speed === "null"
                  ? "N/A"
                  : character.powerstats.speed}
              </li>
              <li>
                Durability:{" "}
                {character.powerstats.durability === "null"
                  ? "N/A"
                  : character.powerstats.durability}
              </li>
              <li>
                Power:{" "}
                {character.powerstats.power === "null"
                  ? "N/A"
                  : character.powerstats.power}
              </li>
              <li>
                Combat Skills:{" "}
                {character.powerstats.combat === "null"
                  ? "N/A"
                  : character.powerstats.combat}
              </li>
            </ul>
          </Col>
          <Col className="text-center">
            <h2>Factoids</h2>
            <br />
            <div>
              <h4>
                Gender - <span>{character.appearance.gender}</span>
              </h4>
              <h4>
                Race -{" "}
                <span>
                  {character.appearance.race !== "null"
                    ? character.appearance.race
                    : "N/A"}
                </span>
              </h4>
              <h4>
                Height -{" "}
                <span>
                  {character.appearance.height[0] !== "-"
                    ? character.appearance.height[0]
                    : "N/A"}
                </span>
              </h4>
              <h4>
                Weight -{" "}
                <span>
                  {character.appearance.weight[0] !== "- lb"
                    ? character.appearance.weight[0]
                    : "N/A"}
                </span>
              </h4>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Button className="mx-2" variant="success">
            <Link
              to={{
                pathname: "/battle-room",
                state: {
                  fighter: this.state.characterStats,
                },
              }}
            >
              Add to DOJO
            </Link>
          </Button>
          <Button className="mx-2" variant="secondary" href="/characters">
            Back to Search
          </Button>
        </Row>
      </Container>
    ) : (
      <div className="text-center mx-0">
        <Image
          src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
          height="500"
        />
      </div>
    );
  }
}

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Image, Container, Row, Col, Button } from "react-bootstrap";

export default function Character() {
  let { key } = useParams();
  const [character, setCharacter] = useState({});
  const [charStats, setCharStats] = useState({});
  ////DESIGN CHARACTER PAGE

  useEffect(() => {
    fetch(`https://www.superheroapi.com/api.php/3619192178108339/${key}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
        setCharStats({
          name: data.name,
          img: data.image.url,
          strength: data.powerstats.strength,
        });
      })
      .catch((err) => console.log(err));
  }, [key]);

  return (
    <Container className="mx-2 mb-4">
      <Row className="justify-content-center mt-2">
        <Col className="text-center">
          <Image
            src={
              character.image
                ? character.image.url
                : "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
            }
            height="200"
          />
          <p>
            {character.biography
              ? character.biography["first-appearance"]
              : " "}
          </p>
        </Col>
        <Col className="text-center">
          {character.biography ? (
            <div>
              <h1>{character.name}</h1>
              <h2>{character.biography["full-name"]}</h2>
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
          ) : (
            <Image
              src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
              height="200"
            />
          )}
        </Col>
      </Row>
      <Row className="mt-3 justify-content-center">
        <h2>Character Info</h2>
      </Row>
      <Row>
        <Col className="text-center">
          <h2>Power Stats</h2>
          {character.powerstats ? (
            <ul style={{ listStyle: "none", fontSize: "24px", padding: "0" }}>
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
          ) : (
            <h4>Loading</h4>
          )}
        </Col>
        <Col className="text-center">
          <h2>Factoids</h2>
          <br />
          {character.appearance ? (
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
          ) : (
            <h4>Loading...</h4>
          )}
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Button className="mx-2" variant="success">
          Add to DOJO
        </Button>
        <Button className="mx-2" variant="secondary" href="/characters">
          Back to Search
        </Button>
      </Row>
    </Container>
  );
}

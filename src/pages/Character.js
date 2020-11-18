import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Image, Container, Row, Col } from "react-bootstrap";

export default function Character() {
  let { key } = useParams();
  const [character, setCharacter] = useState({});
  ////DESIGN CHARACTER PAGE

  useEffect(() => {
    fetch(`https://www.superheroapi.com/api.php/3619192178108339/${key}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
      })
      .catch((err) => console.log(err));
  }, [key]);

  return (
    <Container>
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
        </Col>
        <Col className="text-center">
          <h1>{character.name}</h1>
          <h2>
            {character.biography
              ? character.biography["full-name"]
              : "Loading..."}
          </h2>
          <h4 className="text-muted">
            {character.biography ? character.biography.publisher : "Loading..."}
          </h4>
          <br />
          <h4>
            Alignment:{" "}
            <span className="text-capitalize">
              {character.biography ? character.biography.alignment : ""}
            </span>
          </h4>
        </Col>
      </Row>
      <Row className="mt-3">
        <h2>Power Stats</h2>
      </Row>
      <Row>
        <Col>
          <ul style={{ listStyle: "none", fontSize: "24px" }}>
            <li>
              Strength: {character.powerstats && character.powerstats.strength}
            </li>
            <li>
              Intelligence:{" "}
              {character.powerstats && character.powerstats.intelligence}
            </li>
            <li>Speed: {character.powerstats && character.powerstats.speed}</li>
            <li>
              Durability:{" "}
              {character.powerstats && character.powerstats.durability}
            </li>
            <li>Power: {character.powerstats && character.powerstats.power}</li>
            <li>
              Combat Skills:{" "}
              {character.powerstats && character.powerstats.combat}
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

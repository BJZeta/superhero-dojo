import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Image, Row } from "react-bootstrap";
import { showCharacterInfo } from "../actions/searchActions";

const CharacterPage = ({ match }) => {
  const characterID = match.params.id;

  const dispatch = useDispatch();

  const characterInfo = useSelector((state) => state.characterInfo);
  const { loading, character, error } = characterInfo;

  useEffect(() => {
    dispatch(showCharacterInfo(characterID));
  }, [dispatch, characterID]);

  function capitalize(word) {
    return word.trim().replace(/^\w/, (c) => c.toUpperCase());
  }

  return (
    <Container>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row className="text-center">
          <Col md={6}>
            <Image src={character.image && character.image.url} width="80%" />
          </Col>
          <Col md={6}>
            <h2>{character.name}</h2>
            <h3>
              Alias: {character.biography && character.biography["full-name"]}
            </h3>
            <Row>
              <Col md={6}>
                <h4>
                  Alignment:{" "}
                  {character.biography &&
                    capitalize(character.biography.alignment)}
                </h4>
                <br />
                <h4>
                  First Appearance: <br />
                  {character.biography &&
                    character.biography["first-appearance"]}
                </h4>
                <br />
                <h4>
                  Gender:{" "}
                  {character.appearance &&
                    (character.appearance.gender === "-"
                      ? "N/A"
                      : character.appearance.gender)}
                </h4>
                <br />
                <h4>
                  Race: {character.appearance && character.appearance.race}
                </h4>
                <br />
                <h4>
                  Height:{" "}
                  {character.appearance && character.appearance.height[0]}
                </h4>
              </Col>
              <Col md={6}>
                <h4>
                  Strength:{" "}
                  {character.powerstats && character.powerstats.strength}
                </h4>
                <br />
                <h4>
                  Intelligence:{" "}
                  {character.powerstats &&
                    (character.powerstats.intelligence === "null"
                      ? "N/A"
                      : character.powerstats.intelligence)}
                </h4>
                <br />
                <h4>
                  Speed:{" "}
                  {character.powerstats &&
                    (character.powerstats.speed === "null"
                      ? "N/A"
                      : character.powerstats.speed)}
                </h4>
                <br />
                <h4>
                  Durability: {character.powerstats &&
                    (character.powerstats.durability === "null"
                      ? "N/A"
                      : character.powerstats.durability)}
                </h4>
                <br />
                <h4>
                  Power:{" "}
                  {character.powerstats &&
                    (character.powerstats.power === "null"
                      ? "N/A"
                      : character.powerstats.power)}
                </h4>
                <br />
                <h4>
                  Combat-Skills:{" "}
                  {character.powerstats &&
                    (character.powerstats.combat === "null"
                      ? "N/A"
                      : character.powerstats.combat)}
                </h4>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CharacterPage;

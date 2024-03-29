import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  Col,
  Container,
  Image,
  Row,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

const CharacterInfoModal = (props) => {
  const [character, setCharacter] = useState({});
  const [loading, setIsLoading] = useState(false);
  const [error, setErrorMessage] = useState(null);
  const [isPlayable, setIsPlayable] = useState(null);

  const API = `${process.env.REACT_APP_API_KEY}/${props.characterID}`;

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        if (data.response === "success") {
          setCharacter(data);
          checkIfNotPlayable(data.powerstats.power);
        } else {
          setErrorMessage(data.error);
          setIsLoading(false);
        }
      });
  }, [API]);

  function onButtonClick(event) {
    props.onAddCharacter(character);
    props.onHide();
    props.onEmptySearchResults();
  }

  function checkIfNotPlayable(power) {
    if (power === "null") {
      setIsPlayable(false);
    } else {
      setIsPlayable(true);
    }
  }

  const renderTooltip = (props) => (
    <Tooltip className="tooltip" id="button-tooltip" {...props}>
      This character is unplayable due to incomplete stat sheet
    </Tooltip>
  );

  function capitalize(word) {
    return word.trim().replace(/^\w/, (c) => c.toUpperCase());
  }

  return (
    <Modal {...props} size="lg" aria-labelledby={character.id} centered>
      <Modal.Header>
        {loading && <h2>Loading....</h2>}
        {error && <h2>{error}</h2>}
        <Modal.Title id={character.id}>
          <h3>
            {character.name} -{" "}
            <span>
              {character.biography && character.biography["full-name"]}
            </span>
          </h3>
        </Modal.Title>
        {isPlayable ? (
          <Button className="btn btn-danger" on onClick={onButtonClick}>
            Add Fighter <i className="fas fa-fist-raised" />
          </Button>
        ) : (
          <OverlayTrigger
            placement="bottom-end"
            delay={{ show: 200, hide: 400 }}
            overlay={renderTooltip}
          >
            <Button variant="danger" className="button-disabled">
              Add Fighter
            </Button>
          </OverlayTrigger>
        )}
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="text-center">
            <Col md={6}>
              <Image src={character.image && character.image.url} width="80%" />
            </Col>
            <Col md={6}>
              <Row>
                <Col md={6}>
                  <h4>
                    Alignment:{" "}
                    {character.biography &&
                      capitalize(character.biography.alignment)}
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
                    Durability:{" "}
                    {character.powerstats &&
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
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <h5 className="mr-auto">
          First Appearance:{" "}
          {character.biography && character.biography["first-appearance"]}
        </h5>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CharacterInfoModal;

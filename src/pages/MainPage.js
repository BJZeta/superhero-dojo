import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { MDBView, MDBMask } from "mdbreact";
import SearchForm from "../components/SearchForm";
import questionMark from "../assets/question.gif";

const MainPage = () => {
  const [characters, setCharacters] = useState([]);

  const handleAddCharacter = (newCharacter) => {
    if (characters.length <= 2) {
      setCharacters((currentCharacters) => [
        ...currentCharacters,
        newCharacter,
      ]);
    }
  };

  const handleEmptySearchForm = () => {
    setCharacters([]);
  };

  const handleRemoveCharacter = (characterId) => {
    setCharacters((characters) => characters.splice(characterId));
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={3} className="float-left">
          {characters[0] ? (
            <>
              <h4>{characters[0].name}</h4>
              <MDBView hover>
                <img
                  className="float-left"
                  src={characters[0].image && characters[0].image.url}
                  width="80%"
                  alt="fighter"
                />
                <MDBMask className="flex-center" overlay="stylish-strong">
                  <Button
                    onClick={() => handleRemoveCharacter(characters[0].id)}
                  >
                    Remove
                  </Button>
                </MDBMask>
              </MDBView>
            </>
          ) : (
            <>
              <h4>Select Your Fighters</h4>
              <Image className="float-left" src={questionMark} width="80%" />
            </>
          )}
        </Col>
        <Col lg={5}>
          {characters[1] ? (
            <Button>Let them FIGHT!</Button>
          ) : (
            <SearchForm
              addCharacter={handleAddCharacter}
              emptySearchForm={handleEmptySearchForm}
            />
          )}
        </Col>
        <Col lg={3}>
          <h4>{characters[1] ? characters[1].name : "Select Your Fighters"}</h4>
          <Image
            className="float-left"
            src={
              characters[1] && characters[1].image
                ? characters[1].image.url
                : questionMark
            }
            width="80%"
          />
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
};

export default MainPage;

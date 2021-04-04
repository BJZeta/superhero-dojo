import React, { useEffect, useState } from "react";
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
    setCharacters(characters.splice(characterId, 1));
    console.log(characters);
  };

  function checkWinner(fighter1, fighter2) {
    let stats1 = 0;
    let stats2 = 0;

    stats1 =
      Number(fighter1.powerstats.intelligence) +
      Number(fighter1.powerstats.strength) +
      Number(fighter1.powerstats.speed) +
      Number(fighter1.powerstats.durability) +
      Number(fighter1.powerstats.power) +
      Number(fighter1.powerstats.combat);
    stats2 =
      Number(fighter2.powerstats.intelligence) +
      Number(fighter2.powerstats.strength) +
      Number(fighter2.powerstats.speed) +
      Number(fighter2.powerstats.durability) +
      Number(fighter2.powerstats.power) +
      Number(fighter2.powerstats.combat);

    console.log(stats1, stats2);

    if (stats1 > stats2) {
      return console.log(fighter1.name);
    } else if (stats1 < stats2) {
      return console.log(fighter2.name);
    } else {
      return console.log("Tie!!");
    }
  }

  const handleSetWinner = async (fighter1, fighter2) => {
    checkWinner(fighter1, fighter2);
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
                    value={characters[0].id}
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
          {characters.length === 2 ? (
            <Button
              onClick={() => handleSetWinner(characters[0], characters[1])}
            >
              Let them FIGHT!
            </Button>
          ) : (
            <SearchForm
              addCharacter={handleAddCharacter}
              emptySearchForm={handleEmptySearchForm}
            />
          )}
        </Col>
        <Col lg={3}>
          {characters[1] ? (
            <>
              <h4>{characters[1].name}</h4>
              <MDBView hover>
                <img
                  className="float-right"
                  src={characters[1].image && characters[1].image.url}
                  width="80%"
                  alt="fighter"
                />
                <MDBMask className="flex-center" overlay="stylish-strong">
                  <Button
                    value={characters[1].id}
                    onClick={(e) => handleRemoveCharacter(e.target.value)}
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
      </Row>
      <Row>
      </Row>
    </Container>
  );
};

export default MainPage;

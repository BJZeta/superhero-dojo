import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Results from "../components/Results";
import SearchForm from "../components/SearchForm";
import questionMark from "../assets/question.gif";

const MainPage = () => {
  const [characters, setCharacters] = useState([]);
  const [winner, setWinner] = useState({});
  const [loser, setLoser] = useState({});
  const [haveFought, setHaveFought] = useState(false);

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
      setWinner(fighter1);
      setLoser(fighter2)
      setHaveFought(true);
    } else if (stats1 < stats2) {
      setWinner(fighter2);
      setLoser(fighter1)
      setHaveFought(true);
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
              <img
                  className="float-left"
                  src={characters[0].image && characters[0].image.url}
                  width="80%"
                  alt="fighter"
                />
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
              <h4 className="text-center">{characters[1].name}</h4>
              <img
                  className="float-right"
                  src={characters[1].image && characters[1].image.url}
                  width="80%"
                  alt="fighter"
                />
            </>
          ) : (
            <>
              <h4>Select Your Fighters</h4>
              <Image className="float-left" src={questionMark} width="80%" />
            </>
          )}
        </Col>
      </Row>
      {haveFought && <Results winner={winner} loser={loser} />}
    </Container>
  );
};

export default MainPage;

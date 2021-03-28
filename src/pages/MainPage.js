import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import SearchForm from "../components/SearchForm";
import questionMark from '../assets/question.gif'


const MainPage = () => {
  const [characters, setCharacters] = useState([]);

  const handleAddCharacter = (newCharacter) => {
    if(characters.length <= 2) {
      setCharacters(currentCharacters => [
        ...currentCharacters, newCharacter
      ])
    }
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={3} className="float-left">
          <h4>{characters[0] ? characters[0].name : 'Select Your Fighters'}</h4>
          <Image
            className="float-left"
            src={characters[0] && characters[0].image ? characters[0].image.url : questionMark}
            width="80%"
          />
        </Col>
        <Col lg={5}>
          <SearchForm addCharacter={handleAddCharacter} />
        </Col>
        <Col lg={3}>
        <h4>{characters[1] ? characters[1].name : 'Select Your Fighters'}</h4>
          <Image
            className="float-left"
            src={characters[1] && characters[1].image ? characters[1].image.url : questionMark}
            width="80%"
          />
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
};

export default MainPage;

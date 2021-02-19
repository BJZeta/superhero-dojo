import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Image, Row } from "react-bootstrap";
import { showCharacterInfo } from "../actions/searchActions";

const CharacterPage = ({ match }) => {
  const characterID = match.params.id;

  const dispatch = useDispatch();

  const characterInfo = useSelector((state) => state.characterInfo);
  const { loading, character, error } = characterInfo;

  useEffect(() => {
    dispatch(showCharacterInfo(characterID));
  }, [dispatch, characterID]);

  return (
    <Container>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
          <Row>
            <Image src={character.image && character.image.url} />
          </Row>
        )
      }
    </Container>
  );
};

export default CharacterPage;

import React, { useState } from "react";
import { Card, Button, Image } from "react-bootstrap";
import CharacterInfoModal from "./CharacterInfoModal";

const SearchCard = ({ character, addCharacter, onEmptyResults }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Card className="mb-3">
        <Card.Body>
          <div className="d-flex justify-content-between">
            <div>
              <Card.Title>
                {character.name} -{" "}
                <span className="text-muted font-weight-light">
                  {character.biography["full-name"]}
                </span>
              </Card.Title>
              <Card.Subtitle>
                {character.biography.publisher !== "null"
                  ? character.biography.publisher
                  : ""}
              </Card.Subtitle>
            </div>
            <div>
              <Image
                className="d-none d-md-block"
                height="100"
                src={character.image.url}
                alt={character.name}
              />
            </div>
          </div>
          <Card.Text>
            <Button variant="secondary" onClick={() => setModalShow(true)}>See Stats</Button>
          </Card.Text>
        </Card.Body>
      </Card>
      <CharacterInfoModal
        characterID={character.id}
        show={modalShow}
        onHide={() => setModalShow(false)}
        onAddCharacter={addCharacter}
        onEmptySearchResults={onEmptyResults}
      />
    </>
  );
};

export default SearchCard;

import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Card, Button, Image } from "react-bootstrap";

const SearchCard = ({ character }) => {
  return (
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
          <LinkContainer to={`/character/${character.id}`}>
            <Button variant="secondary">See Stats</Button>
          </LinkContainer>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SearchCard;

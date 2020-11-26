import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

export default function SearchCard({ character }) {
  const link = `/character/${character.id}`;

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
            <img
              className="d-none d-md-block"
              height="70"
              src={character.image.url}
              alt={character.name}
            />
          </div>
        </div>
        <Card.Text>
          <Button variant="secondary" key={character.id}>
            <Link style={{ textDecoration: "none", color: "#fff" }} to={link}>
              See Stats
            </Link>
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

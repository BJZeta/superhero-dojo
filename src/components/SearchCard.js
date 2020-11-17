import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Badge, Card, Button, Collapse } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

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

import React, { useState } from "react";
import { Badge, Card, Button, Collapse } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

export default function SearchCard({ character }) {
  const [open, setOpen] = useState(false);
  ////Work on card
  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title>{character.name}</Card.Title>
        </div>
      </Card.Body>
    </Card>
  );
}

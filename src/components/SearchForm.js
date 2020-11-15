import React from "react";
import { Form, Col } from "react-bootstrap";

export default function SearchForm({ name, onNameChange }) {
  return (
    <Form>
      <Form.Row className="aling-items-end">
        <Form.Group as={Col}>
          <Form.Label>Character Name</Form.Label>
          <Form.Control
            onChange={onNameChange}
            name="name"
            type="text"
            value={name}
          />
        </Form.Group>
      </Form.Row>
    </Form>
  );
}

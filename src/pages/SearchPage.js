import React from "react";
import { Form, Container, Button } from "react-bootstrap";

const SearchPage = () => {
  return (
    <Container md={6}>
      <Form>
        <Form.Group controlId="formCharacterSearch">
          <Form.Label>Search Character</Form.Label>
          <Form.Control type="text" placeholder="Enter a Hero/Villain" />
          <Form.Text className="text-muted">
            If a character is appearing, try using their Alias, i.e. Dick
            Grayson, Miles Morales
          </Form.Text>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default SearchPage;

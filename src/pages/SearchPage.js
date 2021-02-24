import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Container, Button, Row, Col, Image } from "react-bootstrap";
import { listCharacters } from "../actions/searchActions";
import SearchCard from "../components/SearchCard";

const SearchPage = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const searchList = useSelector((state) => state.searchList);
  const { loading, characters, error } = searchList;

  const handleSearchCharacter = (e) => {
    e.preventDefault();
    dispatch(listCharacters(name));
  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <Form onSubmit={handleSearchCharacter}>
            <Form.Group controlId="formCharacterSearch">
              <Form.Label>Search Character</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a Hero/Villain"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Text className="text-muted" as="p">
                If a character is appearing, try using their Alias, i.e. Dick
                Grayson, Miles Morales. Also, try hyphens (Spider-Man)
              </Form.Text>
              <Button variant="primary" type="submit">
                Search
              </Button>
            </Form.Group>
          </Form>
          {loading && <h1>Loading....</h1>}
          {error && <h3>{error}</h3>}
          {characters &&
            characters.map((character) => <SearchCard character={character} />)}
        </Col>
      </Row>
      <Row>
        <Col md={4} xs={6} className="float-left">
          <Image className="float-left" src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081" width="80%" />
        </Col>
        <Col  md={4}>
          <Button>
            Button
          </Button>
        </Col>
        <Col md={4} xs={6} >
          <Image className="float-right" src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081" width="80%" />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchPage;

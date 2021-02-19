import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Container, Button } from "react-bootstrap";
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
    <Container md={6}>
      <Form onSubmit={handleSearchCharacter}>
        <Form.Group controlId="formCharacterSearch">
          <Form.Label>Search Character</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter a Hero/Villain"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Text className="text-muted">
            If a character is appearing, try using their Alias, i.e. Dick
            Grayson, Miles Morales
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
    </Container>
  );
};

export default SearchPage;

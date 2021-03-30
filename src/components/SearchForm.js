import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import SearchCard from "./SearchCard";

const SearchForm = ({ addCharacter, emptySearchForm }) => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setErrorMessage] = useState(null);

  const handleSearchCharacter = (e) => {
    e.preventDefault();

    setLoading(true);
    setErrorMessage(null);
    fetch(
      `https://www.superheroapi.com/api.php/3619192178108339/search/${name}`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.response === "success") {
          setCharacters(res.results);
          setName("");
          setLoading(false);
        } else {
          setErrorMessage(res.error);
          setLoading(false);
        }
      });
  };

  const handleEmptySearchResults = () => {
    setCharacters([])
  }

  return (
    <>
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
            If a character isn't appearing, try using their Alias, i.e. Dick
            Grayson, Miles Morales. Also, try hyphens (Spider-Man)
          </Form.Text>
          <div className="text-center">
            <Button variant="primary" type="submit">
              Search
            </Button>
          </div>
        </Form.Group>
      </Form>
      {loading && <h1>Loading....</h1>}
      {error && <h3>{error}</h3>}
      {characters &&
        characters.map((character) => (
          <>
            <SearchCard addCharacter={addCharacter} onEmptyResults={handleEmptySearchResults} character={character} />{" "}
          </>
        ))}
    </>
  );
};

export default SearchForm;

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import SearchCard from "./SearchCard";
import CharacterPagination from "./CharacterPagination";

const SearchForm = ({ addCharacter }) => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setErrorMessage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(3);

  const handleSearchCharacter = (e) => {
    e.preventDefault();

    setLoading(true);
    setErrorMessage(null);
    fetch(
      `${process.env.REACT_APP_API_KEY}/search/${name}`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.response === "success") {
          setCharacters(res.results);
          setName("");
          setLoading(false);
          setCurrentPage(1);
        } else {
          setErrorMessage(res.error);
          setLoading(false);
        }
      });
  };

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  const handleEmptySearchResults = () => {
    setCharacters([]);
  };

  const handlePaginate = (pageNumber) => setCurrentPage(pageNumber);

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
            <Button className="hover" variant="primary" type="submit">
              Search
            </Button>
          </div>
        </Form.Group>
      </Form>
      {loading && <h1>Loading....</h1>}
      {error && <h3>{error}</h3>}
      {currentCharacters &&
        currentCharacters.map((character) => (
          <>
            <SearchCard
              addCharacter={addCharacter}
              onEmptyResults={handleEmptySearchResults}
              character={character}
            />{" "}
          </>
        ))}
      <CharacterPagination
        charactersPerPage={charactersPerPage}
        totalCharacters={characters.length}
        paginate={handlePaginate}
      />
    </>
  );
};

export default SearchForm;

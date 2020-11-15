import React, { useState } from "react";
import { Container } from "react-bootstrap";
import useFetchCharacters from "../hooks/useFetchCharacters";
import SearchForm from "../components/SearchForm";
import SearchCard from "../components/SearchCard";

export default function Characters() {
  const [name, setName] = useState("");
  const { characters, loading } = useFetchCharacters(name);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <Container className="my-4">
      <h1 className="mb-4">Characer Search</h1>
      <SearchForm name={name} onNameChange={handleNameChange} />
      {loading && <h1>Loading...</h1>}
      {characters &&
        characters.map((character) => {
          return <SearchCard key={character.id} character={character} />;
        })}
    </Container>
  );
}

import React, { useState } from "react";
import { Container } from "react-bootstrap";
import useFetchCharacters from "../hooks/useFetchCharacters";
import SearchForm from "../components/SearchForm";

export default function Characters() {
  const { name, setName } = useState({});
  const { characters, loading, error } = useFetchCharacters(name);

  function handleNameChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setName((prevName) => {
      return { ...prevName, [param]: value };
    });
  }

  return (
    <Container className="my-4">
      <h1 className="mb-4">Characer Search</h1>
      <SearchForm name={name} onNameChange={handleNameChange} />
    </Container>
  );
}

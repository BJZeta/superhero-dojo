import React, { useState, useEffect } from "react";

export default function CharCard(props) {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [card, setCard] = useState([]);

  const url = `https://superheroapi.com/api/3619192178108339/${props.charId}`;

  const proxyUrl = "https://cors-anywhere.herokuapp.com/";

  useEffect(() => {
    fetch(proxyUrl + url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCard(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return <h1>{card.name}</h1>;
  }
}

// `

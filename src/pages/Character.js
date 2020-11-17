import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Character() {
  let { key } = useParams();
  const [character, setCharacter] = useState({});
  ////DESIGN CHARACTER PAGE

  useEffect(() => {
    fetch(`https://www.superheroapi.com/api.php/3619192178108339/${key}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
      })
      .catch((err) => console.log(err));
  }, [key]);

  return (
    <div>
      {character.biography ? (
        character.biography["full-name"]
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}

import React from "react";
import { Button } from "react-bootstrap";

const Tie = ({ characterOne, characterTwo, clearButton }) => {
  return (
    <div className="animate__animated animate__fadeInUpBig text-center mt-5">
      <h1>We Have A TIE!</h1>
      <p className="lead">
        Both {characterOne.name} and {characterTwo.name} would fight to a Stand
        Still!
      </p>
      <Button className="btn-danger hover" onClick={(e) => clearButton()}>
        Search New Characters
      </Button>
    </div>
  );
};

export default Tie;

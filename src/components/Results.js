import React from "react";

const Results = ({ winner }) => {
  let powerstats = winner.powerstats;

  let arr = Object.values(powerstats);

  let max = Math.max(...arr);

  return (
    <div>
      <img src={winner.image.url} alt={winner.name} />
      <h2>Winner: {winner.name}</h2>
      <h4>Greatest Strength: {max}</h4>
    </div>
  );
};

export default Results;
